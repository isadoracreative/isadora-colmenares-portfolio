import ProjectHeader from '@/components/ProjectHeader';
import { requireProjectBySlug } from '@/data/projects';
import ProjectContentSection from '@/components/ProjectContentSection';
import ProjectCaptionedImage, { type CaptionedImageProps } from '@/components/ProjectCaptionedImage';
import ProgressiveImage from '@/components/ProgressiveImage';
import DividerShort from '@/components/DividerShort';

const project = requireProjectBySlug('inpa');

if (!project.overviewImages || project.overviewImages.length < 3) {
  throw new Error('Missing overview images for inpa');
}

const [backdropSignage, keynoteStaging, eventProgram] = project.overviewImages;

// -- Overview: Role -----------------------------------------------------------

const overviewRole =
  'I was the sole designer on this project, supporting event organizers, scientific contributors, and attendees. I collaborated with the production company, full stack engineers, printing press staff, and institute volunteers.';

// -- Section 01 -------------------------------------------------------------

const section01Highlights = [
  {
    title: 'Sightline Anchoring',
    body: 'The large-scale backdrop banner focuses audience attention directly on the keynote presentation.',
  },
  {
    title: 'Traffic Blueprinting',
    body: 'Venue architectural mapping dictates the placement of high-visibility directional signage nodes to guide attendees.',
  },
  {
    title: 'System Integrity',
    body: 'Grid and color tokens scale from small pixel parameters up to large-format spatial production.',
  },
] as const;

const section01Image: CaptionedImageProps = {
  src: '/images/inpa-section-01-venue-floor-plan.png',
  alt: 'Venue floor plan mapping exhibition area, keynote stage, and other event locations',
  caption: 'Venue floor plan mapping exhibition area, keynote stage, and other event locations',
  border: true,
};

// -- Section 02 -------------------------------------------------------------

const section02Highlights = [
  {
    title: 'Material Utility',
    body: 'Deployed durable screen-printed canvas tote bags to serve as the unified, multi-day mobile carrying system for all event assets.',
  },
  {
    title: 'Systemic Hand-off',
    body: 'Transformed a standard administrative interaction into a premium brand onboarding gateway that frames the attendee experience.',
  },
] as const;

const section02Images: CaptionedImageProps[] = [
  {
    src: '/images/inpa-section-02-registration-desk.jpg',
    alt: 'Registration touchpoint and information delivery',
    caption: 'Registration touchpoint and information delivery',
    border: true,
    sizes: '(min-width: 640px) 482px, 100vw',
  },
  {
    src: '/images/inpa-section-02-tote-bags.jpg',
    alt: 'Screen-printed welcome tote bag for carrying event program and other assets',
    caption: 'Screen-printed welcome tote bag for carrying event program and other assets',
    border: true,
    sizes: '(min-width: 640px) 482px, 100vw',
  },
];

// -- Section 03 -------------------------------------------------------------

const section03Highlights = [
  {
    title: 'Token Continuity',
    body: 'Established hex colors, typographic hierarchies, and layout grids that scale predictably from digital screens to physical mediums.',
  },
  {
    title: 'Pre-Event Gateway',
    body: 'Prototyped responsive interfaces to handle flexible grids while familiarizing international audience with congress branding.',
  },
  {
    title: 'Dimensional Adaptation',
    body: 'Designed identity components to comply with a variety of third-party marketing aspect ratios, ensuring brand recognition across social media and print promotions.',
  },
] as const;

const section03Images: CaptionedImageProps[] = [
  {
    src: '/images/inpa-section-03-event-website.jpg',
    alt: 'Responsive event website supporting content on desktop and mobile viewports',
    caption: 'Responsive event website supporting content on desktop and mobile viewports',
    border: true,
  },
  {
    src: '/images/inpa-section-03-promotional-signage.jpg',
    alt: 'Promotional signage ensuring visual consistency across digital and public environments',
    caption: 'Promotional signage ensuring visual consistency across digital and public environments',
    border: true,
  },
];

// -- Section 04 -------------------------------------------------------------

