import Image, { type ImageProps } from 'next/image';
import { resolveImageAsset, resolveImageSrc } from '@/data/image-assets';
import { previewImageAssets } from '@/data/preview-image-assets';

type ProgressiveImageProps = Omit<ImageProps, 'placeholder' | 'blurDataURL'>;

function resolveAsset(src: string) {
  return previewImageAssets[src] ?? resolveImageAsset(src);
}

/**
 * Serves optimized PNG/JPG assets when available and shows a blur-up placeholder
 * while the full image loads. Improves perceived performance on slow connections.
 */
export default function ProgressiveImage({
  src,
  alt,
  ...props
}: ProgressiveImageProps) {
  const originalSrc = typeof src === 'string' ? src : '';
  const asset = originalSrc ? resolveAsset(originalSrc) : undefined;
  const resolvedSrc = originalSrc
    ? (asset?.src ?? resolveImageSrc(originalSrc))
    : src;

  return (
    <Image
      {...props}
      src={resolvedSrc}
      alt={alt}
      placeholder={asset?.blurDataURL ? 'blur' : 'empty'}
      blurDataURL={asset?.blurDataURL}
    />
  );
}
