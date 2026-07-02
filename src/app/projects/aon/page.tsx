import ProgressiveImage from '@/components/ProgressiveImage';
import ProjectHeader from '@/components/ProjectHeader';
import { requireProjectBySlug } from '@/data/projects';
import ProjectContentSection from '@/components/ProjectContentSection';
import ProjectCaptionedImage, { type CaptionedImageProps } from '@/components/ProjectCaptionedImage';
import DividerShort from '@/components/DividerShort';

const project = requireProjectBySlug('aon');

if (!project.overviewImages || project.overviewImages.length < 3) {
  throw new Error('Missing overview images for aon');
}

const [dashboard, mobileSimulation, tripleDiamond] = project.overviewImages;

// -- Section 01 -------------------------------------------------------------

const section01Highlights = [
  {
    title: 'Thematic Mapping',
    body:
      'Synthesized stakeholder interview logs into centralized insights to isolate recurring operational challenges and workforce data dependencies.',
  },
  {
    title: 'Persona Ecosystems',
    body:
      'Conducted collaborative cross-regional workshop to build target user archetypes and crystallize problem statements.',
  },
  {
    title: 'Strategic Feature Prioritization',
    body:
      'Translated qualitative discoveries into definitive, high-impact product development strategies and roadmapping.',
  },
] as const;

const section01TwoUp: CaptionedImageProps[] = [
  {
    src: '/images/aon-section-01-affinity-map.png',
    alt: 'Affinity map and theme synthesis from global stakeholder interviews',
    caption: 'Affinity map and theme synthesis compiled from global stakeholder interviews',
    border: true,
    sizes: '(min-width: 640px) 482px, 100vw',
  },
  {
    src: '/images/aon-section-01-persona-workshop.png',
    alt: 'Collaborative workshop output defining user persona ecosystems',
    caption:
      'Collaborative workshop output redefining user persona ecosystem and interrelated problem statements',
    border: true,
    sizes: '(min-width: 640px) 482px, 100vw',
  },
];

const section01Closing: CaptionedImageProps = {
  src: '/images/aon-section-01-strategy-presentation.png',
  alt: 'Presentation mapping research insights to product development strategies',
  caption:
    'Comprehensive presentation mapping research insights to product development strategies',
  border: true,
};

// -- Section 02 -------------------------------------------------------------

const section02Highlights = [
  {
    title: 'Architectural Token Mapping',
    body:
      'Structured an intricate style governance framework mapping core atomic foundations (color, typography, spatial scales) to reusable global variables and functional component definitions.',
  },
  {
    title: 'Automated Theme Overrides',
    body:
      'Programmed SCSS variable-driven style layers that instantly adapt component colors, typography, and imagery without modifying or disrupting core structural foundations.',
  },
  {
    title: 'No-Code Brand Editor',
    body:
      'Designed and co-engineered an administrative "Theme Editor" control panel, providing non-technical enterprise administrators a visual interface to seamlessly generate code-ready token suites from client assets.',
  },
] as const;

const section02Images: CaptionedImageProps[] = [
  {
    src: '/images/aon-section-02-token-architecture.png',
    alt: 'Token-based design system architecture mapping variables to client-branded components',
    caption:
      'Extension of global design system to a token-based architecture mapping variables to client-branded components',
    border: true,
  },
  {
    src: '/images/aon-section-02-scss-theme.png',
    alt: 'Variable-driven SCSS theme structure for automated styling',
    caption: 'Variable-driven styling architecture demonstrating automated SCSS theme structure',
    border: true,
  },
];

const section02TwoUp: CaptionedImageProps[] = [
  {
    src: '/images/aon-section-02-theme-editor.png',
    alt: 'Administrative Theme Editor interface for asset publishing and color token generation',
    caption:
      'Administrative Theme Editor interface designed for real-time asset publishing and accessible color token generation',
    border: true,
    sizes: '(min-width: 640px) 482px, 100vw',
  },
  {
    src: '/images/aon-section-02-theme-editor-output.png',
    alt: 'Theme Editor output applying client branding to token-based components',
    caption: 'Theme Editor output showcasing application of client branding to token-based components',
    border: true,
    sizes: '(min-width: 640px) 482px, 100vw',
  },
];

// -- Section 03 -------------------------------------------------------------

const section03Highlights = [
  {
    title: 'Mobile-First Immersive Simulations',
    body:
      'Migrated desktop-only situational judgment tests to mobile-first application design, extending product inclusivity to users who don\u2019t own a computer.',
  },
  {
    title: 'Universal & Accessible Design',
    body:
      'Integrated native web accessibility standards directly into audio visual components using closed captioning and adaptive controls, adopting universal design methodology.',
  },
  {
    title: 'Cognitive Load Optimization',
    body:
      'Engineered an immersive candidate test materials microsite featuring mock email threads, timeline data visualizations, and interactive attachments structured to streamline scanning during live role-play evaluations.',
  },
] as const;

