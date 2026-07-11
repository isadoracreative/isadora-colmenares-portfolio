import ProjectHeader from '@/components/ProjectHeader';
import { requireProjectBySlug } from '@/data/projects';
import ProjectContentSection from '@/components/ProjectContentSection';
import ProjectCaptionedImage, { type CaptionedImageProps } from '@/components/ProjectCaptionedImage';
import DividerShort from '@/components/DividerShort';

const project = requireProjectBySlug('amnh');

if (!project.overviewImages || project.overviewImages.length < 1) {
  throw new Error('Missing overview images for amnh');
}

const [overviewWebsite] = project.overviewImages;

// -- Overview: Role -----------------------------------------------------------

const overviewRole =
  'I was the sole Experience Designer and Front-End Developer on this freelance project, supporting the lab curator, collection manager, and end users. I collaborated with museum IT staff and design department stakeholders.';

// -- Section 01 -------------------------------------------------------------

const section01Highlights = [
  {
    title: 'Internal Persona Development',
    body: 'Focused the first iteration on the website admin (the lab\u2019s collection manager) to streamline administrative tasks and improve site maintenance velocity.',
  },
  {
    title: 'Contextual Inquiry Integration',
    body: 'Shadowed lab staff to understand how they update information and research other institutions, identifying systemic bottlenecks in the legacy workflow.',
  },
  {
    title: 'Targeted Problem Framing',
    body: 'Reframed the design problem around internal efficiency, recognizing that empowering admins to easily update the site directly serves the needs of funding sources and prospective lab members.',
  },
] as const;

const section01TwoUp: CaptionedImageProps[] = [
  {
    src: '/images/amnh-affinity-map.png',
    alt: 'Affinity map of stakeholder interviews and contextual inquiry',
    caption: 'Affinity map of stakeholder interviews and contextual inquiry',
    border: true,
    sizes: '(min-width: 640px) 482px, 100vw',
  },
  {
    src: '/images/amnh-empathy-map.png',
    alt: 'Empathy mapping for lab curator and collection manager',
    caption: 'Empathy mapping for lab curator and collection manager',
    border: true,
    sizes: '(min-width: 640px) 482px, 100vw',
  },
];

const section01PersonaEcosystem: CaptionedImageProps = {
  src: '/images/amnh-persona-ecosystem.png',
  alt: 'Interconnected user persona ecosystem',
  caption: 'Interconnected user persona ecosystem',
  border: true,
};

// -- Section 02 -------------------------------------------------------------

const section02Highlights = [
  {
    title: 'Competitive Feature Auditing',
    body: 'Analyzed competitor labs to define expected user mental models, ensuring high-value content (publications, lab initiatives, current members) is prioritized over unnecessary features (interactive maps, social media integrations).',
  },
  {
    title: 'Legacy Content Deconstruction',
    body: 'Restructured the original, highly fragmented sitemap into a clean, accessible layout that reduces cognitive load for visiting researchers.',
  },
  {
    title: 'Proactive Redundancy Reduction',
    body: 'Designed the hierarchy to make common logistical information instantly locatable, specifically aiming to decrease redundant administrative inquiries.',
  },
] as const;

const section02TwoUp: CaptionedImageProps[] = [
  {
    src: '/images/amnh-content-map.png',
    alt: 'Architectural deconstruction of original site content',
    caption: 'Architectural deconstruction of original site content',
    border: true,
    sizes: '(min-width: 640px) 482px, 100vw',
  },
  {
    src: '/images/amnh-competitive-analysis.jpg',
    alt: 'Whiteboarding competitive/comparative analysis',
    caption: 'Whiteboarding competitive/comparative analysis',
    border: true,
    sizes: '(min-width: 640px) 482px, 100vw',
  },
];

// -- Section 03 -------------------------------------------------------------

const section03Highlights = [
  {
    title: 'Specimen-Derived Palettes',
    body: 'Refined the color palette to depart from standard museum brand colors, extracting authentic, arachnid-related hues directly from photos of field specimens.',
  },
  {
    title: 'Scientific Illustration Integration',
    body: 'Incorporated a precise scientific illustration to maintain a rigorous academic connection to the lab\u2019s scorpion systematics research.',
  },
  {
    title: 'Institutional Alignment',
    body: 'Maintained structural ties to the museum collection through the tagline \u201cArachnology at AMNH\u201d while establishing a distinct, memorable identity for the specific curator-driven lab.',
  },
] as const;

const section03Branding: CaptionedImageProps = {
  src: '/images/amnh-branding.jpg',
  alt: 'Brand color palette derived from arachnid specimen photos',
  caption: 'Brand color palette derived from arachnid specimen photos',
  border: true,
};

// -- Section 04 -------------------------------------------------------------

const section04Highlights = [
  {
    title: 'Decoupled Architecture',
    body: 'Built a Next.js site to cleanly separate content from layout code, ensuring the site is CMS-ready and lab admins will be able to update the site without touching design files or needing coding knowledge.',
  },
  {
    title: 'IT Bottleneck Resolution',
    body: 'Paired with AMNH IT to redirect the legacy AMNH URL to an independent hosting infrastructure, giving the lab autonomous update capabilities.',
  },
  {
    title: 'Scalable Content Directories',
    body: 'Delivered a responsive, production-ready website that dynamically renders complex lab member directories and access to scientific publication downloads with high performance and searchability.',
  },
] as const;

