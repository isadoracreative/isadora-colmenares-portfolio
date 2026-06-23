import DividerShort from "@/components/DividerShort";
import DividerFull from "@/components/DividerFull";
import ProjectPreview from "@/components/ProjectPreview";

/* ─────────────────────────────────────────────────────────────────────────────
   Projects data
   Tag content sourced from Figma (node 224:8904 / 224:8955 / 224:9046 / 224:9077).
   Add `imageSrc` and `href` for each project once screenshots and case-study
   pages are available.
   ───────────────────────────────────────────────────────────────────────────── */

const projects = [
  {
    clientName: "Verizon",
    projectTitle: "Conversational Design System",
    projectDescription:
      "Designed modular Figma components, interaction rules, and development specifications for responsive AI-to-human support pathways.",
    tags: [
      "Interaction design",
      "Design systems",
      "Conversational AI",
      "Component documentation",
      "UX engineering",
    ],
  },
  {
    clientName: "Burton Cooperative Residence",
    projectTitle: "Botanical Landscape 3D Modeling",
    projectDescription:
      "Modeled a steep variable-grade frontage to engineer on-site stormwater mitigation, balancing structural masonry and botanical retention zoning to capture precipitation, nourish native flora, and comply with pedestrian corridor drainage code.",
    tags: [
      "3D spatial modeling",
      "Environmental design",
      "Experience design",
      "Architectural planning",
      "Public-private infrastructure",
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
   Layout (all breakpoints — Figma spec nodes 224:8904 → 224:9077):
     container-inner  full-width list of ProjectPreview entries,
                      each separated by a gray DividerFull.
   ───────────────────────────────────────────────────────────────────────────── */

export default function ProjectsPage() {
  return (
    <main id="main-content" className="flex-1">
      <div className="container-inner py-9 lg:py-12 flex flex-col gap-9">

        {/* ── Page heading ──────────────────────────────────────────────── */}
        <div className="flex flex-col gap-3">
          <h1>Projects</h1>
          <DividerShort />
        </div>

        {/* ── Project list — first 2 entries ────────────────────────────── */}
        {projects.map((project, index) => (
          <div key={project.projectTitle} className="flex flex-col gap-8 md:gap-9">
            {index > 0 && <DividerFull />}
            <ProjectPreview {...project} />
          </div>
        ))}

      </div>
    </main>
  );
}
