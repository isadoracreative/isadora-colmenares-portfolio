import ProgressiveImage from '@/components/ProgressiveImage';

export interface PreviewImage {
  src: string;
  alt: string;
}

interface ProjectPreviewImageSwapProps {
  primary: PreviewImage;
  secondary: PreviewImage;
  sizes?: string;
}

const DEFAULT_SIZES = '(min-width: 1280px) 580px, (min-width: 640px) 50vw, 100vw';

export default function ProjectPreviewImageSwap({
  primary,
  secondary,
  sizes = DEFAULT_SIZES,
}: ProjectPreviewImageSwapProps) {
  return (
    <div
      role="img"
      aria-label={primary.alt}
      className="absolute inset-0 bg-gray-10"
    >
      <ProgressiveImage
        src={primary.src}
        alt=""
        aria-hidden
        fill
        className="object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
        sizes={sizes}
        priority
      />
      <ProgressiveImage
        src={secondary.src}
        alt=""
        aria-hidden
        fill
        className="object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
        sizes={sizes}
      />
    </div>
  );
}
