/**
 * Generates optimized PNG/JPG derivatives and blur placeholders for raster assets.
 * Run: node scripts/optimize-images.mjs
 *
 * Format rules (site-wide):
 *   - Photos → JPG
 *   - Vectors, 3D renders, sketches, UI screenshots, text → PNG
 *   - Never WebP
 *
 * Output:
 *   public/images/*.{png,jpg}  — width-capped display files
 *   src/data/image-assets.ts   — src + blurDataURL lookup for ProgressiveImage
 */

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const IMAGE_DIR = path.join(process.cwd(), 'public/images');
const OUTPUT_FILE = path.join(process.cwd(), 'src/data/image-assets.ts');
const MAX_WIDTH_PNG = 4800;
const MAX_WIDTH_JPG = 3200;
const JPG_QUALITY = 90;
const BLUR_WIDTH = 16;

const RASTER_EXT = new Set(['.png', '.jpg', '.jpeg']);

/** Exact basenames (no extension) treated as photographs. */
const PHOTO_BASENAMES = new Set([
  'aon-section-01-persona-workshop',
  'aon-section-03-closed-captioning',
  'aon-section-03-mobile-sjt',
  'burton-section-03-ideation-workshop',
  'burton-section-04-drainage-pipe',
  'burton-section-04-initial-planting',
  'burton-section-04-storm-flooding',
  'burton-section-05-mature-growth',
  'inpa-overview-backdrop-signage',
  'inpa-overview-event-program',
  'inpa-overview-keynote-staging',
  'inpa-section-02-registration-desk',
  'inpa-section-02-tote-bags',
  'inpa-section-04-attendee-badges',
  'inpa-section-04-speaker-namecards',
  'inpa-section-04-staff-apparel',
  'project-arachnology-lab',
  'project-global-conference',
  'project-immersive-assessment',
  'project-ornithology-congress',
]);

/** Basename prefixes treated as photographs. */
const PHOTO_PREFIXES = [
  'avatar-',
  'isa-',
  'burton-section-01-',
  'cii-section-05-',
];

function isPhotoAsset(basename) {
  if (PHOTO_BASENAMES.has(basename)) return true;
  return PHOTO_PREFIXES.some(
    (prefix) => basename === prefix || basename.startsWith(prefix),
  );
}

function removeWebpSibling(filePath) {
  const webpPath = filePath.replace(/\.(png|jpe?g)$/i, '.webp');
  if (fs.existsSync(webpPath)) {
    fs.unlinkSync(webpPath);
  }
}

function walkImages(dir) {
  /** One source file per basename — prefer PNG when both PNG and JPG exist. */
  const byBasename = new Map();

  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const ext = path.extname(entry).toLowerCase();
    if (!fs.statSync(fullPath).isFile() || !RASTER_EXT.has(ext)) continue;

    const basename = path.basename(entry, ext);
    const existing = byBasename.get(basename);
    if (!existing) {
      byBasename.set(basename, fullPath);
      continue;
    }

    const existingExt = path.extname(existing).toLowerCase();
    if (ext === '.png' && existingExt !== '.png') {
      byBasename.set(basename, fullPath);
    }
  }

  return [...byBasename.values()];
}

function displayPathFor(filePath) {
  const basename = path.basename(filePath, path.extname(filePath));
  const ext = isPhotoAsset(basename) ? '.jpg' : '.png';
  return path.join(IMAGE_DIR, `${basename}${ext}`);
}

function toPublicSrc(filePath) {
  const relative = path.relative(path.join(process.cwd(), 'public'), filePath);
  return `/${relative.replace(/\\/g, '/')}`;
}

async function processImage(filePath) {
  removeWebpSibling(filePath);

  const basename = path.basename(filePath, path.extname(filePath));
  const displayPath = displayPathFor(filePath);
  const photo = isPhotoAsset(basename);
  const originalSize = fs.statSync(filePath).size;
  const samePath = path.resolve(filePath) === path.resolve(displayPath);
  const outputTarget = samePath
    ? path.join(IMAGE_DIR, `.tmp-${basename}${photo ? '.jpg' : '.png'}`)
    : displayPath;

  const pipeline = sharp(filePath).rotate();
  const metadata = await pipeline.metadata();
  const maxWidth = photo ? MAX_WIDTH_JPG : MAX_WIDTH_PNG;
  const needsResize = (metadata.width ?? 0) > maxWidth;

  const resized = needsResize
    ? pipeline.resize(maxWidth, null, { withoutEnlargement: true })
    : pipeline;

  if (photo) {
    await resized.clone().jpeg({ quality: JPG_QUALITY, mozjpeg: true }).toFile(outputTarget);
  } else {
    await resized.clone().png({ compressionLevel: 9 }).toFile(outputTarget);
  }

  if (samePath) {
    fs.renameSync(outputTarget, displayPath);
  } else {
    fs.renameSync(outputTarget, displayPath);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  }

  const blurBuffer = await sharp(displayPath)
    .resize(BLUR_WIDTH, null, { fit: 'inside' })
    .png({ compressionLevel: 9, palette: true })
    .toBuffer();

  const displaySrc = toPublicSrc(displayPath);
  const blurDataURL = `data:image/png;base64,${blurBuffer.toString('base64')}`;
  const outputSize = fs.statSync(displayPath).size;

  return {
    originalSrc: displaySrc,
    displaySrc,
    blurDataURL,
    originalSize,
    outputSize,
    format: photo ? 'JPG' : 'PNG',
  };
}

function writeAssetMap(entries) {
  const lines = entries
    .sort((a, b) => a.originalSrc.localeCompare(b.originalSrc))
    .map(
      ({ originalSrc, displaySrc, blurDataURL }) =>
        `  ${JSON.stringify(originalSrc)}: {\n    src: ${JSON.stringify(displaySrc)},\n    blurDataURL: ${JSON.stringify(blurDataURL)},\n  },`,
    );

  const contents = `/* Auto-generated by scripts/optimize-images.mjs — do not edit manually */\n\nexport interface ImageAsset {\n  src: string;\n  blurDataURL: string;\n}\n\nexport const imageAssets: Record<string, ImageAsset> = {\n${lines.join('\n')}\n};\n\nexport function resolveImageAsset(src: string): ImageAsset | undefined {\n  return imageAssets[src];\n}\n\nexport function resolveImageSrc(src: string): string {\n  return resolveImageAsset(src)?.src ?? src;\n}\n`;

  fs.writeFileSync(OUTPUT_FILE, contents);
}

async function main() {
  const files = walkImages(IMAGE_DIR);
  const entries = [];
  let savedBytes = 0;

  for (const filePath of files) {
    const result = await processImage(filePath);
    entries.push(result);
    savedBytes += Math.max(0, result.originalSize - result.outputSize);
    console.log(
      `${path.basename(filePath)} → ${path.basename(result.displaySrc)} (${result.format}) (${formatBytes(result.originalSize)} → ${formatBytes(result.outputSize)})`,
    );
  }

  // Remove any leftover WebP files.
  for (const entry of fs.readdirSync(IMAGE_DIR)) {
    if (entry.endsWith('.webp')) {
      fs.unlinkSync(path.join(IMAGE_DIR, entry));
    }
  }

  writeAssetMap(entries);
  console.log(`\nWrote ${entries.length} entries to src/data/image-assets.ts`);
  console.log(`Estimated transfer savings vs originals: ${formatBytes(savedBytes)}`);
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
