import ProgressiveImage from '@/components/ProgressiveImage';

export interface CaptionedImageProps {
  src:      string;
  alt:      string;
  caption:  string;
  border?:  boolean;
  sizes?:   string;
}

export default function ProjectCaptionedImage({
  src,
  alt,
  caption,
  border  = false,
  sizes   = '(min-width: 1024px) 1000px, 100vw',
}: CaptionedImageProps) {
  return (
    <figure className="flex flex-col gap-2 flex-1 min-w-0">
      <div
        className={`relative w-full aspect-video overflow-hidden${
          border ? ' border border-gray-20' : ''
        }`}
      >
        <ProgressiveImage
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
        />
      </div>
      <figcaption className="font-body text-para-sm text-text-primary text-pretty">
        {caption}
      </figcaption>
    </figure>
  );
}
