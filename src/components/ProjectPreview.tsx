import Image from 'next/image';
import Button from '@/components/Button';
import Tag from '@/components/Tag';

interface ProjectPreviewProps {
  /** Displayed above the project title in secondary text color */
  clientName: string;
  projectTitle: string;
  projectDescription: string;
  tags?: string[];
  /** URL for the "View Project" button */
  href?: string;
  /** Path to the project preview image (16:9) */
  imageSrc?: string;
  imageAlt?: string;
  /** When true, renders a 1px Core gray light border around the preview image */
  imageBorder?: boolean;
  /** When false, hides the "View Project" button. Defaults to true. */
  showButton?: boolean;
  className?: string;
}

/*
  ProjectPreview — responsive project card component.

  Layout (Figma spec: node-id=52-1269):
  ┌──────────────────────────────────────────────┐
  │ xs  (<640px): text stacked above image        │
  │ sm+ (≥640px): text left (flex-1) | image right (flex-1) │
  └──────────────────────────────────────────────┘

  The 50/50 flex split matches Figma's fixed widths at every container
  size (sm: 284+24+284=592, lg: 458+36+458=952, xl: 574+48+574=1196≈1208).

  Image: 16:9 aspect ratio via `aspect-video`. When `imageSrc` is not
  provided a gray placeholder is rendered — suitable while project
  screenshots are not yet available.
*/
export default function ProjectPreview({
  clientName,
  projectTitle,
  projectDescription,
  tags = [],
  href,
  imageSrc,
  imageAlt = '',
  imageBorder = false,
  showButton = true,
  className = '',
}: ProjectPreviewProps) {
  return (
    <article
      aria-labelledby={`project-${projectTitle.replace(/\s+/g, '-').toLowerCase()}`}
      className={`flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-6 lg:gap-9 xl:gap-12 ${className}`.trim()}
    >
      {/* ── Text column ───────────────────────────────────────────────── */}
      <div className="flex flex-col gap-4 sm:flex-1 min-w-0">
        <div className="flex flex-col gap-3">
          {/* Client / organisation */}
          <p className="font-body text-para-sm text-text-secondary">
            {clientName}
          </p>

          {/* Project title — h2 scales with the global responsive type scale */}
          <h2
            id={`project-${projectTitle.replace(/\s+/g, '-').toLowerCase()}`}
            className="leading-none"
          >
            {projectTitle}
          </h2>

          {/* Description */}
          <p className="font-body font-medium text-para-lg text-text-primary leading-snug">
            {projectDescription}
          </p>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-1 sm:mb-3" aria-label="Project tags">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        )}

        {/* CTA */}
        {showButton && (
          <div>
            <Button
              label="View Project"
              variant="outline"
              href={href ?? '#'}
              aria-disabled={!href}
            />
          </div>
        )}
      </div>

      {/* ── Preview image ─────────────────────────────────────────────── */}
      {imageSrc ? (
        <div className={`relative w-full aspect-video rounded-sm overflow-hidden sm:flex-1 sm:w-auto sm:min-w-0${imageBorder ? ' border border-core-gray-light' : ''}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 580px, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      ) : (
        /*
          Gray placeholder — shown when no project screenshot is available yet.
          `aria-hidden` keeps screen readers from announcing an empty image region.
        */
        <div
          aria-hidden="true"
          className={`w-full aspect-video rounded-sm bg-gray-10 sm:flex-1 sm:w-auto sm:min-w-0${imageBorder ? ' border border-core-gray-light' : ''}`}
        />
      )}
    </article>
  );
}