const section04Images: CaptionedImageProps[] = [
  {
    src: '/images/amnh-arachnid-diversity.jpg',
    alt: 'Dissemination of information about arachnid diversity',
    caption: 'Dissemination of information about arachnid diversity',
    border: true,
  },
  {
    src: '/images/amnh-people-directory.png',
    alt: 'Lab member directory search',
    caption: 'Lab member directory search',
    border: true,
  },
];

export default function AmnhPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none scroll-mt-12">

      {/* -- Project header — container-inner (matches main content grid) --- */}
      <div className="container-inner pt-6 sm:pt-9 pb-12">
        <ProjectHeader
          clientName={project.clientName}
          projectTitle={project.projectTitle}
          tags={[...project.tags]}
        />
      </div>

      {/* -- Main content — container-inner ----------------------- */}
      <div className="container-inner pb-6 sm:pb-9 grid grid-cols-12 gap-y-9">

        {/* -- Overview ----------------------------------------------------- */}
        <section
          aria-labelledby="overview-heading"
          className="col-span-12 grid grid-cols-12 gap-y-8"
        >

          {/* Text block — narrows at lg+ */}
          <div className="col-span-12 lg:col-start-3 lg:col-span-8 xl:col-start-4 xl:col-span-6 flex flex-col gap-6">

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <h2 id="overview-heading">Overview</h2>
                <DividerShort />
              </div>

              <p className="font-body font-medium text-para-lg text-text-primary leading-tight text-pretty">
                The AMNH Arachnology Lab requires a public-facing digital ecosystem to secure institutional funding, attract global research talent, and communicate policies to lab visitors. The central objective was to identify user needs to create an optimal hierarchy of readily accessible information for financial supporters, potential lab members, and industry colleagues.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h6>Challenge</h6>
                <p className="text-text-primary text-pretty">
                  Stakeholder interviews and contextual inquiries revealed that the core problem extended beyond the public-facing site to the internal administrative burden. A reliance on limited museum IT resources made content updates incredibly difficult, leading to outdated information and a high volume of redundant logistical inquiries from prospective researchers and visitors.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h6>Solution</h6>
                <p className="text-text-primary text-pretty">
                  Directed end-to-end UX research, institutional rebranding, and front-end development to deliver a vastly improved web presence built on a Next.js React framework. Restructuring the information architecture and separating complex layouts from content generation empowers internal administrators to manage data autonomously while providing an accessible user experience for the global scientific community.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h6>Role</h6>
                <p className="text-text-primary text-pretty">{overviewRole}</p>
              </div>
            </div>

          </div>

          {/* Overview hero image */}
          <div className="col-span-12">
            <ProjectCaptionedImage {...overviewWebsite} />
          </div>

        </section>
        {/* -- End overview ------------------------------------------------- */}

        {/* -- 01 / User Research & Operational Empathy --------------------- */}
        <ProjectContentSection
          id="section-01-heading"
          number="01"
          title="User Research & Operational Empathy"
          lead="Synthesized stakeholder interviews and contextual inquiries to map the operational workflows of the lab\u2019s curator, collection manager, and auxiliary staff. By utilizing empathy mapping and constructing a persona ecosystem, the strategy shifted to prioritizing the internal administrator as the primary user, which indirectly solves the communication and logistical needs of external personas."
          highlights={section01Highlights}
        >
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-9">
            {section01TwoUp.map((image) => (
              <ProjectCaptionedImage key={image.caption} {...image} />
            ))}
          </div>
          <ProjectCaptionedImage {...section01PersonaEcosystem} />
        </ProjectContentSection>

        {/* -- 02 / Architectural Taxonomy & Content Hierarchy ---------------- */}
        <ProjectContentSection
          id="section-02-heading"
          number="02"
          title="Architectural Taxonomy & Content Hierarchy"
          lead="Executed a comprehensive architectural deconstruction of the legacy site alongside comparative analyses of direct and indirect institutional competitors. This informed a streamlined taxonomic hierarchy that surfaces critical publications, lab policies, and personnel updates while filtering out redundant feature bloat."
          highlights={section02Highlights}
        >
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-9">
            {section02TwoUp.map((image) => (
              <ProjectCaptionedImage key={image.caption} {...image} />
            ))}
          </div>
        </ProjectContentSection>

        {/* -- 03 / Institutional Branding & Visual Identity ---------------- */}
        <ProjectContentSection
          id="section-03-heading"
          number="03"
          title="Institutional Branding & Visual Identity"
          lead="Navigated unique institutional design guidelines to establish an independent yet aligned visual identity for the arachnology lab. The visual strategy successfully adhered to the AMNH design department\u2019s requirement for curatorial lab branding having a distinct, highly recognizable presence apart from the museum."
          highlights={section03Highlights}
        >
          <ProjectCaptionedImage {...section03Branding} />
        </ProjectContentSection>

        {/* -- 04 / Front-End Engineering & Autonomous Governance ------------- */}
        <ProjectContentSection
          id="section-04-heading"
          number="04"
          title="Front-End Engineering & Autonomous Governance"
          lead="Engineered a modern Next.js React application that explicitly decouples presentation layouts from content management. Created a searchable lab member directory. Collaborated with museum IT to securely connect the established AMNH web address to the new infrastructure."
          highlights={section04Highlights}
        >
          {section04Images.map((image) => (
            <ProjectCaptionedImage key={image.caption} {...image} />
          ))}
        </ProjectContentSection>

      </div>
    </main>
  );
}
