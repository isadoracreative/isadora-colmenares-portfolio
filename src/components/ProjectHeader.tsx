/**
 * ProjectHeader — hero text area for individual project pages.
 *
 * Updated structure (Figma node 304-1522, revised):
 *   Single vertical stack at all breakpoints — the image that was previously
 *   part of this component has been removed; it now lives in the page content.
 *
 * Layout:
 *   layout (flex-col, gap-24px)
 *   ├- title + divider block (flex-col, gap-16px)
 *   │    ├- projects link (xs–md — borderless, chevron-left; hidden lg+)
 *   │    ├- client + project name (flex-col, gap-8px)
 *   │    │    ├- client name   → para, text-secondary
 *   │    │    └- project title → h1 (32px mobile → 60px lg+)
 *   │    └- DividerShort accent bar
 *   └- tag group (flex-wrap, gap-8px)
 */

import Button from '@/components/Button';
import DividerShort from '@/components/DividerShort';
import Tag          from '@/components/Tag';

interface ProjectHeaderProps {
  clientName:   string;
  projectTitle: string;
  /** Tags rendered below the DividerShort in small size. */
  tags?:        string[];
  /** Destination for the projects link on xs–md. Defaults to the projects index. */
  backHref?:    string;
  className?:   string;
}

export default function ProjectHeader({
  clientName,
  projectTitle,
  tags      = [],
  backHref  = '/projects',
  className = '',
}: ProjectHeaderProps) {
  return (
    <div className={`flex flex-col gap-6 ${className}`.trim()}>

      {/* Title block + DividerShort — gap-4 (16px) between heading and bar */}
      <div className="flex flex-col gap-4">

        {/* Projects — xs through md (Figma node 304:1522); hidden lg+ */}
        <div className="lg:hidden">
          <Button
            variant="borderless"
            size="xs"
            icon="chevron-left"
            label="Projects"
            href={backHref}
          />
        </div>

        {/* Client name + project title — gap-2 (8px) */}
        <div className="flex flex-col gap-2">
          <p className="font-body text-para text-text-secondary leading-none">
            {clientName}
          </p>
          <h1 className="text-text-primary">{projectTitle}</h1>
        </div>

        <DividerShort />
      </div>

      {/* Tag group — only rendered when tags are provided */}
      {tags.length > 0 && (
        <ul
          aria-label="Project tags"
          className="flex flex-wrap gap-2 list-none"
        >
          {tags.map((tag) => (
            <li key={tag}>
              <Tag label={tag} size="small" />
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}