const section04Highlights = [
  {
    title: 'Operational Visual Keys',
    body: 'Deployed high-contrast staff apparel to create immediate visual cues for attendees seeking organization team members.',
  },
  {
    title: 'Access Control Hierarchy',
    body: 'Engineered clear, color-coded credential badges to facilitate seamless screening at event boundaries.',
  },
  {
    title: 'Micro-Signage',
    body: 'Structured speaker namecards to maintain brand visibility during media capture and panel interactions.',
  },
] as const;

const section04StaffApparel = {
  src: '/images/inpa-section-04-staff-apparel.jpg',
  alt: 'Staff identity apparel and color-coded badge',
  caption: 'Staff identity apparel and color-coded badge',
  width: 1800,
  height: 2800,
} as const;

const section04AttendeeBadges = {
  src: '/images/inpa-section-04-attendee-badges.jpg',
  alt: 'Color-coded attendee identification badges for varying levels of event access',
  caption: 'Color-coded attendee identification badges for varying levels of event access',
  width: 3008,
  height: 2000,
} as const;

const section04Closing: CaptionedImageProps = {
  src: '/images/inpa-section-04-speaker-namecards.jpg',
  alt: 'Branding applied to panel speaker namecards',
  caption: 'Branding applied to panel speaker namecards',
};

// -- Section 05 -------------------------------------------------------------

const section05Highlights = [
  {
    title: 'Grid Discipline',
    body: 'Applied strict 12-column layouts to balance extensive information with whitespace and visual resting points, reducing cognitive overload.',
  },
  {
    title: 'Data Scannability',
    body: 'Engineered structured text hierarchies and visual line weights to let attendees cross-reference concurrent lecture tracks at a glance.',
  },
  {
    title: 'Systemic Unification',
    body: 'Carried grid rules and typographic hierarchies from the print booklet directly into the post-congress digital abstract guide, securing absolute cross-channel continuity.',
  },
] as const;

const section05Images: CaptionedImageProps[] = [
  {
    src: '/images/inpa-section-05-program-grid.png',
    alt: 'Program overview grid mapping the multi-track event timetable',
    caption: 'Program overview grid mapping the multi-track event timetable',
    border: true,
  },
  {
    src: '/images/inpa-section-05-editorial-layouts.png',
    alt: 'Editorial layouts showcasing keynote talks, speaker profiles, and course descriptions',
    caption: 'Editorial layouts showcasing keynote talks, speaker profiles, and course descriptions',
    border: true,
  },
  {
    src: '/images/inpa-section-05-abstract-guide.jpg',
    alt: '329-page digital abstract guide for post-congress reference',
    caption: '329-page digital abstract guide for post-congress reference',
    border: true,
  },
];

