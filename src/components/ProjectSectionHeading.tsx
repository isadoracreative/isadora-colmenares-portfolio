/**
 * ProjectSectionHeading — numbered section title for project detail pages.
 *
 * Figma pattern (e.g. node 440-66319):
 *   "01 / " → text-secondary
 *   "Scale & Design System Governance" → text-primary (inherits from h4 base)
 *
 * Renders as h4; responsive sizing comes from globals.css.
 */

interface ProjectSectionHeadingProps {
  /** Section index label, e.g. "01". The trailing " / " is added automatically. */
  number:    string;
  title:     string;
  id?:       string;
  className?: string;
}

export default function ProjectSectionHeading({
  number,
  title,
  id,
  className = '',
}: ProjectSectionHeadingProps) {
  return (
    <h4 id={id} className={className}>
      <span className="text-text-secondary">{number} / </span>
      {title}
    </h4>
  );
}
