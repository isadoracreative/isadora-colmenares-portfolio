import ProjectHeader from '@/components/ProjectHeader';
import { requireProjectBySlug } from '@/data/projects';
import ProjectContentSection from '@/components/ProjectContentSection';
import ProjectCaptionedImage, { type CaptionedImageProps } from '@/components/ProjectCaptionedImage';
import DividerShort from '@/components/DividerShort';

const project = requireProjectBySlug('verizon');

if (!project.overviewImages || project.overviewImages.length < 3) {
  throw new Error('Missing overview images for verizon');
}

const [componentStickerSheet, componentAnatomy, assembledChatExperiences] = project.overviewImages;

// -- Overview: Role -----------------------------------------------------------

const overviewRole =
  'I was a Contract Experience Designer, supporting chat product stakeholders, end users, and the conceptual design lead. I collaborated with engineers, designers, and design system leadership.';

// -- Section 01 -------------------------------------------------------------

const section01Highlights = [
  {
    title: 'Auto-Layout Adherence',
    body: 'Built a multi-variant component library using rigorous Figma auto-layout parameters to allow text strings and media containers to expand dynamically without clipping.',
  },
  {
    title: 'Alignment with Global Variables',
    body: 'Synchronized all specialized sub-system visual variables with pre-existing global design system color, spacing, border radius, and typographic tokens to maintain absolute compliance.',
  },
  {
    title: 'Component Ease-of-Use',
    body: 'Leveraged best practice property types, taxonomy in alignment with the core design system, and nested component methods, significantly minimizing file weight and allowing product designers to easily configure components according to their learned behavior using the global system.',
  },
] as const;

const section01Image: CaptionedImageProps = {
  src: '/images/verizon-section-01-surface-logic-variables.png',
  alt: 'Global surface logic variables leveraged in Chat Expansion Pack for rapid mode switching in prototypes',
  caption: 'Global surface logic variables leveraged in Chat Expansion Pack for rapid mode switching in prototypes',
  border: true,
};

const section01TwoUp: CaptionedImageProps[] = [
  {
    src: '/images/verizon-section-01-message-group-config.png',
    alt: 'Message group configuration for conversation with AI or live agent',
    caption: 'Message group configuration for conversation with AI or live agent',
    border: true,
    sizes: '(min-width: 640px) 482px, 100vw',
  },
  {
    src: '/images/verizon-section-01-radio-box-payment.png',
    alt: 'Radio box configuration for payment selection',
    caption: 'Radio box configuration for payment selection',
    border: true,
    sizes: '(min-width: 640px) 482px, 100vw',
  },
];

// -- Section 02 -------------------------------------------------------------

const section02Highlights = [
  {
    title: 'Engineering Specifications',
    body: 'Drafted exhaustive component anatomy sheets that explicitly call out spacing, token values, nested components, property configuration options, and text-wrapping thresholds for developers.',
  },
  {
    title: 'Usage Guidelines',
    body: 'Authored contextual "Dos and Don\u2019ts" usage frameworks to visually guide product designers away from incorrect component configurations, prohibited nesting combinations, and content mismatches.',
  },
  {
    title: 'Active Partnership with Developers',
    body: 'Consistently paired with developers for live coding sessions and performed design QA to close the interpretation gap between design staging and front-end implementation.',
  },
] as const;

const section02Image: CaptionedImageProps = {
  src: '/images/verizon-section-02-widget-specifications.png',
  alt: 'Widget component specifications and guidelines',
  caption: 'Widget component specifications and guidelines',
  border: true,
};

const section02TwoUp: CaptionedImageProps[] = [
  {
    src: '/images/verizon-section-02-widget-anatomy.png',
    alt: 'Widget component anatomy',
    caption: 'Widget component anatomy',
    border: true,
    sizes: '(min-width: 640px) 482px, 100vw',
  },
  {
    src: '/images/verizon-section-02-button-properties-matrix.png',
    alt: 'Button component properties matrix',
    caption: 'Button component properties matrix',
    border: true,
    sizes: '(min-width: 640px) 482px, 100vw',
  },
];

const section02Closing: CaptionedImageProps = {
  src: '/images/verizon-section-02-dos-donts-top-nav.png',
  alt: 'Dos and Don\u2019ts for Top Navigation component',
  caption: 'Dos and Don\u2019ts for Top Navigation component',
  border: true,
};

// -- Section 03 -------------------------------------------------------------