const section03TwoUp: CaptionedImageProps[] = [
  {
    src: '/images/aon-section-03-mobile-sjt.jpg',
    alt: 'Mobile-first situational judgment test interface',
    caption:
      'Mobile-first user interface for the immersive situational judgment test, optimized for fluid scaling across viewport sizes and device constraints',
    border: true,
    sizes: '(min-width: 640px) 482px, 100vw',
  },
  {
    src: '/images/aon-section-03-closed-captioning.jpg',
    alt: 'Immersive simulation interface with closed-captioning',
    caption:
      'Immersive simulation interface demonstrating integration of closed-captioning for increased accessibility',
    border: true,
    sizes: '(min-width: 640px) 482px, 100vw',
  },
];

const section03Closing: CaptionedImageProps = {
  src: '/images/aon-section-03-simulation-microsite.png',
  alt: 'Interactive candidate simulation microsite with reference data and communication feeds',
  caption:
    'Interactive candidate simulation microsite containing time-sensitive reference data and example communication feeds with live notifications for roleplay scenarios',
  border: true,
};

// -- Section 04 -------------------------------------------------------------

const section04Highlights = [
  {
    title: 'Multi-Platform Architecture Analysis',
    body:
      'Conducted comparative architectural structural analyses to evaluate data differences and component dependencies when consolidating isolated systems into a single master framework.',
  },
  {
    title: 'B2B Project Governance Panels',
    body:
      'Maintained consistency across multi-column project management tables, grids, and charts, empowering administrators to manage client organizational architecture and evaluate concurrent assessment metrics at a glance.',
  },
  {
    title: 'Analytical Feedback Architecture',
    body:
      'Formatted comprehensive, client- and candidate-facing accessible evaluation reports using clean visual hierarchies, radar charts, and progress gauges to distill multifaceted competency metrics.',
  },
] as const;

const section04TwoUp: CaptionedImageProps[] = [
  {
    src: '/images/aon-section-04-architecture-comparison.png',
    alt: 'Technical architecture comparison for platform consolidation',
    caption:
      'Technical architecture comparison detailing client directory structures and content management strategies for platform consolidation',
    border: true,
    sizes: '(min-width: 640px) 482px, 100vw',
  },
  {
    src: '/images/aon-section-04-governance-admin.png',
    alt: 'Client governance admin interface for organizational structures',
    caption:
      'Client governance admin interface simplifying complex organizational structures and facilitating streamlined customer relationship management workflows',
    border: true,
    sizes: '(min-width: 640px) 482px, 100vw',
  },
];

const section04Stack: CaptionedImageProps[] = [
  {
    src: '/images/aon-section-04-project-dashboard.png',
    alt: 'B2B project dashboard modules for global assessment pipelines',
    caption:
      'B2B project dashboard modules used by corporate administrators overseeing simultaneous global assessment pipelines',
    border: true,
  },
  {
    src: '/images/aon-section-04-assessment-reports.png',
    alt: 'Client-branded assessment reports across varied viewports',
    caption: 'Client-branded assessment reports visualizing test results across varied viewports',
    border: true,
  },
];

// -- Section 05 -------------------------------------------------------------

const section05Highlights = [
  {
    title: 'Cross-Functional Process Design',
    body:
      'Adapted Triple Diamond product methodology to formalize cross-functional touchpoints, securing a tight operational partnership between engineering, product, and design teams.',
  },
  {
    title: 'Systemic Feature Prioritization',
    body:
      'Built a comprehensive product lifecycle pipeline mapping design ideation to user value and effort estimation.',
  },
  {
    title: 'Strategic Roadmapping',
    body:
      'Structured standardized, modular product phases to systematically group feature backlogs into defined production stages and iterative release versions for MVP and beyond.',
  },
] as const;

const section05Images: CaptionedImageProps[] = [
  {
    src: '/images/aon-section-05-triple-diamond-lifecycle.png',
    alt: 'Triple diamond product delivery lifecycle with design and development checkpoints',
    caption:
      'Adapted triple diamond product delivery lifecycle mapping strategic integration checkpoints between design and development workstreams',
    border: true,
  },
  {
    src: '/images/aon-section-05-prioritization-templates.png',
    alt: 'Feature prioritization process templates for product backlogs',
    caption:
      'Standardized feature prioritization process templates utilized to funnel ideation into product backlogs',
    border: true,
  },
];

