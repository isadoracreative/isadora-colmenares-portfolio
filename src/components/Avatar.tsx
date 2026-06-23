/**
 * Avatar — circular portrait rendered as a CSS background-image.
 *
 * Shape / border:
 *   - border-radius: 50% (applied via inline style) — circles in all browsers IE9+.
 *     Using 50% rather than Tailwind's `rounded-full` (9999px) is semantically
 *     correct for a 1:1 element and produces an identical result.
 *   - Width and height set explicitly and equally (not via aspect-ratio CSS)
 *     for universal support across all browsers.
 *   - 1px border in Core gray light (--color-core-gray-light).
 *
 * Background image:
 *   - `background-size: cover` fills the circle without letterboxing.
 *   - `background-position: center` keeps the subject centred.
 *
 * Size:
 *   - Pass a pixel number (e.g. 67) or any valid CSS length string (e.g. "4rem").
 *     Defaults to 67px.
 */

interface AvatarProps {
  src: string;
  /** Accessible label for the portrait (used as aria-label). */
  alt: string;
  /** Width = height. Accepts a pixel number or a CSS length string. Defaults to 67. */
  size?: number | string;
  className?: string;
}

export default function Avatar({ src, alt, size = 67, className = '' }: AvatarProps) {
  const dimension = typeof size === 'number' ? `${size}px` : size;

  return (
    <div
      role="img"
      aria-label={alt}
      className={`shrink-0 border border-core-gray-light bg-cover bg-center ${className}`.trim()}
      style={{
        width: dimension,
        height: dimension,
        borderRadius: '50%',
        backgroundImage: `url('${src}')`,
      }}
    />
  );
}
