import Image from 'next/image';
import ProjectHeader from '@/components/ProjectHeader';
import { requireProjectBySlug } from '@/data/projects';
import ProjectSectionHeading from '@/components/ProjectSectionHeading';
import ProjectContentSection from '@/components/ProjectContentSection';
import ProjectCaptionedImage, { type CaptionedImageProps } from '@/components/ProjectCaptionedImage';
import DividerShort  from '@/components/DividerShort';

function ThreeUpRow({ images }: { images: readonly CaptionedImageProps[] }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 lg:gap-9">
      {images.map((image) => (
        <ProjectCaptionedImage
          key={image.caption}
          {...image}
          sizes="(min-width: 640px) 310px, 100vw"
        />
      ))}
    </div>
  );
}

const overviewImages = {
  masterTemplates: {
    src: '/images/cii-overview-master-templates.png',
    alt: 'Design system master templates and tokens for conference branding',
    caption:
      'Master templates and design tokens establishing unified design system rules across 60+ annual events',
    border: true,
  },
  dataFlow: {
    src: '/images/cii-overview-data-flow.png',
    alt: 'Data flow architecture diagram for automated layout and text styles',
    caption:
      'Data flow architecture automating layout and text styles for web and print output',
    border: false,
  },
  signage: {
    src: '/images/cii-overview-signage.png',
    alt: 'Environmental signage mockup on three-dimensional venue architecture',
    caption:
      'Translation of cross-channel identity design into environmental signage rendering on three dimensional venue architecture',
    border: true,
  },
} as const;

const project = requireProjectBySlug('cambridge-innovation-institute');

// -- Section 01 -------------------------------------------------------------

const section01Highlights = [
  {
    title: 'Systemic Governance',
    body:
      'Standardized layout grids, typographic hierarchy, and shared component types to allow a lean team to deploy diverse digital and print designs with streamlined architectural alignment.',
  },
  {
    title: 'Responsive Logic',
    body:
      'Developed multi-device web prototypes optimized to cleanly structure event agenda, speaker abstracts, sponsor engagement, and attendee registration.',
  },
  {
    title: 'Cross-Medium Constraints',
    body:
      'Pre-calculated dimensions across a unified template pack for online ads and event signage, ensuring visual stability from mobile screens up to large-format onsite wayfinding.',
  },
] as const;

const section01Images = {
  websiteTemplate: {
    src: '/images/cii-section-01-website-template.png',
    alt: 'Global responsive website template for conference events',
    caption: 'Global responsive website template',
    border: false,
  },
  webBanners: {
    src: '/images/cii-section-01-web-banners.png',
    alt: 'Web banner templates for advertising and social media aspect ratios',
    caption:
      'Web banner templates for all advertising aspect ratios and social media dimensions',
    border: false,
  },
  signageTemplates: {
    src: '/images/cii-section-01-signage-templates.png',
    alt: 'Environmental signage templates with typography slots and 2D elevations',
    caption:
      'Environmental signage templates with standardized typography slots and 2D elevations for 3D rendering',
    border: false,
  },
} as const;

// -- Section 02 -------------------------------------------------------------

const section02Highlights = [
  {
    title: 'Friction Elimination',
    body:
      'Transformed complex, multi-tiered registration pricing matrices into intuitive eCommerce experiences.',
  },
  {
    title: 'User Flow Mapping',
    body:
      'Engineered comprehensive behavioral logic pathways and checkout workflows to optimize registration steps for conference packages and a la carte selections.',
  },
  {
    title: 'Wireframe Ideation',
    body:
      'Sketched modular checkout interfaces to manage heavy content density with minimal cognitive load.',
  },
] as const;

const section02Images: CaptionedImageProps[] = [
  {
    src: '/images/cii-section-02-ux-research.png',
    alt: 'Conference registration UX research plan and user flow logic diagram',
    caption: 'Conference registration UX research plan and user flow logic',
    border: true,
  },
  {
    src: '/images/cii-section-02-wireframes.png',
    alt: 'Wireframe sketches for improved registration experience',
    caption: 'Ideation and wireframe sketches for improved registration experience',
    border: true,
  },
  {
    src: '/images/cii-section-02-registration-ui.png',
    alt: 'Initial wireframe and final registration interface for complex transaction pathways',
    caption:
      'Initial wireframe and final registration interface optimized for complex transaction pathways',
    border: true,
  },
];

