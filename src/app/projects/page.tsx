import DividerShort from "@/components/DividerShort";
import DividerFull from "@/components/DividerFull";
import ProjectPreview from "@/components/ProjectPreview";

/* ─────────────────────────────────────────────────────────────────────────────
   Projects data
   Tag content sourced from Figma (node 224:8904 / 224:8955 / 224:9046 / 224:9077).
   Projects 1–3 have no thumbnail yet (gray placeholder shown).
   Add `href` for each project once case-study pages are available.
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
  {
    clientName: "American Museum of Natural History (AMNH)",
    projectTitle: "Arachnology Research Lab",
    projectDescription:
      "Rebranded a research lab and engineered a custom academic directory system to establish a distinct institutional identity and accessible web presence.",
    tags: [
      "Information architecture",
      "Front-end development",
      "Brand identity",
      "Design systems",
      "UX engineering",
    ],
  },
  {
    clientName: "Cambridge Innovation Institute",
    projectTitle: "Global Conference Experiences",
    projectDescription:
      "Collaborated on a highly flexible multi-brand design system by engineering the core templating framework and data automation for cross-medium layouts and styles, enforcing strict visual governance from screen viewports to physical venue environments.",
    tags: [
      "Exhibition design",
      "Wayfinding",
      "Omni-channel design",
      "Layout automation",
      "Front-end development",
    ],
    imageSrc: "/images/project-global-conference.jpg",
    imageAlt: "Discovery on Target conference signage and environmental graphics",
  },
  {
    clientName: "Aon",
    projectTitle: "Immersive Assessment Platforms",
    projectDescription:
      "Led enterprise product strategy and frontend engineering frameworks to consolidate legacy assessment tools, scaling strict visual token governance and accessibility across immersive mobile simulations to high-density admin dashboards.",
    tags: [
      "Design systems",
      "SaaS product strategy",
      "UX engineering",
      "Front-end development",
      "Data visualization",
    ],
    imageSrc: "/images/project-immersive-assessment.jpg",
    imageAlt: "Aon immersive assessment platform on mobile and desktop screens",
  },
  {
    clientName: "National Institute for Amazonian Research (INPA)",
    projectTitle: "International Ornithology Congress",
    projectDescription:
      "Architected a unified, scientifically resonant design system to honor a historic joint congress in the Brazilian Amazon, scaling organic identity assets from digital research publications to physical environmental installations.",
    tags: [
      "Exhibition design",
      "Spatial storytelling",
      "Identity systems",
      "Visual governance",
      "Omni-channel design",
    ],
    imageSrc: "/images/project-ornithology-congress.jpg",
    imageAlt: "International Ornithology Congress banner at the Manaus 2015 joint congress venue",
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
