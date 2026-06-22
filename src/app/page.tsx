import Image from 'next/image';
import DividerShort from '@/components/DividerShort';

/* ── Core Skills data ───────────────────────────────────────────────── */

const coreSkills = [
  {
    icon: 'sign-post',
    heading: 'Experience & Spatial Design',
    items: [
      'Information Architecture',
      'Spatial Storytelling',
      'Environmental Typography',
      'Wayfinding',
      'Exhibition Design',
      'Identity Systems',
    ],
  },
  {
    icon: 'chart-network',
    heading: 'Research & Methods',
    items: [
      'Stakeholder Workshops',
      'Contextual Inquiry',
      'User Journey Mapping',
      'UI Pattern Analysis, Usability Testing',
    ],
  },
  {
    icon: 'laptop-code',
    heading: 'Technologies & Frameworks',
    items: [
      'HTML5',
      'CSS3/SCSS',
      'JavaScript',
      'Angular/TypeScript',
      'Bootstrap',
      'Git',
      'API Integration',
    ],
  },
  {
    icon: 'pen-nib',
    heading: 'Tools & Software',
    items: [
      'Figma',
      'Miro, FigJam',
      'VS Code',
      'Adobe Creative Cloud (Photoshop, Illustrator, InDesign, After Effects)',
      'SketchUp (Basic)',
    ],
  },
  {
    icon: 'cubes',
    heading: 'Emerging Tech',
    items: [
      'Generative AI Integration',
      'Conversational Design Architecture',
      'AI-Driven Feature Logic',
    ],
  },
  {
    icon: 'earth-americas',
    heading: 'Languages',
    items: [
      'English (Native)',
      'Spanish (Professional Working Proficiency)',
      'Portuguese (Limited Working Proficiency)',
      'French (Elementary Proficiency)',
    ],
  },
];

/* ── Hero content ────────────────────────────────────────────────────── */

const bioParagraphs = [
  {
    heading: 'Experiential Design & Systemic Hierarchy',
    body: 'I operate at the intersection of experience design, systemic visual hierarchy, and frontend execution. As a multidisciplinary design leader, my passion is stepping into complex, data-dense environments to architect the visual systems, intuitive layouts, and cross-functional alignments required to unify digital and physical experiences. By mapping complex information architecture and establishing unified visual standards, I transform chaotic ecosystems into elegant, scalable, and navigable user experiences.',
  },
  {
    heading: 'Cross-Disciplinary Translation & Execution',
    body: 'Throughout my career, I have acted as a critical translator between creative vision and technical realization—ensuring that deep structural empathy directly informs production-ready interfaces. From orchestrating holistic, large-scale environmental graphics, wayfinding, and exhibition layouts to engineering responsive digital design systems, I focus on establishing unified visual standards and driving design velocity. Whether scaling core components or directing high-visibility layouts, I bridge the gap between form, space, and technical execution.',
  },
  {
    heading: 'Multi-Dimensional Creative Perspective',
    body: 'My approach to form and space is shaped by a unique journey: I have hand-rendered detailed scientific taxonomy and conducted field research in the Amazon basin, diagnosed complex customer workflows at Apple, and directed a Latin dance company that performed internationally. These diverse experiences laid a permanent foundation in visual narrative, agile problem-solving, and empathetic mentorship. Today, whether I am mapping complex information architecture, aligning global stakeholders, or designing for physical spaces, I bring a deeply human-centered, multi-dimensional design perspective.',
  },
];

const smallPhotos = [
  { src: '/images/isa-letterpress.jpg', alt: 'Letterpress printing' },
  { src: '/images/isa-crochet.jpg', alt: 'Crochet craft work' },
  { src: '/images/isa-wildlife-research.jpg', alt: 'Wildlife research in the field' },
  { src: '/images/isa-manatee.jpg', alt: 'Manatee research' },
];