// -- Section 03 -------------------------------------------------------------

const section03Highlights = [
  {
    title: 'Programmatic Publishing',
    body:
      'Replaced manual text placement by coding scripts that parse live speaker portal APIs and place content directly into complex multi-page editorial layouts using the InDesign DOM.',
  },
  {
    title: 'Algorithmic Typography Rules',
    body:
      'Implemented advanced GREP style parameters that programmatically clean, format, and apply typographic styling hierarchies.',
  },
  {
    title: 'Improved Collaboration Ecosystem',
    body:
      'Refined workflows for conference production assistants, graphic designers, and front-end developers by eliminating daily manual edits triggered by frequent, high volume speaker updates.',
  },
] as const;

const section03Images: CaptionedImageProps[] = [
  {
    src: '/images/cii-section-03-data-flow.png',
    alt: 'Data flow architecture using JavaScript API streams for automated layout and text styles',
    caption:
      'Data flow architecture using JavaScript API streams to automate layout and text styles for web and print output',
  },
];

// -- Section 04 -------------------------------------------------------------

const section04Highlights = [
  {
    title: 'Token Governance',
    body:
      'Maintained consistency across digital applications, print publications, infographic posters, and large-format signage, proving token durability across mediums.',
  },
  {
    title: 'Sub-Branding Architecture',
    body:
      'Created sub-brand to represent additional region in a multi-regional brand (Advance Automotive Battery Conference US, Europe, and Asia), dynamically bending color tokens and localized photography while preserving core brand framework.',
  },
  {
    title: 'Responsive Layout Real Estate',
    body:
      'Systematized asset composition across multi-size digital advertising banner packs, ensuring immediate visual pattern recognition across varied standard display dimensions and aspect ratios.',
  },
] as const;

const section04Images: CaptionedImageProps[] = [
  {
    src: '/images/cii-section-04-discovery-cross-channel.png',
    alt: 'Discovery on Target cross-channel design with responsive website and sponsorship brochure',
    caption:
      'Discovery on Target cross-channel design, featuring responsive website and sponsorship brochure with exhibition floor plan',
    border: true,
  },
  {
    src: '/images/cii-section-04-dot-infographic.png',
    alt: 'GDUSA award-winning infographic poster for Discovery on Target',
    caption: 'GDUSA award-winning infographic poster for Discovery on Target',
    border: true,
  },
  {
    src: '/images/cii-section-04-aabc-regional.png',
    alt: 'Advanced Automotive Battery Conference regional sub-branding on signage and infographic poster',
    caption:
      'Advanced Automotive Battery Conference regional sub-branding featured on promotional signage and an infographic poster',
    border: true,
  },
  {
    src: '/images/cii-section-04-aabc-asia.png',
    alt: 'AABC Asia regional branding with multi-language print announcement and web banners',
    caption:
      'Expansion of regional branding to Asia, featuring a multi-language print announcement and web banner advertising suite',
    border: true,
  },
  {
    src: '/images/cii-section-04-wayfinding-booklet.png',
    alt: 'Design system applied to wayfinding signage and onsite tutorial booklet',
    caption: 'Design system application to wayfinding signage and onsite tutorial booklet',
    border: true,
  },
];

// -- Section 05 -------------------------------------------------------------

const section05Highlights = [
  {
    title: 'Lifecycle Scaling & Fabrication',
    body:
      'Engineered large-format entryway assets by translating 2D designs into 3D digital mockups, ensuring absolute fidelity during final on-site venue construction.',
  },
  {
    title: 'Wayfinding Architecture',
    body:
      'Structured high-density tower signage with floor plans and information matrices to manage traffic flow and reduce attendee navigation friction.',
  },
  {
    title: 'Micro-Staging Interaction',
    body:
      'Maintained branding discipline across local podium plaques and track-specific session markers, framing key presentation stages for media capture and professional visibility.',
  },
  {
    title: 'Color-Coding',
    body:
      'Managed multi-track conference routing by architecting distinct symbol and color-coding across key session topics (e.g. High-Content Analysis vs. Phenotypic Screening).',
  },
] as const;

