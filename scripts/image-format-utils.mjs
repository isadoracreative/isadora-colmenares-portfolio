/** Format helpers for image optimization scripts.
 *
 * The file extension on disk is the source of truth for JPG vs PNG.
 * Export format is chosen in Figma — do not classify assets in code.
 * See .cursor/rules/image-formats.mdc for the export workflow.
 */

import path from 'node:path';

/**
 * @param {string} filePath
 * @returns {boolean}
 */
export function isJpgFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return ext === '.jpg' || ext === '.jpeg';
}

/**
 * Normalized display extension for a raster file.
 * @param {string} filePath
 * @returns {'.jpg' | '.png'}
 */
export function displayExtension(filePath) {
  return isJpgFile(filePath) ? '.jpg' : '.png';
}
