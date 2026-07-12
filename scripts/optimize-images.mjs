/**
 * Generates optimized PNG/JPG derivatives and blur placeholders for raster assets.
 * Run: node scripts/optimize-images.mjs
 *
 * Format: determined by the file extension on disk (.jpg / .png).
 * The exporter chooses format in Figma — this script never converts between them.
 * Re-encodes in place only; output extension always matches input.
 * Pass --remove-stale-siblings to delete the other extension after a format swap.
 * Never WebP.
 *
 * Incremental processing:
 *   Each file's mtime + size is cached in .image-optimize-cache.json (gitignored).
 *   Unchanged files are skipped entirely — no resize, no re-encode, no blur
 *   regeneration — so re-running the script only touches images that are new
 *   or were actually replaced. This avoids silent re-compression drift (lossy
 *   JPG re-encodes are not perfectly idempotent) and unrelated diff noise in
 *   image-assets.ts. The cache is bootstrapped from the current
 *   image-assets.ts on first sight of an already-committed file, so adopting
 *   the cache doesn't force one big reprocessing pass.
 *
 * Output:
 *   public/images/*.{png,jpg}  — width-capped at 2400px
 *   src/data/image-assets.ts   — src + blurDataURL lookup for ProgressiveImage
 */

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { displayExtension, isJpgFile } from './image-format-utils.mjs';

const IMAGE_DIR = path.join(process.cwd(), 'public/images');
const OUTPUT_FILE = path.join(process.cwd(), 'src/data/image-assets.ts');
const CACHE_FILE = path.join(process.cwd(), 'scripts/.image-optimize-cache.json');
const MAX_WIDTH = 2400;
const JPG_QUALITY = 90;
const BLUR_WIDTH = 16;
/** PNG display files above this size are re-encoded even when already in image-assets.ts. */
const FORCE_REENCODE_MIN_BYTES = 5 * 1024 * 1024;

const RASTER_EXT = new Set(['.png', '.jpg', '.jpeg']);

function removeWebpSibling(filePath) {
  const webpPath = filePath.replace(/\.(png|jpe?g)$/i, '.webp');
  if (fs.existsSync(webpPath)) {
    fs.unlinkSync(webpPath);
  }
}

function removeStaleSiblings(basename, keepExt) {
  for (const ext of ['.png', '.jpg', '.jpeg']) {
    if (ext === keepExt || (keepExt === '.jpg' && ext === '.jpeg')) continue;
    const stalePath = path.join(IMAGE_DIR, `${basename}${ext}`);
    if (fs.existsSync(stalePath)) fs.unlinkSync(stalePath);
  }
}

function walkImages(dir) {
  const files = [];

  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const ext = path.extname(entry).toLowerCase();
    if (!fs.statSync(fullPath).isFile() || !RASTER_EXT.has(ext)) continue;
    files.push(fullPath);
  }

  return files;
}

function findDuplicateBasenames(files) {
  const byBasename = new Map();

  for (const filePath of files) {
    const basename = path.basename(filePath, path.extname(filePath));
    const group = byBasename.get(basename) ?? [];
    group.push(filePath);
    byBasename.set(basename, group);
  }

  return [...byBasename.entries()].filter(([, group]) => group.length > 1);
}

function toPublicSrc(filePath) {
  const relative = path.relative(path.join(process.cwd(), 'public'), filePath);
  return `/${relative.replace(/\\/g, '/')}`;
}

function loadCache() {
  if (!fs.existsSync(CACHE_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
  } catch {
    return {};
  }
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_FILE, `${JSON.stringify(cache, null, 2)}\n`);
}

/** Parses the currently generated image-assets.ts so first-run caching can trust it. */
function loadExistingAssetEntries() {
  if (!fs.existsSync(OUTPUT_FILE)) return new Map();
  const source = fs.readFileSync(OUTPUT_FILE, 'utf8');
  const entries = new Map();
  const re = /"(\/images\/[^"]+)":\s*\{\s*src:\s*"([^"]+)",\s*blurDataURL:\s*"([^"]+)",\s*\},/g;
  let match;
  while ((match = re.exec(source))) {
    const [, key, src, blurDataURL] = match;
    entries.set(key, { src, blurDataURL });
  }
  return entries;
}

