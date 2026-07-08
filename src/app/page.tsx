import ProgressiveImage from '@/components/ProgressiveImage';
import DividerShort from '@/components/DividerShort';
import Button from '@/components/Button';
import Avatar from '@/components/Avatar';

/* -- Core Skills data ------------------------------------------------- */

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
      'VS Code, Cursor (Claude)',
      'Adobe Creative Cloud (Photoshop, Illustrator, InDesign, After Effects)',
      'AutoCAD, SketchUp (Basic)',
    ],
  },
  {
    icon: 'cubes',
    heading: 'Emerging Tech',
    items: [
      'AI-Assisted Development',
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

/* -- Work Experience data --------------------------------------------- */

/*
  Em-space (U+2003) replaces the two regular spaces flanking " | " so the
  separator reads as a proper typographic pause, per the design spec.
*/
const EM = '\u2003';

const workExperience = [
  {
    logo: '/images/logo-amnh.png',
    logoAlt: 'American Museum of Natural History',
    role: 'Contract Experience Designer',
    company: 'American Museum of Natural History',
    period: `May 2026 – Present${EM}|${EM}New York, NY`,
    bullets: [
      'Partnered with curatorial leadership to rebrand the Arachnology Lab / Scorpion Systematics Research Group and rearchitect their entire online presence.',
      'Engineered a custom, searchable directory system to organize deep historical records and academic profiles.',
      'Devised distinct sub-branding and interface guardrails to establish an independent identity from the primary museum site.',
    ],
  },
  {
    logo: '/images/logo-korn-ferry.png',
    logoAlt: 'Korn Ferry',
    role: 'Experience Design Manager',
    company: 'Korn Ferry',
    period: `January 2026 – June 2026${EM}|${EM}New York, NY`,
    bullets: [
      'Led and supported a distributed team of 8 experience designers across diverse career tracks.',
      'Secured a singular creative vision for high-visibility data layouts across a large, decentralized group of internal executive stakeholders.',
      'Scaled core design system components to support emerging generative AI features, including AI Talent Search agents.',
    ],
  },
  {
    logo: '/images/logo-verizon.png',
    logoAlt: 'Verizon',
    role: 'Contract Experience Designer',
    company: 'Verizon',
    period: `October 2025 – January 2026${EM}|${EM}New York, NY`,
    bullets: [
      'Contributed modular Figma components to the Verizon Design System engineered for advanced conversational prototyping.',
      'Designed interactive customer pathways showing responsive workflows between automated AI and live support.',
    ],
  },
  {
    logo: '/images/logo-ubs.png',
    logoAlt: 'UBS',
    role: 'UX Design Lead',
    company: 'UBS',
    period: `April 2024 – September 2025${EM}|${EM}New York, NY`,
    bullets: [
      'Collaborated with cross-functional global leads to scale the core enterprise design system across recruiting and logistics ecosystems.',
      'Managed a distributed team of 9 experience designers across AMER, EMEA, and APAC regions.',
    ],
  },
  {
    logo: '/images/logo-aon.png',
    logoAlt: 'Aon',
    role: 'Principal UX Designer & UX Engineering Lead',
    company: 'Aon',
    period: `August 2019 – April 2024${EM}|${EM}New York, NY`,
    bullets: [
      'Refactored legacy talent assessments into a performant, mobile-first single-page application using Angular and TypeScript.',
      'Coded robust, highly flexible components using design variables to allow automated, instant client sub-branding.',
      'Redesigned a study materials microsite utilizing HTML/CSS/JS, directly driving $620K+ in revenue.',
    ],
  },
  {
    logo: '/images/logo-cii.png',
    logoAlt: 'Cambridge Innovation Institute',
    role: 'Senior Designer',
    company: 'Cambridge Innovation Institute',
    period: `February 2016 – August 2019${EM}|${EM}Boston, MA`,
    bullets: [
      'Orchestrated the comprehensive visual and environmental design ecosystem for over 60 annual international biotech and life sciences conferences.',
      'Designed large-scale on-site entryway arches, wayfinding signage, and responsive web event prototypes.',
      'Programmed automated workflow scripts using Adobe ExtendScript and InDesign APIs to stream live databases into print layouts.',
    ],
  },
  {
    logo: '/images/logo-inpa.png',
    logoAlt: 'National Institute for Amazonian Research (INPA)',
    role: 'Graphic Designer',
    company: 'National Institute for Amazonian Research (INPA)',
    period: `February 2013 – August 2016${EM}|${EM}Manaus, Brazil`,
    bullets: [
      'Developed website prototypes, visual brand identities, and staging layouts for an international ornithology congress.',
      'Hand-rendered detailed scientific illustrations, taxonomy figures, and complex biogeographical maps for graduate publications.',
    ],
  },
];

/* -- Key Accolades data ----------------------------------------------- */

const accolades = [
  {
    icon: 'award',
    title: 'Inhouse Design Award',
    org: 'Graphic Design USA',
    description:
      "Awarded for data-dense infographic of Cambridge Innovation Institute's Discovery on Target pharmaceutical conference.",
  },
  {
    icon: 'ranking-star',
    title: 'Platinum Star Award',
    org: 'Aon',
    description:
      'Recognized for delivering exceptional project work and exemplifying Aon United behavior in cross team support.',
  },
];

/* -- Hero content ------------------------------------------------------ */

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
  { src: '/images/isa-manatee.jpg', alt: 'Manatee research' },
  { src: '/images/isa-wildlife-research.jpg', alt: 'Wildlife research in the field' },
  { src: '/images/isa-crochet.jpg', alt: 'Crochet craft work' },
];

/* -- Recommendations data --------------------------------------------- */

const recommendations = [
  {
    quote:
      '\u201cIsadora brought a formidable range of UX and front-end development knowledge; her collaboration with content providers, marketers, engineers, and designers assured a project\u2019s success. Major initiatives were successful due to her involvement. Unfailingly generous with her time and willingness to assist others, we all benefited from Isadora\u2019s excellent energy, humor, and creative nature.\u201d',
    source: 'Tom Norton, Design Director at Cambridge Innovation Institute',
    avatar: '/images/avatar-tom-norton.jpg',
    avatarAlt: 'Tom Norton',
  },
  {
    quote:
      '\u201cI was always impressed by her diligence and steady leadership as a UX Manager. She did a great job keeping projects organized and creating a collaborative environment where people could do their best work. Isa combines strong UX expertise with clear communication and thoughtful management.\u201d',
    source: 'Meera Butler, Senior Director Product Management at Korn Ferry',
    avatar: '/images/avatar-meera-butler.jpg',
    avatarAlt: 'Meera Butler',
  },
  {
    quote:
      '\u201cI was impressed by her strong system thinking and deep understanding of design systems. She played a key role in translating foundational components into scalable, application-level patterns that enabled her team to deliver high-quality and consistent design outcomes. She continually brought in fresh ideas and best practices from her own learning.\u201d',
    source: 'Pei-Yu Shen, Design System Lead at UBS',
    avatar: '/images/avatar-pei-yu-shen.jpg',
    avatarAlt: 'Pei-Yu Shen',
  },
  {
    quote:
      '\u201cIsadora went above and beyond, found solutions to complex components, filled in when others were sick, and truly was there for any change or improvement. Her work included an intense ramp up on a library that was complicated and she dove right into it and was more than dedicated. Her attention to detail is fantastic and her documentation process was so helpful.\u201d',
    source: 'Kate Baillargeon, Senior UX Designer for Conversational AI at Verizon',
    avatar: '/images/avatar-kate-baillargeon.jpg',
    avatarAlt: 'Kate Baillargeon',
  },
  {
    quote:
      '\u201cI observed how glowingly her reports speak of her and credit her leadership to their success. I rarely speak with designers who have such a deep understanding of users with disabilities and real empathy for their needs. Isadora made a positive impact on our culture with her warm and engaging leadership style. She identified process improvements to increase efficiency and business value.\u201d',
    source: 'Michellanne Li, Accessibility Product Designer at Aon',
    avatar: '/images/avatar-michellanne-li.jpg',
    avatarAlt: 'Michellanne Li',
  },
  {
    quote:
      '\u201cAs a new employee, Isadora worked on a complex, multi-screen animation. Her creative input and attention to detail were matched by her speed and efficiency in completing the program on time and on budget. I enjoyed working with Isadora. Her talents, good nature, and adaptability will be a measurable asset on any project she works on.\u201d',
    source: 'Robert Pascarella, Creative Director at Cramer Productions',
    avatar: '/images/avatar-robert-pascarella.jpg',
    avatarAlt: 'Robert Pascarella',
  },
];

export default function Home() {
  return (
    /*
      id="main-content" is the skip-to-content target defined in layout.tsx.
      WCAG 2.4.1 (Level A).
    */
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none scroll-mt-12">

      {/* -- Hero section ------------------------------------------------ */}
      {/*
        aria-labelledby ties this landmark to the page's H1 so screen reader
        users navigating by region/landmark can identify it.
        WCAG 1.3.1 / 2.4.6 (Level AA).
      */}
      <section aria-labelledby="hero-heading" className="container-inner py-6 sm:py-9 grid grid-cols-12">
        {/*
          Layout:
            xs          → stacked column — full-width square photo, then text block
            sm (640px)  → flex row — 130×130 px photo left, text fills right
            lg (1024px) → flex row — 293×293 px photo left, text fills right
                          H1 / H6 sizes bump automatically via globals.css
                          responsive CSS variables (no extra classes needed)
          Column placement:
            xs–lg  → col-span-12  (full container width)
            xl+    → col-start-2  col-span-10  (centered 10/12)
        */}
        <div className="col-span-12  xl:col-start-2 xl:col-span-10 2xl:col-start-3 2xl:col-span-9 flex flex-col gap-6 sm:flex-row sm:items-start lg:gap-9">

          {/* -- Profile photo ------------------------------------------- */}
          {/*
            xs: w-full, aspect-square → fills container width, height = width
            sm: fixed 130 px square, shrink-0 so it doesn't flex-compress
            lg: fixed 293 px square
          */}
          <div className="relative w-full aspect-square sm:w-[130px] lg:w-[293px] sm:shrink-0 rounded-sm overflow-hidden">
            <ProgressiveImage
              src="/images/isa-profile.jpg"
              alt="Isadora Colmenares"
              fill
              sizes="(min-width: 1024px) 293px, (min-width: 640px) 130px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* -- Text column --------------------------------------------- */}
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
                <h1 id="hero-heading">Isadora Colmenares</h1>

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
                  <ProgressiveImage
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

      {/* -- Core Skills & Expertise ------------------------------------- */}
      {/*
        Fluid section: full-viewport-width bg-gray-00 band.
        Content sits inside container-inner (responsive max-width),
        then narrows to 10/12 at 2xl matching the hero column width.

        Grid columns:
          xs      → 1 col  (stacked)
          sm/md   → 2 cols
          lg+     → 3 cols
        Gap: 36px column / 24px row (matches Figma gap-x/gap-y spec)
        Padding: 36px top/bottom xs–md, 48px lg+
      */}
      <section aria-labelledby="skills-heading" className="w-full bg-gray-00 py-9 lg:py-12">
        <div className="container-inner grid grid-cols-12">
          {/*
            Column placement mirrors hero:
              xs–lg  → col-span-12
              xl+    → col-start-3  col-span-9 (centered)
          */}
          <div className="col-span-12 xl:col-start-2 xl:col-span-10 2xl:col-start-3 2xl:col-span-9 flex flex-col gap-9">

            {/* Section heading + accent divider */}
            <div className="flex flex-col gap-3">
              <h2 id="skills-heading">Core Skills &amp; Expertise</h2>
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
                        <li key={item} className="text-balance">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* -- Work Experience Highlights ------------------------------------ */}
      {/*
        White-background section, same container-inner + 10/12 strategy
        as the hero. Each entry: 48×48 company logo beside a text block.
        Date/location line uses text-secondary; all other text is primary.
        Buttons at the bottom — outline variant, default size.
      */}
      <section aria-labelledby="work-exp-heading" className="container-inner py-9 lg:py-12 grid grid-cols-12">
        {/*
          Column placement narrows progressively:
            xs–md  → col-span-12                    (full width)
            lg     → col-start-2  col-span-10       (2-col margin right side)
            xl+    → col-start-3  col-span-7        (5-col margin right side)
          NOTE: lg:col-start-2 is required — without it, col-span-10 starts
          at column 1 and is left-aligned rather than centred.
        */}
        <div className="col-span-12 lg:col-span-10 xl:col-start-2 xl:col-span-8 2xl:col-start-3 2xl:col-span-7 flex flex-col gap-9">

          {/* Section heading + accent divider */}
          <div className="flex flex-col gap-3">
            <h2 id="work-exp-heading">Work Experience Highlights</h2>
            <DividerShort />
          </div>

          {/*
            Experience entries — <ul>/<li> communicates list cardinality to
            screen readers ("7 items"). list-none removes default bullets.
            WCAG 1.3.1 (Level A): Info and Relationships.
          */}
          <ul className="flex flex-col gap-6 list-none">
            {workExperience.map(({ logo, logoAlt, role, company, period, bullets }) => (
              <li key={`${company}-${role}`} className="flex gap-4 items-start">

                {/* Company logo — fixed 48×48 px */}
                <div className="relative w-12 h-12 shrink-0 rounded-sm overflow-hidden">
                  <ProgressiveImage
                    src={logo}
                    alt={logoAlt}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                {/* Text block */}
                <div className="flex flex-col gap-2 min-w-0 flex-1">
                  {/* Title group: role → company → date/location */}
                  <div className="flex flex-col gap-1">
                    <h6>{role}</h6>
                    <p className="font-body font-medium text-para-lg text-text-primary leading-normal">
                      {company}
                    </p>
                    <p className="font-body text-para text-text-secondary leading-normal">
                      {period}
                    </p>
                  </div>
                  {/* Bullet points */}
                  <ul className="list-disc pl-6 text-text-primary">
                    {bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>

              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 sm:flex-wrap">
            <Button
              variant="outline"
              icon="linkedin"
              iconVariant="brands"
              label="View LinkedIn"
              href="https://www.linkedin.com/in/isadoracolmenares"
              target="_blank"
              rel="noopener noreferrer"
              opensInNewTab
              fullWidth
              className="sm:w-auto"
            />
            <Button
              variant="outline"
              icon="download"
              label="Download Full CV"
              href="https://www.dropbox.com/scl/fi/v8etkykw5q286jeq4wgr0/isadora-colmenares-cv.pdf?dl=1"
              target="_blank"
              rel="noopener noreferrer"
              opensInNewTab
              fullWidth
              className="sm:w-auto"
            />
          </div>

        </div>
      </section>

      {/* -- Key Accolades ----------------------------------------------- */}
      {/*
        Fluid gray-00 band — same background and icon style as Core Skills.
        Column placement:
          xs–lg  → col-span-12        (full width)
          xl+    → col-start-2  col-span-10
        Card placement inside content container:
          xs     → col-span-12  (stacked)
          sm+    → col-span-6   (2 per row, equal halves)
      */}
      <section aria-labelledby="accolades-heading" className="w-full bg-gray-00 py-9 lg:py-12">
        <div className="container-inner grid grid-cols-12">
          <div className="col-span-12 xl:col-start-2 xl:col-span-10 2xl:col-start-3 2xl:col-span-9 flex flex-col gap-9">

            {/* Section heading + accent divider */}
            <div className="flex flex-col gap-3">
              <h2 id="accolades-heading">Key Accolades</h2>
              <DividerShort />
            </div>

            {/* Award cards — 1-up xs, 2-up sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-9 gap-y-9">
              {accolades.map(({ icon, title, org, description }) => (
                <div key={title} className="flex flex-col gap-3">
                  <i
                    className={`fa-sharp fa-thin fa-${icon} text-[40px] leading-none text-core-purple`}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                      <h6>{title}</h6>
                      <p className="font-body font-medium text-para-lg text-gray-70 leading-normal">
                        {org}
                      </p>
                    </div>
                    <p className="text-text-primary">{description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* -- Recommendations ------------------------------------------------- */}
      {/*
        White-background section — follows Key Accolades gray band.
        Column placement mirrors the hero / Core Skills pattern:
          xs–lg  → col-span-12
          xl+    → col-start-2  col-span-10

        Quote grid: 2 columns at sm–lg, 3 columns at xl+, gap-9 (36px) x/y.

        Hanging punctuation strategy (opening " of each quote):
          • Chrome / Firefox: text-indent / padding-inline-start fallback
            via the `hanging-open-quote` utility in globals.css.
          • Safari: native `hanging-punctuation: first` via @supports override.
        The opening " is embedded in the quote string; the utility handles
        its typographic position without a separate DOM element.
      */}
      <section aria-labelledby="recommendations-heading" className="container-inner py-9 lg:py-12 grid grid-cols-12">
        <div className="col-span-12 xl:col-start-2 xl:col-span-10 2xl:col-start-3 2xl:col-span-9 flex flex-col gap-9">

          {/* Section heading + accent divider */}
          <div className="flex flex-col gap-3">
            <h2 id="recommendations-heading">Recommendations</h2>
            <DividerShort />
          </div>

          {/*
            Quote grid — 1-up xs, 2-up sm+, 3-up 2xl.
            Using explicit column-count grids (not grid-cols-12) avoids the
            11 × 36px gap overhead that would force the grid wider than xs
            viewports and cause horizontal overflow.

            Each card is a <blockquote> with a <footer> for attribution.
            WCAG 1.3.1 (Level A): <blockquote>/<footer> conveys the quoted
            content structure to AT correctly.

            Avatar is marked decorative because the source <p> already names
            the person — avoids AT reading the name twice.

            hanging-open-quote: the " at the start hangs outside the text box.
            pl-[0.4em] on <footer> aligns the avatar's left edge with the quote
            body text (matches the padding-inline-start offset).
            See globals.css for the full cross-browser strategy.
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-x-9 gap-y-9">
            {recommendations.map(({ quote, source, avatar, avatarAlt }) => (
              <blockquote
                key={source}
                className="flex flex-col gap-3"
              >
                <p className="hanging-open-quote text-text-primary">{quote}</p>
                <footer className="flex gap-2 items-center pl-[0.4em]">
                  <Avatar src={avatar} alt={avatarAlt} size={67} decorative />
                  <p className="flex-1 min-w-0 text-text-secondary text-balance">{source}</p>
                </footer>
              </blockquote>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
