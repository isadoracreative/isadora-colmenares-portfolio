/* -----------------------------------------------------------------------------
   Projects data — synced from Figma (nodes 224:8904 / 224:8955 / 224:9046 / 224:9077).
   clientName, projectTitle, and tags are the canonical source for both the
   projects listing (ProjectPreview) and individual project pages (ProjectHeader).
   ----------------------------------------------------------------------------- */

export interface ProjectOverviewImage {
  src: string;
  alt: string;
  caption: string;
  border?: boolean;
}

export interface Project {
  /** Route segment when a case-study page exists (e.g. cambridge-innovation-institute) */
  slug?: string;
  clientName: string;
  projectTitle: string;
  tags: readonly string[];
  projectDescription: string;
  imageSrc: string;
  imageAlt: string;
  imageBorder?: boolean;
  /** Overview images from the project page — used for preview rotation when present */
  overviewImages?: readonly ProjectOverviewImage[];
}

export const projects: readonly Project[] = [
  {
    slug: 'verizon',
    clientName: 'Verizon',
    projectTitle: 'Conversational Design System',
    projectDescription:
      'Designed modular Figma components, interaction rules, and development specifications for responsive AI-to-human support pathways.',
    tags: [
      'Interaction design',
      'Design systems',
      'Conversational AI',
      'Component documentation',
      'UX engineering',
    ],
    imageSrc: '/images/project-conversational-design-system.png',
    imageAlt:
      'Figma component library and interaction specification screens for Verizon conversational AI',
    imageBorder: true,
    overviewImages: [
      {
        src: '/images/verizon-overview-component-sticker-sheet.png',
        alt: 'Component sticker sheet organized for rapid copy-and-paste layout assembly',
        caption:
          'Component sticker sheet, organized for rapid copy-and-paste layout assembly',
        border: true,
      },
      {
        src: '/images/verizon-overview-component-anatomy.png',
        alt: 'Detailed component anatomy guidelines defining visual structure, interactivity, and configurations',
        caption:
          'Detailed component anatomy guidelines defining visual structure, interactivity, and configurations',
        border: true,
      },
      {
        src: '/images/verizon-overview-assembled-chat-experiences.png',
        alt: 'Components assembled into a wide variety of chat experiences to validate product design viability',
        caption:
          'Assembling components into a wide variety of chat experiences to validate product design viability',
        border: true,
      },
    ],
  },
  {
    slug: 'burton-cooperative-residence',
    clientName: 'Burton Cooperative Residence',
    projectTitle: 'Botanical Landscape 3D Modeling',
    projectDescription:
      'Modeled a steep variable-grade frontage to engineer on-site stormwater mitigation, balancing structural masonry and botanical retention zoning to capture precipitation, nourish native flora, and comply with pedestrian corridor drainage code.',
    tags: [
      '3D spatial modeling',
      'Environmental design',
      'Experience design',
      'Architectural planning',
      'Public-private Infrastructure',
    ],
    imageSrc: '/images/project-botanical-landscape.png',
    imageAlt: '3D render of the Burton Cooperative Residence botanical landscape frontage',
    imageBorder: true,
    overviewImages: [
      {
        src: '/images/burton-render-spatial.png',
        alt: 'Polished spatial render of private property lines, native flora, and the public pedestrian corridor',
        caption:
          'Polished spatial render detailing the relationship between private property lines, native flora canopies, and the public pedestrian corridor',
        border: false,
      },
      {
        src: '/images/burton-plan-2d.png',
        alt: 'Baseline 2D vector top view layout drafted in AutoCAD',
        caption:
          'Baseline 2D vector top view layout drafted in AutoCAD to establish legal boundaries and architectural elements',
        border: true,
      },
      {
        src: '/images/burton-model-3d-isometric.png',
        alt: '3D isometric SketchUp model evaluating lawn slope gradients and structural stone dimensions',
        caption:
          '3D isometric SketchUp model to evaluate lawn slope gradients, structural stone dimensions, and visualize residential walkways',
        border: true,
      },
    ],
  },
  {
    clientName: 'American Museum of Natural History (AMNH)',
    projectTitle: 'Arachnology Research Lab',
    projectDescription:
      'Rebranded a research lab and engineered a custom academic directory system to establish a distinct institutional identity and accessible web presence.',
    tags: [
      'Information architecture',
      'Front-end development',
      'Brand identity',
      'Design systems',
      'UX engineering',
    ],
    imageSrc: '/images/project-arachnology-lab.jpg',
    imageAlt:
      'Arachnology Research Lab website showing the custom academic directory and researcher profiles',
  },
  {
    slug: 'cambridge-innovation-institute',
    clientName: 'Cambridge Innovation Institute',
    projectTitle: 'Global Conference Experiences',
    projectDescription:
      'Collaborated on a highly flexible multi-brand design system by engineering the core templating framework and data automation for cross-medium layouts and styles, enforcing strict visual governance from screen viewports to physical venue environments.',
    tags: [
      'Exhibition design',
      'Wayfinding',
      'Omni-channel design',
      'Layout automation',
      'Front-end development',
    ],
    imageSrc: '/images/project-global-conference.jpg',
    imageAlt:
      'Discovery on Target conference signage and environmental graphics at a CII life sciences event',
    imageBorder: true,
    overviewImages: [
      {
        src: '/images/cii-overview-master-templates.png',
        alt: 'Design system master templates and tokens for conference branding',
        caption:
          'Master templates and design tokens establishing unified design system rules across 60+ annual events',
        border: true,
      },
      {
        src: '/images/cii-overview-data-flow.png',
        alt: 'Data flow architecture diagram for automated layout and text styles',
        caption:
          'Data flow architecture automating layout and text styles for web and print output',
        border: false,
      },
      {
        src: '/images/cii-overview-signage.png',
        alt: 'Environmental signage mockup on three-dimensional venue architecture',
        caption:
          'Translation of cross-channel identity design into environmental signage rendering on three dimensional venue architecture',
        border: true,
      },
    ],
  },
  {
    slug: 'aon',
    clientName: 'Aon',
    projectTitle: 'Immersive Assessment Platforms',
    projectDescription:
      'Led enterprise product strategy and frontend engineering frameworks to consolidate legacy assessment tools, scaling strict visual token governance and accessibility across immersive mobile simulations to high-density admin dashboards.',
    tags: [
      'Design systems',
      'SaaS product strategy',
      'UX engineering',
      'Front-end development',
      'Data visualization',
    ],
    imageSrc: '/images/project-immersive-assessment.jpg',
    imageAlt: 'Aon immersive assessment platform displayed on mobile and desktop screens',
    imageBorder: true,
    overviewImages: [
      {
        src: '/images/aon-overview-mobile-simulation.png',
        alt: 'Mobile-first interactive simulation interface with accessible Angular components',
        caption:
          'Mobile-first interactive simulation interface powered by refactored, accessible Angular component structures',
        border: true,
      },
      {
        src: '/images/aon-overview-dashboard.png',
        alt: 'Enterprise SaaS B2B admin dashboard and client-branded reporting interface',
        caption:
          'Enterprise SaaS B2B admin dashboard and responsive, B2B2C client-branded reporting interface',
        border: true,
      },
      {
        src: '/images/aon-overview-triple-diamond.png',
        alt: 'Modified Triple Diamond product development lifecycle diagram',
        caption:
          'Modified Triple Diamond product development lifecycle with templates for UX research and strategy facilitating stakeholder and backlog alignment',
        border: true,
      },
    ],
  },
  {
    slug: 'inpa',
    clientName: 'National Institute for Amazonian Research (INPA)',
    projectTitle: 'International Ornithology Congress',
    projectDescription:
      'Architected a unified, scientifically resonant design system to honor a historic joint congress in the Brazilian Amazon, scaling organic identity assets from digital research publications to physical environmental installations.',
    tags: [
      'Exhibition design',
      'Spatial storytelling',
      'Visual governance',
      'Identity systems',
      'Omni-channel design',
    ],
    imageSrc: '/images/project-ornithology-congress.jpg',
    imageAlt:
      'International Ornithology Congress banner at the Manaus 2015 joint NOC/CBO congress venue',
    imageBorder: true,
    overviewImages: [
      {
        src: '/images/inpa-overview-backdrop-signage.jpg',
        alt: 'Large-scale environmental backdrop signage for stage presentations at the Manaus 2015 joint congress',
        caption: 'Large-scale environmental backdrop signage for stage presentations',
        border: true,
      },
      {
        src: '/images/inpa-overview-keynote-staging.jpg',
        alt: 'Keynote presentation staging and integrated environmental branding system',
        caption: 'Keynote presentation staging and integrated environmental branding system',
        border: true,
      },
      {
        src: '/images/inpa-overview-event-program.jpg',
        alt: 'Event program for self-guided navigation and detailed session information',
        caption: 'Event program for self-guided navigation and detailed session information',
        border: false,
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function requireProjectBySlug(slug: string): Project {
  const project = getProjectBySlug(slug);
  if (!project) {
    throw new Error(`Missing project data for slug: ${slug}`);
  }
  return project;
}

export function projectHref(project: Project): string | undefined {
  return project.slug ? `/projects/${project.slug}` : undefined;
}

/** Stable in-page anchor id for the projects listing. */
export function projectAnchorId(project: Project): string {
  if (project.slug) return project.slug;
  return project.clientName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Header nav target — case-study route when available, otherwise listing anchor. */
export function projectNavHref(project: Project): string {
  return projectHref(project) ?? `/projects#${projectAnchorId(project)}`;
}
