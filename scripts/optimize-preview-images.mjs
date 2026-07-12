/**
 * Generates listing-preview derivatives from full-size project images.
 * Run: node scripts/optimize-preview-images.mjs
 *
 * Reads preview image sources from src/data/projects.ts (previewImages primary/
 * secondary, or imageSrc when no previewImages block exists). Downscales each
 * source to a width suited for the projects listing card (up to ~680px rendered
 * at 2xl; 1360px wide covers 2× retina without upscaling) and writes copies to
 * public/images/previews/.
 *
 * Does not replace or modify full-size case-study assets in public/images/.
 *
 * Output:
 *   public/images/previews/*.{png,jpg}  — listing-sized display files
 *   src/data/preview-image-assets.ts      — src + blurDataURL for ProgressiveImage
 */

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { displayExtension, isJpgFile } from './image-format-utils.mjs';

const PROJECTS_FILE = path.join(process.cwd(), 'src/data/projects.ts');
const IMAGE_DIR = path.join(process.cwd(), 'public/images');
const PREVIEW_DIR = path.join(IMAGE_DIR, 'previews');
const OUTPUT_FILE = path.join(process.cwd(), 'src/data/preview-image-assets.ts');
const CACHE_FILE = path.join(process.cwd(), 'scripts/.preview-image-optimize-cache.json');

/** Listing card max 680px CSS at 2xl; 1360px covers 2× retina (680 × 2). */
const PREVIEW_MAX_WIDTH = 1360;
const JPG_QUALITY = 90;
const BLUR_WIDTH = 16;

function removeStalePreviewSiblings(basename, keepExt) {
  for (const ext of ['.png', '.jpg', '.jpeg']) {
    if (ext === keepExt) continue;
    const stalePath = path.join(PREVIEW_DIR, `${basename}${ext}`);
    if (fs.existsSync(stalePath)) fs.unlinkSync(stalePath);
  }
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

function toPublicSrc(filePath) {
  const relative = path.relative(path.join(process.cwd(), 'public'), filePath);
  return `/${relative.replace(/\\/g, '/')}`;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/** Split top-level `{ ... },` blocks inside the projects array. */
function splitProjectBlocks(arrayBody) {
  const blocks = [];
  let depth = 0;
  let start = -1;

  for (let i = 0; i < arrayBody.length; i += 1) {
    const char = arrayBody[i];
    if (char === '{') {
      if (depth === 0) start = i;
      depth += 1;
    } else if (char === '}') {
      depth -= 1;
      if (depth === 0 && start >= 0) {
        blocks.push(arrayBody.slice(start, i + 1));
        start = -1;
      }
    }
  }

  return blocks;
}

/** Extract a braced block starting at `openBraceIndex` (which points to `{`). */
function extractBracedBlock(text, openBraceIndex) {
  let depth = 0;
  for (let i = openBraceIndex; i < text.length; i += 1) {
    const char = text[i];
    if (char === '{') depth += 1;
    else if (char === '}') {
      depth -= 1;
      if (depth === 0) return text.slice(openBraceIndex, i + 1);
    }
  }
  throw new Error('Unbalanced braces while parsing projects.ts');
}

/** Collect listing preview sources declared in projects.ts. */
export function collectPreviewSources(projectsSource) {
  const arrayMatch = projectsSource.match(/export const projects[^=]*=\s*\[([\s\S]*)\];/);
  if (!arrayMatch) {
    throw new Error('Could not parse projects array in src/data/projects.ts');
  }

  const sources = new Set();

  for (const block of splitProjectBlocks(arrayMatch[1])) {
    const previewIndex = block.indexOf('previewImages:');
    if (previewIndex >= 0) {
      const openBraceIndex = block.indexOf('{', previewIndex);
      const previewBlock = extractBracedBlock(block, openBraceIndex);
      for (const match of previewBlock.matchAll(/src:\s*'(\/images\/[^']+)'/g)) {
        sources.add(match[1]);
      }
      continue;
    }

    const imageSrc = block.match(/imageSrc:\s*'(\/images\/[^']+)'/);
    if (imageSrc) sources.add(imageSrc[1]);
  }

  return [...sources].sort();
}

