import DividerShort from '@/components/DividerShort';
import ProjectSectionHeading from '@/components/ProjectSectionHeading';

interface Highlight {
  readonly title: string;
  readonly body:  string;
}

interface ProjectContentSectionProps {
  id:         string;
  number:     string;
  title:      string;
  lead:       string;
  highlights: readonly Highlight[];
  children:   React.ReactNode;
}

export default function ProjectContentSection({
  id,
  number,
  title,
  lead,
  highlights,
  children,
}: ProjectContentSectionProps) {
  return (
    <section
      aria-labelledby={id}
      className="col-span-12 grid grid-cols-12 gap-y-8"
    >
      <div className="col-span-12 lg:col-start-3 lg:col-span-8 xl:col-start-4 xl:col-span-6 flex flex-col gap-6">

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <ProjectSectionHeading id={id} number={number} title={title} />
            <DividerShort />
          </div>
          <p className="font-body font-medium text-para-lg text-text-primary leading-tight text-pretty">
            {lead}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {highlights.map(({ title: highlightTitle, body }) => (
            <div key={highlightTitle} className="flex flex-col gap-1">
              <p className="font-body font-bold text-text-primary text-pretty">
                {highlightTitle}
              </p>
              <p className="text-text-primary text-pretty">{body}</p>
            </div>
          ))}
        </div>

      </div>

      <div className="col-span-12">
        <div className="w-full mx-auto lg:max-w-[1000px] flex flex-col gap-6 lg:gap-9">
          {children}
        </div>
      </div>
    </section>
  );
}
