/**
 * Avatar — circular portrait rendered as a CSS background-image.
 *
 * Shape / border:
 *   - border-radius: 50% (applied via inline style) — circles in all browsers IE9+.
 *     Using 50% rather than Tailwind's `rounded-full` (9999px) is semantically
 *     correct for a 1:1 element and produces an identical result.
 *   - Width and height set explicitly and equally (not via aspect-ratio CSS)
 *     for universal support across all browsers.
 *   - 1px border in Gray 20 (--color-gray-20).
 *
 * Background image:
 *   - `background-size: cover` fills the circle without letterboxing.
 *   - `background-position: center` keeps the subject centred.
 *
 * Size:
 *   - Pass a pixel number (e.g. 67) or any valid CSS length string (e.g. "4rem").
 *     Defaults to 67px.
 *
 * Accessibility:
 *   - By default, role="img" + aria-label expose the portrait to AT.
 *   - Pass `decorative` when adjacent text already names the person (e.g. in
 *     a recommendation card where the source line repeats the name). This adds
 *     aria-hidden="true" so AT skips the redundant image description.
 */

import { resolveImageSrc } from '@/data/image-assets';

interface AvatarProps {
  src: string;
  /** Accessible label for the portrait (ignored when decorative=true). */
  alt: string;
  /** Width = height. Accepts a pixel number or a CSS length string. Defaults to 67. */
  size?: number | string;
  /**
   * Set to true when adjacent text already names the subject — suppresses the
   * AT image announcement to avoid reading the name twice.
   */
  decorative?: boolean;
  className?: string;
}

export default function Avatar({
  src,
  alt,
  size = 67,
  decorative = false,
  className = '',
}: AvatarProps) {
  const dimension = typeof size === 'number' ? `${size}px` : size;

  return (
    <div
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : alt}
      aria-hidden={decorative ? true : undefined}
      className={`shrink-0 border border-gray-20 bg-cover bg-center ${className}`.trim()}
      style={{
        width: dimension,
        height: dimension,
        borderRadius: '50%',
        backgroundImage: `url('${resolveImageSrc(src)}')`,
      }}
    />
  );
}