function previewOutputPath(sourcePath) {
  const basename = path.basename(sourcePath, path.extname(sourcePath));
  return path.join(PREVIEW_DIR, `${basename}${displayExtension(sourcePath)}`);
}

function previewPublicSrc(sourcePath) {
  const basename = path.basename(sourcePath, path.extname(sourcePath));
  return `/images/previews/${basename}${displayExtension(sourcePath)}`;
}

function resolveFullSizeSourcePath(declaredSrc) {
  const basenameNoExt = path.basename(declaredSrc, path.extname(declaredSrc));

  for (const ext of ['.png', '.jpg', '.jpeg']) {
    const candidate = path.join(IMAGE_DIR, `${basenameNoExt}${ext}`);
    if (fs.existsSync(candidate)) return candidate;
  }

  throw new Error(`Missing full-size source image for preview: ${declaredSrc}`);
}

async function processPreviewSource(declaredSrc, cache) {
  const sourcePath = resolveFullSizeSourcePath(declaredSrc);
  const basename = path.basename(sourcePath, path.extname(sourcePath));
  const jpg = isJpgFile(sourcePath);
  const format = jpg ? 'JPG' : 'PNG';
  const outputPath = previewOutputPath(sourcePath);
  const displaySrc = previewPublicSrc(sourcePath);
  const stat = fs.statSync(sourcePath);

  const cached = cache[declaredSrc];
  if (
    cached
    && cached.previewMaxWidth === PREVIEW_MAX_WIDTH
    && cached.sourceMtimeMs === stat.mtimeMs
    && cached.sourceSize === stat.size
    && cached.displaySrc === displaySrc
    && fs.existsSync(outputPath)
  ) {
    return {
      originalSrc: displaySrc,
      displaySrc,
      blurDataURL: cached.blurDataURL,
      declaredSrc,
      sourceSize: stat.size,
      outputSize: fs.statSync(outputPath).size,
      format,
      skipped: true,
    };
  }

  fs.mkdirSync(PREVIEW_DIR, { recursive: true });

  const pipeline = sharp(sourcePath).rotate();
  const metadata = await pipeline.metadata();
  const needsResize = (metadata.width ?? 0) > PREVIEW_MAX_WIDTH;

  const resized = needsResize
    ? pipeline.resize(PREVIEW_MAX_WIDTH, null, { withoutEnlargement: true })
    : pipeline;

  if (jpg) {
    await resized.clone().jpeg({ quality: JPG_QUALITY, mozjpeg: true }).toFile(outputPath);
  } else {
    await resized.clone().png({ compressionLevel: 9 }).toFile(outputPath);
  }

  const blurBuffer = await sharp(outputPath)
    .resize(BLUR_WIDTH, null, { fit: 'inside' })
    .png({ compressionLevel: 9, palette: true })
    .toBuffer();

  const blurDataURL = `data:image/png;base64,${blurBuffer.toString('base64')}`;
  const outputStat = fs.statSync(outputPath);

  removeStalePreviewSiblings(basename, displayExtension(sourcePath));

  cache[declaredSrc] = {
    previewMaxWidth: PREVIEW_MAX_WIDTH,
    sourceMtimeMs: stat.mtimeMs,
    sourceSize: stat.size,
    displaySrc,
    blurDataURL,
    format,
  };

  return {
    originalSrc: displaySrc,
    displaySrc,
    blurDataURL,
    declaredSrc,
    sourceSize: stat.size,
    outputSize: outputStat.size,
    format,
    skipped: false,
  };
}