const section03Highlights = [
  {
    title: 'Realistic User Flows',
    body: 'Grouped isolated UI elements into comprehensive linear flows to test information density and screen hierarchy against real-world messaging scripts.',
  },
  {
    title: 'Edge Case Identification',
    body: 'Based testing on lead designer\u2019s extensive audit of chat product implementation across the company to ensure all edge cases like extreme character-length expansion and custom content are supported.',
  },
  {
    title: 'Streamlined Product Design',
    body: 'Developed pre-configured layout baselines for fast deployment, streamlining product team prototyping cycles to a drag-and-drop workflow.',
  },
] as const;

const section03Images: CaptionedImageProps[] = [
  {
    src: '/images/verizon-section-03-radio-box-testing.png',
    alt: 'Testing Radio Box standard usage and edge cases on light and dark surfaces',
    caption: 'Testing Radio Box standard usage and edge cases on light and dark surfaces',
    border: true,
  },
  {
    src: '/images/verizon-section-03-chat-template.png',
    alt: 'Chat template for creating new conversation flows',
    caption: 'Chat template for creating new conversation flows',
    border: true,
  },
  {
    src: '/images/verizon-section-03-international-plan-setup.png',
    alt: 'Select screens from user flow of AI-assisted international plan setup',
    caption: 'Select screens from user flow of AI-assisted international plan setup',
    border: true,
  },
];

export default function VerizonPage() {
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
                Operating within Verizon&rsquo;s corporate design ecosystem, the objective of this initiative was to build the official Chat Expansion Pack&mdash;a specialized Figma component library designed to standardize conversational messaging layouts, interactive quick replies, and live-agent interfaces across the organization.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h6>Challenge</h6>
                <p className="text-text-primary text-pretty">
                  Deploying automated messaging across varying digital touchpoints introduces fragmentation risks if product teams build ad-hoc chat patterns. The challenge lay in constructing a modular sub-system that explicitly honored Verizon&rsquo;s established design system tokens and typography styles, while delivering the precise layout variations and usage guidelines required for multi-threaded dialogue configurations.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h6>Solution</h6>
                <p className="text-text-primary text-pretty">
                  Designed, specified, and deployed a robust conversational UI library, following established global design and documentation guidelines. By anchoring the library with an extensive component sticker sheet, explicit rule specifications, and a simulated message app flow environment, the expansion successfully protected brand consistency and unified cross-functional design delivery.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h6>Role</h6>
                <p className="text-text-primary text-pretty">{overviewRole}</p>
              </div>
            </div>

          </div>

          {/* Image group — 3 stacked images; full width at every breakpoint */}
          <div className="col-span-12">
            <div className="w-full flex flex-col gap-6 lg:gap-9">
              <ProjectCaptionedImage {...componentStickerSheet} />
              <ProjectCaptionedImage {...componentAnatomy} />
              <ProjectCaptionedImage {...assembledChatExperiences} />
            </div>
          </div>

        </section>
        {/* -- End overview ------------------------------------------------- */}

        {/* -- 01 / Component Modularity & Systemic Scaling ------------------ */}
        <ProjectContentSection
          id="section-01-heading"
          number="01"
          title="Component Modularity & Systemic Scaling"
          lead="Authored scalable Figma components leveraging auto layout and conditional surface logic, ensuring visual flexibility within strict brand boundaries."
          highlights={section01Highlights}
        >
          <ProjectCaptionedImage {...section01Image} />
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-9">
            {section01TwoUp.map((image) => (
              <ProjectCaptionedImage key={image.caption} {...image} />
            ))}
          </div>
        </ProjectContentSection>

        {/* -- 02 / Governance, Specs, and Documentation ---------------------- */}
        <ProjectContentSection
          id="section-02-heading"
          number="02"
          title="Governance, Specs, and Documentation"
          lead="Authored self-serve technical guidelines to empower product teams to use the new conversational system correctly without requiring ongoing repetitive instruction from global design system staff."
          highlights={section02Highlights}
        >
          <ProjectCaptionedImage {...section02Image} />
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-9">
            {section02TwoUp.map((image) => (
              <ProjectCaptionedImage key={image.caption} {...image} />
            ))}
          </div>
          <ProjectCaptionedImage {...section02Closing} />
        </ProjectContentSection>

        {/* -- 03 / Workflow Verification & Immersive Prototyping ------------- */}
        <ProjectContentSection
          id="section-03-heading"
          number="03"
          title="Workflow Verification & Immersive Prototyping"
          lead="Stress-tested the structural layout constraints of the chat expansion pack by assembling components into complete, end-to-end interactive mockups."
          highlights={section03Highlights}
        >
          {section03Images.map((image) => (
            <ProjectCaptionedImage key={image.caption} {...image} />
          ))}
        </ProjectContentSection>

      </div>
    </main>
  );
}
