import DividerShort from "@/components/DividerShort";
import DividerFull from "@/components/DividerFull";
import ProjectPreview from "@/components/ProjectPreview";
import { projects, projectHref } from "@/data/projects";

/* -----------------------------------------------------------------------------
   Page
   Layout (all breakpoints — Figma spec nodes 224:8904 → 224:9077):
     container-inner  full-width list of ProjectPreview entries,
                      each separated by a gray DividerFull.
   ----------------------------------------------------------------------------- */

export default function ProjectsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none scroll-mt-12">
      <div className="container-inner py-6 sm:py-9 flex flex-col gap-9">

        {/* -- Page heading ------------------------------------------------ */}
        <div className="flex flex-col gap-3">
          <h1>Projects</h1>
          <DividerShort />
        </div>

        {/* -- Project list ------------------------------ */}
        {projects.map((project, index) => (
          <div key={project.projectTitle} className="flex flex-col gap-8 md:gap-9">
            {index > 0 && <DividerFull />}
            <ProjectPreview
              {...project}
              tags={[...project.tags]}
              overviewImages={project.overviewImages?.map(({ src, alt }) => ({ src, alt }))}
              href={projectHref(project)}
              showButton={Boolean(project.slug)}
            />
          </div>
        ))}

      </div>
    </main>
  );
}
