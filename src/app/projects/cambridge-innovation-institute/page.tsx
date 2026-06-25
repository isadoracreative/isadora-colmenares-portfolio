import ProjectHeader from '@/components/ProjectHeader';
import DividerShort  from '@/components/DividerShort';

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
          className="col-span-12 lg:col-start-3 lg:col-span-8 xl:col-start-4 xl:col-span-6 flex flex-col gap-6"
        >

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

        </section>
        {/* -- End overview — stop here for review -------------------------- */}

      </div>

    </main>
  );
}
