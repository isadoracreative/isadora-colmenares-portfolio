import Image from 'next/image';

export interface CaptionedImageProps {
  src:      string;
  alt:      string;
  caption:  string;
  /** `'gray-light'` → core-gray-light (default). `'gray'` → core-gray. */
  border?:  false | 'gray-light' | 'gray';
  sizes?:   string;
}

const BORDER_CLASS = {
  'gray-light': ' border border-core-gray-light',
  gray:         ' border border-core-gray',
} as const;

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
          border ? BORDER_CLASS[border] : ''
        }`}
      >
        <Image
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