export default function Home() {
  return (
    <main className="flex-1">

      {/* ── Hero section ──────────────────────────────────────────────── */}
      <section className="container-inner py-6 sm:py-9">
        {/*
          Layout:
            xs          → stacked column — full-width square photo, then text block
            sm (640px)  → flex row — 130×130 px photo left, text fills right
            lg (1024px) → flex row — 293×293 px photo left, text fills right
                          H1 / H6 sizes bump automatically via globals.css
                          responsive CSS variables (no extra classes needed)
        */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start lg:gap-9 xl:w-10/12 xl:mx-auto 2xl:w-9/12 ">

          {/* ── Profile photo ─────────────────────────────────────────── */}
          {/*
            xs: w-full, aspect-square → fills container width, height = width
            sm: fixed 130 px square, shrink-0 so it doesn't flex-compress
            lg: fixed 293 px square
          */}
          <div className="relative w-full aspect-square sm:w-[130px] lg:w-[293px] sm:shrink-0 rounded-sm overflow-hidden">
            <Image
              src="/images/isa-profile.jpg"
              alt="Isadora Colmenares"
              fill
              sizes="(min-width: 1024px) 293px, (min-width: 640px) 130px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* ── Text column ───────────────────────────────────────────── */}
          {/*
            gap-9 (36px) between the three content blocks matches
            Figma's gap-[var(--36,36px)] on the text column container.
          */}
          <div className="flex flex-col gap-9 min-w-0 flex-1">

            {/* Name + accent divider + sub-heading */}
            <div className="flex flex-col gap-4">
              {/* gap-3 (12px) between H1 and divider matches Figma gap-[var(--12,12px)] */}
              <div className="flex flex-col gap-3">
                {/*
                  H1 inherits Montserrat SemiBold + responsive size from globals.css:
                    mobile  → 2rem   (32px)
                    lg+     → 3.75rem (60px)
                  leading-none keeps it tight as per Figma lineHeight: 100
                */}
                <h1 className="leading-none">Isadora Colmenares</h1>

                {/* Accent divider — Figma "divider short" component (node 52:320) */}
                <DividerShort />
              </div>

              {/*
                Subheading: Karla Medium (500), para-large (18px), tight leading.
                font-medium overrides the base p { font-weight: 400 }.
              */}
              <p className="font-body font-medium text-para-lg text-text-primary leading-tight">
                Experience Design Leader and Engineer based in New York City
              </p>
            </div>

            {/* 3 cross-heading + paragraph blocks */}
            {/* gap-6 (24px) between blocks = Figma gap-[var(--24,24px)] */}
            <div className="flex flex-col gap-6">
              {bioParagraphs.map(({ heading, body }) => (
                <div key={heading} className="flex flex-col gap-2">
                  {/*
                    H6 inherits Montserrat SemiBold + responsive size:
                      mobile  → 1.125rem (18px)
                      lg+     → 1.25rem  (20px)
                  */}
                  <h6>{heading}</h6>
                  <p className="text-text-primary">{body}</p>
                </div>
              ))}
            </div>

            {/* 4 smaller activity/life photos */}
            {/*
              xs      → 2×2 grid, gap-4 (16px)
              sm+     → 4-column row, gap-6 (24px)
              Each cell is aspect-square with object-cover.
            */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {smallPhotos.map(({ src, alt }) => (
                <div
                  key={src}
                  className="relative aspect-square rounded-sm overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Core Skills & Expertise ───────────────────────────────────── */}
      {/*
        Fluid section: full-viewport-width bg-gray-00 band.
        Content sits inside container-inner (responsive max-width),
        then narrows to 10/12 at xl matching the hero column width.

        Grid columns:
          xs      → 1 col  (stacked)
          sm/md   → 2 cols
          lg+     → 3 cols
        Gap: 36px column / 24px row (matches Figma gap-x/gap-y spec)
        Padding: 36px top/bottom xs–md, 48px lg+
      */}
      <div className="w-full bg-gray-00 py-9 lg:py-12">
        <div className="container-inner">
          <div className="xl:w-10/12 xl:mx-auto flex flex-col gap-9">

            {/* Section heading + accent divider */}
            <div className="flex flex-col gap-3">
              <h2 className="leading-none">Core Skills &amp; Expertise</h2>
              <DividerShort />
            </div>

            {/* 6-card skill grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-6">
              {coreSkills.map(({ icon, heading, items }) => (
                <div key={heading} className="flex flex-col gap-3">
                  {/* FA7 Sharp Thin icon — core purple, 40px */}
                  <i
                    className={`fa-sharp fa-thin fa-${icon} text-[40px] leading-none text-core-purple`}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-2 text-text-primary">
                    <h6>{heading}</h6>
                    <ul className="list-disc pl-6">
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </main>
  );
}