async function processImage(filePath, cache, existingAssetEntries, shouldRemoveStaleSiblings) {
  const basename = path.basename(filePath, path.extname(filePath));
  const jpg = isJpgFile(filePath);
  const format = jpg ? 'JPG' : 'PNG';
  const stat = fs.statSync(filePath);
  const displaySrc = toPublicSrc(filePath);
  const metadata = await sharp(filePath).metadata();
  const oversize = (metadata.width ?? 0) > MAX_WIDTH;
  const forceReencode = oversize || (!jpg && stat.size >= FORCE_REENCODE_MIN_BYTES);

  const cached = cache[displaySrc];
  if (cached && cached.mtimeMs === stat.mtimeMs && cached.size === stat.size && !forceReencode) {
    return {
      originalSrc: displaySrc,
      displaySrc,
      blurDataURL: cached.blurDataURL,
      originalSize: stat.size,
      outputSize: stat.size,
      format: cached.format,
      skipped: true,
    };
  }

  // First time under the cache — trust the already-generated asset map instead
  // of forcing a one-time re-encode of every existing image, unless the file is
  // an oversized PNG that likely predates optimization.
  if (!cached) {
    const existing = existingAssetEntries.get(displaySrc);
    if (existing && !forceReencode) {
      cache[displaySrc] = { mtimeMs: stat.mtimeMs, size: stat.size, displaySrc: existing.src, blurDataURL: existing.blurDataURL, format };
      return {
        originalSrc: displaySrc,
        displaySrc: existing.src,
        blurDataURL: existing.blurDataURL,
        originalSize: stat.size,
        outputSize: stat.size,
        format,
        skipped: true,
      };
    }
  }

  removeWebpSibling(filePath);

  const originalSize = stat.size;
  const outputTarget = path.join(IMAGE_DIR, `.tmp-${basename}${displayExtension(filePath)}`);

  const pipeline = sharp(filePath).rotate();
  const maxWidth = MAX_WIDTH;
  const needsResize = (metadata.width ?? 0) > maxWidth;

  const resized = needsResize
    ? pipeline.resize(maxWidth, null, { withoutEnlargement: true })
    : pipeline;

  if (jpg) {
    await resized.clone().jpeg({ quality: JPG_QUALITY, mozjpeg: true }).toFile(outputTarget);
  } else {
    await resized.clone().png({ compressionLevel: 9 }).toFile(outputTarget);
  }

  fs.renameSync(outputTarget, filePath);

  if (shouldRemoveStaleSiblings) {
    removeStaleSiblings(basename, displayExtension(filePath));
  }

  const blurBuffer = await sharp(filePath)
    .resize(BLUR_WIDTH, null, { fit: 'inside' })
    .png({ compressionLevel: 9, palette: true })
    .toBuffer();

  const blurDataURL = `data:image/png;base64,${blurBuffer.toString('base64')}`;
  const outputStat = fs.statSync(filePath);

  cache[displaySrc] = { mtimeMs: outputStat.mtimeMs, size: outputStat.size, displaySrc, blurDataURL, format };

  return {
    originalSrc: displaySrc,
    displaySrc,
    blurDataURL,
    originalSize,
    outputSize: outputStat.size,
    format,
    skipped: false,
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
  const removeStaleSiblingsFlag = process.argv.includes('--remove-stale-siblings');
  const files = walkImages(IMAGE_DIR);
  const duplicates = findDuplicateBasenames(files);

  for (const [basename, group] of duplicates) {
    console.warn(
      `Duplicate basename "${basename}": ${group.map((f) => path.basename(f)).join(', ')} — remove the unused file, or pass --remove-stale-siblings after a format swap`,
    );
  }

  const cache = loadCache();
  const existingAssetEntries = loadExistingAssetEntries();

  // Drop cache entries for images that no longer exist.
  const currentDisplaySrcs = new Set(files.map((f) => toPublicSrc(f)));
  for (const key of Object.keys(cache)) {
    if (!currentDisplaySrcs.has(key)) delete cache[key];
  }

  const entries = [];
  let savedBytes = 0;
  let processedCount = 0;
  let skippedCount = 0;

  for (const filePath of files) {
    const result = await processImage(filePath, cache, existingAssetEntries, removeStaleSiblingsFlag);
    entries.push(result);

    if (result.skipped) {
      skippedCount += 1;
      continue;
    }

    processedCount += 1;
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
  saveCache(cache);

  console.log(`\nProcessed ${processedCount} image(s), skipped ${skippedCount} unchanged image(s).`);
  console.log(`Wrote ${entries.length} entries to src/data/image-assets.ts`);
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