const section05Images = {
  hero: {
    src: '/images/cii-section-05-entrance-portal.png',
    alt: 'Architectural scaling for the Discovery on Target entrance portal from flat layout to 3D rendering',
    caption:
      'Architectural scaling for the Discovery on Target entrance portal, demonstrating the workflow from flat production layout to 3D rendering',
    border: true,
  },
  threeUpRowOne: [
    {
      src: '/images/cii-section-05-entrance-built.png',
      alt: 'Fully constructed entrance portal at conference venue',
      caption: 'Fully constructed entrance portal',
    },
    {
      src: '/images/cii-section-05-exit-signage.png',
      alt: 'Exit signage unit at conference venue',
      caption: 'Exit signage unit',
    },
    {
      src: '/images/cii-section-05-podium-plaque.png',
      alt: 'Presentation podium plaque with conference branding',
      caption: 'Presentation podium plaque',
    },
  ],
  threeUpRowTwo: [
    {
      src: '/images/cii-section-05-session-marker.png',
      alt: 'Session room marker with conference branding',
      caption: 'Session room marker',
    },
    {
      src: '/images/cii-section-05-exhibit-hall.png',
      alt: 'Exhibit hall and raffle table with conference branding',
      caption: 'Exhibit hall and raffle table',
      border: true,
    },
    {
      src: '/images/cii-section-05-registration-desk.png',
      alt: 'Registration and welcome desk at conference venue',
      caption: 'Registration and welcome desk',
    },
  ],
  closing: {
    src: '/images/cii-section-05-wayfinding-signage.png',
    alt: 'Symbol and color-coded wayfinding signage at High Content Analysis and 3D Screening',
    caption:
      'Symbol and color-coded wayfinding across environmental signage suite at High Content Analysis + 3D Screening',
    border: true,
  },
} as const;

/*
  CII Project Page — Global Conference Experiences
  Figma reference: nodes 440-58063 (xs) / 440-58069 (sm-md) /
                         440-58075 (lg)  / 440-58081 (xl-2xl)

  Page structure
  --------------
  Two stacked regions inside <main>:

  1. Project header — full-width fluid wrapper
       • Spans the full viewport width at every breakpoint.
       • Content is padded (px-4 → px-6 → px-9) and capped at max-w-[1440px],
         which is the container-inner max-width at 2xl.
       • Contrast with container-inner: that utility progressively narrows its
         max-width at each step (288px → 592px → … → 1440px), making the
         project header wider than container-inner at sm/md/lg/xl viewports.
       • DividerFull is part of ProjectHeader so it matches the header width.

  2. Main content — container-inner (standard narrowing max-widths)
       • Uses a 12-col grid; text sections narrow further at lg+.

  Text section column widths (Figma pixel targets):
    xs / sm / md  → col-span-12
    lg            → col-start-3 col-span-8   ≈ 635px / 952px container
    xl+           → col-start-4 col-span-6   ≈ 604px / 1208px container
*/