export default function InpaPage() {
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
                This international event, jointly hosted by Neotropical Ornithological Congress and Congresso Brasileiro de Ornitologia, served as a historic, unified gathering for ornithologists exploring scientific research in the heart of the Brazilian Amazon.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h6>Challenge</h6>
                <p className="text-text-primary text-pretty">
                  Managing a profound narrative transition for two historically independent entities introduces the potential for fragmented identities when trying to deploy a singular, scientifically rigorous brand experience across both digital interfaces and physical environmental touchpoints.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h6>Solution</h6>
                <p className="text-text-primary text-pretty">
                  Architected a combined branding that synthesizes precise, organic silhouettes of two endemic avian species to serve as a direct visual metaphor for the historic conjunction. The identity system emphasizes localized imagery with forms derived from scientific taxonomy, an environmental teal-to-green gradient palette, and colorful bird photography, cleanly anchoring the omni-channel brand architecture within its local Amazonian context.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h6>Role</h6>
                <p className="text-text-primary text-pretty">{overviewRole}</p>
              </div>
            </div>

          </div>

          {/* Image group — hero + 2-up row; full width at every breakpoint */}
          <div className="col-span-12">
            <div className="w-full flex flex-col gap-6 lg:gap-9">
              <ProjectCaptionedImage {...backdropSignage} />
              <div className="flex flex-col sm:flex-row gap-6 lg:gap-9">
                <ProjectCaptionedImage
                  {...keynoteStaging}
                  sizes="(min-width: 640px) 482px, 100vw"
                />
                <ProjectCaptionedImage
                  {...eventProgram}
                  sizes="(min-width: 640px) 482px, 100vw"
                />
              </div>
            </div>
          </div>

        </section>
        {/* -- End overview ------------------------------------------------- */}

        {/* -- 01 / Spatial Systems & Wayfinding ------------------------------ */}
        <ProjectContentSection
          id="section-01-heading"
          number="01"
          title="Spatial Systems & Wayfinding"
          lead="Scaled digital brand tokens onto a massive physical footprint to eliminate environmental noise, guide crowd routing, and anchor keynote presentations."
          highlights={section01Highlights}
        >
          <ProjectCaptionedImage {...section01Image} />
        </ProjectContentSection>

        {/* -- 02 / Service Architecture: Welcome & Onboarding ---------------- */}
        <ProjectContentSection
          id="section-02-heading"
          number="02"
          title="Service Architecture: Welcome & Onboarding"
          lead="Designed the physical check-in to optimize high-volume attendee onboarding, reduce registration friction, and deliver tactile design assets for self-guided navigation."
          highlights={section02Highlights}
        >
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-9">
            {section02Images.map((image) => (
              <ProjectCaptionedImage key={image.caption} {...image} />
            ))}
          </div>
        </ProjectContentSection>

        {/* -- 03 / Digital Foundations & Pre-Event Promotion ----------------- */}
        <ProjectContentSection
          id="section-03-heading"
          number="03"
          title="Digital Foundations & Pre-Event Promotion"
          lead="Defined core design tokens and platform-agnostic layout systems supporting registration, abstract submissions, and multi-channel marketing campaigns."
          highlights={section03Highlights}
        >
          {section03Images.map((image) => (
            <ProjectCaptionedImage key={image.caption} {...image} />
          ))}
        </ProjectContentSection>

        {/* -- 04 / Systemic Identification & Operational Utility ------------- */}
        <ProjectContentSection
          id="section-04-heading"
          number="04"
          title="Systemic Identification & Operational Utility"
          lead="Deployed identity tokens as functional infrastructure used in venue access management, attendee routing, and panel speaker visibility."
          highlights={section04Highlights}
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-6 lg:gap-x-9 gap-y-2">
            <figure className="contents">
              <div className="sm:col-span-4 sm:row-start-1">
                <ProgressiveImage
                  src={section04StaffApparel.src}
                  alt={section04StaffApparel.alt}
                  width={section04StaffApparel.width}
                  height={section04StaffApparel.height}
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="block w-full h-auto"
                />
              </div>
              <figcaption className="mb-4 sm:mb-0 sm:col-span-4 sm:row-start-2 font-body text-para-sm text-text-primary text-pretty">
                {section04StaffApparel.caption}
              </figcaption>
            </figure>
            <figure className="contents">
              <div className="sm:col-span-8 sm:row-start-1 relative overflow-hidden">
                <ProgressiveImage
                  src={section04AttendeeBadges.src}
                  alt={section04AttendeeBadges.alt}
                  width={section04AttendeeBadges.width}
                  height={section04AttendeeBadges.height}
                  sizes="(min-width: 640px) 67vw, 100vw"
                  className="block w-full h-auto sm:absolute sm:inset-0 sm:h-full sm:object-cover"
                />
              </div>
              <figcaption className="sm:col-span-8 sm:row-start-2 font-body text-para-sm text-text-primary text-pretty">
                {section04AttendeeBadges.caption}
              </figcaption>
            </figure>
          </div>
          <ProjectCaptionedImage {...section04Closing} />
        </ProjectContentSection>

        {/* -- 05 / Information Architecture: Content & Reference Data -------- */}
        <ProjectContentSection
          id="section-05-heading"
          number="05"
          title="Information Architecture: Content & Reference Data"
          lead="Designed editorial print and digital layouts to transform an intricate, multi-track academic schedule into an intuitive offline data source."
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