function writePreviewAssetMap(entries) {
  const lines = entries
    .sort((a, b) => a.originalSrc.localeCompare(b.originalSrc))
    .map(
      ({ originalSrc, displaySrc, blurDataURL }) =>
        `  ${JSON.stringify(originalSrc)}: {\n    src: ${JSON.stringify(displaySrc)},\n    blurDataURL: ${JSON.stringify(blurDataURL)},\n  },`,
    );

  const contents = `/* Auto-generated by scripts/optimize-preview-images.mjs — do not edit manually */\n\nimport type { ImageAsset } from '@/data/image-assets';\n\nexport const previewImageAssets: Record<string, ImageAsset> = {\n${lines.join('\n')}\n};\n`;

  fs.writeFileSync(OUTPUT_FILE, contents);
}

function updateProjectsPreviewPaths(sourceToPreview) {
  let source = fs.readFileSync(PROJECTS_FILE, 'utf8');
  const arrayMatch = source.match(/export const projects[^=]*=\s*\[([\s\S]*)\];/);
  if (!arrayMatch) {
    throw new Error('Could not parse projects array in src/data/projects.ts');
  }

  let arrayBody = arrayMatch[1];
  let changed = false;

  const updatedBlocks = splitProjectBlocks(arrayBody).map((block) => {
    const previewIndex = block.indexOf('previewImages:');
    if (previewIndex >= 0) {
      const openBraceIndex = block.indexOf('{', previewIndex);
      const previewBlock = extractBracedBlock(block, openBraceIndex);
      let previewContent = previewBlock;
      for (const [sourceSrc, previewSrc] of sourceToPreview.entries()) {
        const next = previewContent.replaceAll(`'${sourceSrc}'`, `'${previewSrc}'`);
        if (next !== previewContent) {
          previewContent = next;
          changed = true;
        }
      }
      return block.replace(previewBlock, previewContent);
    }

    if (!block.includes('previewImages:')) {
      let nextBlock = block;
      for (const [sourceSrc, previewSrc] of sourceToPreview.entries()) {
        const imageSrcPattern = new RegExp(`(imageSrc:\\s*)'${sourceSrc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`);
        const replaced = nextBlock.replace(imageSrcPattern, `$1'${previewSrc}'`);
        if (replaced !== nextBlock) {
          nextBlock = replaced;
          changed = true;
        }
      }
      return nextBlock;
    }

    return block;
  });

  if (!changed) return;

  arrayBody = updatedBlocks.map((block) => block.trim()).join(',\n  ');
  source = source.replace(arrayMatch[1], arrayBody);
  fs.writeFileSync(PROJECTS_FILE, source);
}

async function main() {
  const projectsSource = fs.readFileSync(PROJECTS_FILE, 'utf8');
  const sources = collectPreviewSources(projectsSource);

  if (sources.length === 0) {
    console.log('No preview image sources found in src/data/projects.ts');
    return;
  }

  const cache = loadCache();
  const entries = [];
  const sourceToPreview = new Map();
  let processedCount = 0;
  let skippedCount = 0;
  let savedBytes = 0;

  console.log(`Found ${sources.length} listing preview source(s).\n`);

  for (const declaredSrc of sources) {
    const result = await processPreviewSource(declaredSrc, cache);
    entries.push(result);
    sourceToPreview.set(declaredSrc, result.displaySrc);

    if (result.skipped) {
      skippedCount += 1;
      console.log(
        `skip ${path.basename(declaredSrc)} → ${path.basename(result.displaySrc)} (${result.format}, ${formatBytes(result.outputSize)})`,
      );
      continue;
    }

    processedCount += 1;
    savedBytes += Math.max(0, result.sourceSize - result.outputSize);
    console.log(
      `${path.basename(declaredSrc)} → previews/${path.basename(result.displaySrc)} (${result.format}) (${formatBytes(result.sourceSize)} → ${formatBytes(result.outputSize)})`,
    );
  }

  writePreviewAssetMap(entries);
  updateProjectsPreviewPaths(sourceToPreview);
  saveCache(cache);

  console.log(`\nProcessed ${processedCount} preview image(s), skipped ${skippedCount} unchanged.`);
  console.log(`Wrote ${entries.length} entries to src/data/preview-image-assets.ts`);
  console.log(`Estimated transfer savings vs full-size sources: ${formatBytes(savedBytes)}`);
  console.log('Updated preview image paths in src/data/projects.ts');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
