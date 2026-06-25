import Image from 'next/image';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectSectionHeading from '@/components/ProjectSectionHeading';
import DividerShort  from '@/components/DividerShort';

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
            clientName="Cambridge Innovation Institute"
            projectTitle="Global Conference Experiences"
            tags={[
              'Exhibition design',
              'Wayfinding',
              'Omni-channel design',
              'Layout automation',
              'Front-end development',
              'Publication design',
            ]}
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
                    ? ' border border-core-gray-light'
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
                        border ? ' border border-core-gray-light' : ''
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
                          border ? ' border border-core-gray-light' : ''
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
                      ? ' border border-core-gray-light'
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

      </div>

    </main>
  );
}