export default function AonPage() {
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
                Architecting global talent assessment systems requires balancing
                high data density with strict accessibility thresholds and global
                client requirements. The central objective at Aon was to direct UX
                strategy and frontend engineering for an enterprise SaaS platform
                processing millions of candidate assessments and calculated
                reporting benchmarks.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h6>Challenge</h6>
                <p className="text-text-primary text-pretty">
                  Consolidating isolated legacy applications into a singular
                  framework introduces complex UX obstacles when merging intricate
                  talent experiences and data-dense results analytics without
                  triggering severe cognitive overload in end-users.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h6>Solution</h6>
                <p className="text-text-primary text-pretty">
                  Modernize front-end application architecture using Angular to
                  refactor candidate assessment flows, while designing
                  administrative dashboards, establishing a flexible token-driven
                  client theme engine, and standardizing cross-functional design
                  templates to accelerate product delivery.
                </p>
              </div>
            </div>

          </div>

          {/* Image group — wider than text column; centred at lg+ */}
          <div className="col-span-12">
            <div className="w-full flex flex-col gap-6 lg:gap-9">

              <figure className="flex flex-col gap-2">
                <div
                  className={`relative w-full aspect-video overflow-hidden${
                    dashboard.border ? ' border border-gray-20' : ''
                  }`}
                >
                  <ProgressiveImage
                    src={dashboard.src}
                    alt={dashboard.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 1000px, 100vw"
                  />
                </div>
                <figcaption className="font-body text-para-xs text-text-primary text-pretty">
                  {dashboard.caption}
                </figcaption>
              </figure>

              <div className="flex flex-col sm:flex-row gap-6 lg:gap-9">
                {[mobileSimulation, tripleDiamond].map(
                  ({ src, alt, caption, border }) => (
                    <figure key={caption} className="flex flex-col gap-2 flex-1 min-w-0">
                      <div
                        className={`relative w-full aspect-video overflow-hidden${
                          border ? ' border border-gray-20' : ''
                        }`}
                      >
                        <ProgressiveImage
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

        {/* -- 01 / User Research & Product Strategy ------------------------ */}
        <ProjectContentSection
          id="section-01-heading"
          number="01"
          title="User Research & Product Strategy"
          lead="Led expansive qualitative research and stakeholder workshops to synthesize global skills-based pay insights, mapping human capital data directly to corporate product roadmaps."
          highlights={section01Highlights}
        >
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-9">
            {section01TwoUp.map((image) => (
              <ProjectCaptionedImage key={image.caption} {...image} />
            ))}
          </div>
          <ProjectCaptionedImage {...section01Closing} />
        </ProjectContentSection>

        {/* -- 02 / Adaptable Design System & Theme Governance ---------------- */}
        <ProjectContentSection
          id="section-02-heading"
          number="02"
          title="Adaptable Design System & Theme Governance"
          lead="Extended and transformed an enterprise design system to be a token-based adaptable theme engine, enabling automated UI restyling to dynamically match bespoke client branding across global applications."
          highlights={section02Highlights}
        >
          {section02Images.map((image) => (
            <ProjectCaptionedImage key={image.caption} {...image} />
          ))}
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-9">
            {section02TwoUp.map((image) => (
              <ProjectCaptionedImage key={image.caption} {...image} />
            ))}
          </div>
        </ProjectContentSection>

        {/* -- 03 / Accessible Simulations & Core Application Refactoring --- */}
        <ProjectContentSection
          id="section-03-heading"
          number="03"
          title="Accessible Simulations & Core Application Refactoring"
          lead="Refactored a desktop assessment into an accessible, mobile-first single-page application optimized for diverse candidate capabilities and redesigned a legacy roleplay simulation increasing support for new features and complex data types."
          highlights={section03Highlights}
        >
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-9">
            {section03TwoUp.map((image) => (
              <ProjectCaptionedImage key={image.caption} {...image} />
            ))}
          </div>
          <ProjectCaptionedImage {...section03Closing} />
        </ProjectContentSection>

        {/* -- 04 / Enterprise Framework Consolidation & Reporting Ecosystems */}
        <ProjectContentSection
          id="section-04-heading"
          number="04"
          title="Enterprise Framework Consolidation & Reporting Ecosystems"
          lead="Led structural analyses to merge isolated applications into a unified SaaS framework, designing data-dense admin project management panels and collaborative B2B2C reporting modules to optimize information consumption for both clients and consumers."
          highlights={section04Highlights}
        >
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-9">
            {section04TwoUp.map((image) => (
              <ProjectCaptionedImage key={image.caption} {...image} />
            ))}
          </div>
          {section04Stack.map((image) => (
            <ProjectCaptionedImage key={image.caption} {...image} />
          ))}
        </ProjectContentSection>

        {/* -- 05 / Product Integration & Design Operations ----------------- */}
        <ProjectContentSection
          id="section-05-heading"
          number="05"
          title="Product Integration & Design Operations"
          lead="Scaled organizational design workflows and cross-functional product operations frameworks, authoring proprietary templates to accelerate team onboarding and optimize the design-to-engineering pipeline."
          highlights={section05Highlights}
        >
          {section05Images.map((image) => (
            <ProjectCaptionedImage key={image.caption} {...image} />
          ))}
        </ProjectContentSection>

      </div>
    </main>
  );
}