export default function CIIPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none scroll-mt-12">

      {/* -- Project header — full-width, max-w-[1440px] -------------------- */}
      {/*
        padding-inline mirrors the layout-grid gutters site-wide:
          xs / sm  → px-4  (16px)
          sm / md  → px-6  (24px)
          lg+      → px-9  (36px)
        pt/pb maintain the same vertical rhythm as other pages (py-6 sm:py-9).
        The inner max-w-[1440px] div centres the content on ultra-wide displays.
      */}
      <div className="px-4 sm:px-6 lg:px-9 pt-6 sm:pt-9 pb-12">
        <div className="max-w-[1440px] mx-auto">
          <ProjectHeader
            clientName={project.clientName}
            projectTitle={project.projectTitle}
            tags={[...project.tags]}
          />
        </div>
      </div>

      {/* -- Main content — container-inner ----------------------- */}
      <div className="container-inner pb-6 sm:pb-9 grid grid-cols-12 gap-y-9">

        {/* -- Overview ----------------------------------------------------- */}
        {/*
          Text sections narrow at lg+ for comfortable line lengths:
            xs / sm / md  → col-span-12      (full container width)
            lg            → col-start-3 col-span-8   ≈ 635px / 952px
            xl+           → col-start-4 col-span-6   ≈ 604px / 1208px
        */}
        <section
          aria-labelledby="overview-heading"
          className="col-span-12 grid grid-cols-12 gap-y-8"
        >

          {/* Text block — narrows at lg+ */}
          <div className="col-span-12 lg:col-start-3 lg:col-span-8 xl:col-start-4 xl:col-span-6 flex flex-col gap-6">

          {/* Section heading + accent divider + lead */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h2 id="overview-heading">Overview</h2>
              <DividerShort />
            </div>

            <p className="font-body font-medium text-para-lg text-text-primary leading-tight text-pretty">
              Cambridge Innovation Institute hosts a massive annual ecosystem
              of events across the global life sciences, biotech, and clean
              energy sectors.
            </p>
          </div>

          {/* Challenge + Solution */}
          <div className="flex flex-col gap-6">

            <div className="flex flex-col gap-2">
              <h6>Challenge</h6>
              <p className="text-text-primary text-pretty">
                Managing unique visual identities across a network of 60+
                conferences introduces severe production liabilities when
                deploying thousands of distinct print and digital assets via
                a lean cross-functional team.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h6>Solution</h6>
              <p className="text-text-primary text-pretty">
                Collaborated on an enterprise design system by engineering a
                core templating framework and programmatic data automation
                pipelines to enforce strict visual governance without
                sacrificing operational velocity.
              </p>
            </div>

          </div>

          </div>

          {/* Image group — wider than text column; centred at lg+ */}
          <div className="col-span-12">
            <div className="w-full mx-auto lg:max-w-[1000px] flex flex-col gap-6 lg:gap-9">

            {/* Full-width hero image */}
            <figure className="flex flex-col gap-2">
              <div
                className={`relative w-full aspect-video overflow-hidden${
                  overviewImages.masterTemplates.border
                    ? ' border border-gray-20'
                    : ''
                }`}
              >
                <Image
                  src={overviewImages.masterTemplates.src}
                  alt={overviewImages.masterTemplates.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 1000px, 100vw"
                />
              </div>
              <figcaption className="font-body text-para-xs text-text-primary text-pretty">
                {overviewImages.masterTemplates.caption}
              </figcaption>
            </figure>

            {/* Two-up image row */}
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-9">
              {[overviewImages.dataFlow, overviewImages.signage].map(
                ({ src, alt, caption, border }) => (
                  <figure key={caption} className="flex flex-col gap-2 flex-1 min-w-0">
                    <div
                      className={`relative w-full aspect-video overflow-hidden${
                        border ? ' border border-gray-20' : ''
                      }`}
                    >
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 640px) 482px, 100vw"
                      />
                    </div>
                    <figcaption className="font-body text-para-xs text-text-primary text-pretty">
                      {caption}
                    </figcaption>
                  </figure>
                ),
              )}
            </div>

            </div>
          </div>

        </section>
        {/* -- End overview ------------------------------------------------- */}

        {/* -- 01 / Scale & Design System Governance ------------------------ */}
        <section
          aria-labelledby="section-01-heading"
          className="col-span-12 grid grid-cols-12 gap-y-8"
        >

          {/* Text block — narrows at lg+ */}
          <div className="col-span-12 lg:col-start-3 lg:col-span-8 xl:col-start-4 xl:col-span-6 flex flex-col gap-6">

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <ProjectSectionHeading
                  id="section-01-heading"
                  number="01"
                  title="Scale & Design System Governance"
                />
                <DividerShort />
              </div>

              <p className="font-body font-medium text-para-lg text-text-primary leading-tight text-pretty">
                Engineered a centralized system of multi-medium master templates
                to programmatically scale consistent layouts and structural
                guardrails across more than 60 annual conferences.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {section01Highlights.map(({ title, body }) => (
                <div key={title} className="flex flex-col gap-1">
                  <p className="font-body font-bold text-text-primary text-pretty">
                    {title}
                  </p>
                  <p className="text-text-primary text-pretty">{body}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Image group — two-up row, then full-width image */}
          <div className="col-span-12">
            <div className="w-full mx-auto lg:max-w-[1000px] flex flex-col gap-6 lg:gap-9">

              <div className="flex flex-col sm:flex-row gap-6 lg:gap-9">
                {[section01Images.websiteTemplate, section01Images.webBanners].map(
                  ({ src, alt, caption, border }) => (
                    <figure key={caption} className="flex flex-col gap-2 flex-1 min-w-0">
                      <div
                        className={`relative w-full aspect-video overflow-hidden${
                          border ? ' border border-gray-20' : ''
                        }`}
                      >
                        <Image
                          src={src}
                          alt={alt}
                          fill
                          className="object-cover"
                          sizes="(min-width: 640px) 482px, 100vw"
                        />
                      </div>
                      <figcaption className="font-body text-para-xs text-text-primary text-pretty">
                        {caption}
                      </figcaption>
                    </figure>
                  ),
                )}
              </div>

              <figure className="flex flex-col gap-2">
                <div
                  className={`relative w-full aspect-video overflow-hidden${
                    section01Images.signageTemplates.border
                      ? ' border border-gray-20'
                      : ''
                  }`}
                >
                  <Image
                    src={section01Images.signageTemplates.src}
                    alt={section01Images.signageTemplates.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 1000px, 100vw"
                  />
                </div>
                <figcaption className="font-body text-para-xs text-text-primary text-pretty">
                  {section01Images.signageTemplates.caption}
                </figcaption>
              </figure>

            </div>
          </div>

        </section>

        {/* -- 02 / Digital Infrastructure & Registration Gateways ---------------- */}
        <ProjectContentSection
          id="section-02-heading"
          number="02"
          title="Digital Infrastructure & Registration Gateways"
          lead="Refactored the core conference registration funnel through systematic user research and flow optimization, reducing transaction friction for academic and commercial audiences."
          highlights={section02Highlights}
        >
          {section02Images.map((image) => (
            <ProjectCaptionedImage key={image.caption} {...image} />
          ))}
        </ProjectContentSection>

        {/* -- 03 / Workflow Engineering & Automation ------------------------- */}
        <ProjectContentSection
          id="section-03-heading"
          number="03"
          title="Workflow Engineering & Automation"
          lead="Engineered automated layout scripts that accessed custom data pipelines using Adobe ExtendScript to eliminate human error and streamline InDesign publishing collaboration between conference producers and graphic designers."
          highlights={section03Highlights}
        >
          {section03Images.map((image) => (
            <ProjectCaptionedImage key={image.caption} {...image} />
          ))}
        </ProjectContentSection>

        {/* -- 04 / Holistic Cross-Channel Ecosystems ------------------------- */}
        <ProjectContentSection
          id="section-04-heading"
          number="04"
          title="Holistic Cross-Channel Ecosystems"
          lead="Deployed platform-agnostic design systems to scale cohesive brand identities across distinct physical and digital parameters, optimizing content for scale and application."
          highlights={section04Highlights}
        >
          {section04Images.map((image) => (
            <ProjectCaptionedImage key={image.caption} {...image} />
          ))}
        </ProjectContentSection>

        {/* -- 05 / Experiential Spatial Extensions --------------------------- */}
        <ProjectContentSection
          id="section-05-heading"
          number="05"
          title="Experiential Spatial Extensions"
          lead="Translated digital brand identities into large-scale environmental design artifacts and structural wayfinding networks, managing physical venue touchpoints and attendee routing systems for live conference environments."
          highlights={section05Highlights}
        >
          <ProjectCaptionedImage {...section05Images.hero} />

          <ThreeUpRow images={section05Images.threeUpRowOne} />

          <ThreeUpRow images={section05Images.threeUpRowTwo} />

          <ProjectCaptionedImage {...section05Images.closing} />
        </ProjectContentSection>

      </div>

    </main>
  );
}
