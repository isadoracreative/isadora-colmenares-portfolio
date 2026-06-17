import { useState } from "react";
import { Menu, X } from "lucide-react";
import LinkedInSVG from "../imports/Icon/index";
import DownloadSVG from "../imports/Icon-1/index";
import AwardIcon from "../imports/Award/index";
import RankingStarIcon from "../imports/RankingStar/index";
import SignPost from "../imports/SignPost/index";
import ChartNetwork from "../imports/ChartNetwork/index";
import LaptopCode from "../imports/LaptopCode/index";
import PenNib from "../imports/PenNib/index";
import Cubes from "../imports/Cubes/index";
import EarthAmericas from "../imports/EarthAmericas/index";

import imgProfile from "../imports/ViewportXl2Xl-2/733fa2b13ff47c113210fc4be88ef5dd4828494f.png";
import imgGallery1 from "../imports/ViewportXl2Xl-2/3fb6ca0a4ba3ac0148308654f70382778854a10b.png";
import imgGallery2 from "../imports/ViewportXl2Xl-2/7f524c264af485602a19f2336dc0146fe1db14c8.png";
import imgGallery3 from "../imports/ViewportXl2Xl-2/11c627127818b8398fd7e571e9bda028e04b120a.png";
import imgGallery4 from "../imports/ViewportXl2Xl-2/0561d50eca3edf9feee419ff8676cab4f0ee9060.png";
import imgAvatar1 from "../imports/ViewportXl2Xl-2/c4734a8be37f42086922c5b886f874d8c58e2bc7.png";
import imgAvatar2 from "../imports/ViewportXl2Xl-2/6a578ae013fd1bed26c8675b9dedbfc3991cbd1a.png";
import imgAvatar3 from "../imports/ViewportXl2Xl-2/bcb69ed1b6fb2d2ada3fb64dbc243faa2abb0498.png";
import imgAvatar4 from "../imports/ViewportXl2Xl-2/c6f09fe903df3ee0a3a2f1c9f50124613176d6ac.png";
import imgAvatar5 from "../imports/ViewportXl2Xl-2/282a578373ff49899f645667a51061713d95ad3f.png";
import imgAvatar6 from "../imports/ViewportXl2Xl-2/f292185dd9df25681733caf427837a4deb2e0745.png";
import logoAMNH from "../imports/american_museum_of_natural_history_logo.jpeg";
import logoKornFerry from "../imports/kornferry_logo.jpeg";
import logoUBS from "../imports/ubs_logo.jpeg";
import logoAon from "../imports/aon_logo.jpeg";
import logoVerizon from "../imports/verizon_logo.jpeg";
import logoCII from "../imports/1631323268473.jpeg";
import logoINPA from "../imports/1631305511762.jpeg";

function DividerShort() {
  return (
    <div className="flex items-center w-full">
      <div className="h-0 max-w-[72px] flex-1 min-w-px relative">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 1">
            <line stroke="#06D6A0" x2="72" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ title, large = false }: { title: string; large?: boolean }) {
  return (
    <div className="flex flex-col gap-3 items-start w-full">
      <p
        className={`[word-break:break-word] leading-normal not-italic text-[#222526] w-full ${large ? "text-[24px] lg:text-[44px]" : "text-[22px] lg:text-[32px]"}`}
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
      >
        {title}
      </p>
      <DividerShort />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white" style={{ borderBottom: '1px solid #d4d8d8' }}>
      {/* xs / sm-md: hamburger — 48px tall, 16px left, 12px right */}
      <div className="lg:hidden flex items-center h-[48px] pl-[16px] pr-[12px]">
        <div className="flex flex-1 items-center justify-between h-full">
          <span
            className="text-[14px] text-[#222526] whitespace-nowrap leading-normal"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
          >
            Isadora Colmenares
          </span>
          <button
            className="flex items-center justify-center w-[32px] h-full cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={16} color="#222526" /> : <Menu size={16} color="#222526" />}
          </button>
        </div>
      </div>

      {/* xs/sm-md dropdown */}
      {open && (
        <div
          className="lg:hidden bg-white flex flex-col gap-[12px] items-start px-[16px] py-[24px]"
          style={{ borderTop: '1px solid #d4d8d8' }}
        >
          {["About", "Projects"].map((label) => (
            <a
              key={label}
              href="#"
              className="text-[14px] text-[#222526] underline leading-normal"
              style={{ fontFamily: "'Karla', sans-serif", fontWeight: 400 }}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      {/* lg+: full nav — 48px tall, 36px left, 24px right */}
      <div className="hidden lg:flex items-center h-[48px] pl-[36px] pr-[24px]" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div className="flex flex-1 items-center justify-between h-full">
          <span
            className="text-[16px] text-[#222526] whitespace-nowrap leading-normal"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
          >
            Isadora Colmenares
          </span>
          <nav className="flex items-center h-full">
            {(["About", "Projects"] as const).map((label) => (
              <div key={label} className="relative flex items-center justify-center px-[16px] h-full cursor-pointer">
                {label === "About" && (
                  <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ borderBottom: '3px solid #06d6a0' }} />
                )}
                <span
                  className="text-[14px] text-[#222526] whitespace-nowrap leading-normal"
                  style={{ fontFamily: "'Karla', sans-serif", fontWeight: 400 }}
                >
                  {label}
                </span>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
        {/* Profile photo: xs=full-width square, sm=130px, lg=293px, xl=275px */}
        <div className="relative rounded-[2px] shrink-0 w-full max-w-[360px] aspect-square sm:w-[130px] sm:h-[130px] sm:max-w-none lg:w-[293px] lg:h-[293px] xl:w-[275px] xl:h-[275px] sm:aspect-auto overflow-hidden">
          <img
            alt="Isadora Colmenares"
            className="absolute inset-0 w-full h-full object-cover rounded-[2px]"
            src={imgProfile}
          />
        </div>

        <div className="flex flex-col gap-9 flex-1 min-w-0 justify-center">
          {/* Name + tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <p
                className="[word-break:break-word] leading-normal not-italic text-[#222526] text-[32px] lg:text-[60px]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
              >
                Isadora Colmenares
              </p>
              <DividerShort />
            </div>
            <p
              className="[word-break:break-word] leading-normal text-[#222526] text-[18px]"
              style={{ fontFamily: "'Karla', sans-serif", fontWeight: 500 }}
            >
              Experience Design Leader and Engineer based in New York City
            </p>
          </div>

          {/* About subsection */}
          <div className="flex flex-col gap-6">

            <div className="flex flex-col gap-6">
              {[
                {
                  title: "Experiential Design & Systemic Hierarchy",
                  body: "I operate at the intersection of experience design, systemic visual hierarchy, and frontend execution. As a multidisciplinary design leader, my passion is stepping into complex, data-dense environments to architect the visual systems, intuitive layouts, and cross-functional alignments required to unify digital and physical experiences. By mapping complex information architecture and establishing unified visual standards, I transform chaotic ecosystems into elegant, scalable, and navigable user experiences.",
                },
                {
                  title: "Cross-Disciplinary Translation & Execution",
                  body: "Throughout my career, I have acted as a critical translator between creative vision and technical realization—ensuring that deep structural empathy directly informs production-ready interfaces. From orchestrating holistic, large-scale environmental graphics, wayfinding, and exhibition layouts to engineering responsive digital design systems, I focus on establishing unified visual standards and driving design velocity. Whether scaling core components or directing high-visibility layouts, I bridge the gap between form, space, and technical execution.",
                },
                {
                  title: "Multi-Dimensional Creative Perspective",
                  body: "My approach to form and space is shaped by a unique journey: I have hand-rendered detailed scientific taxonomy and conducted field research in the Amazon basin, diagnosed complex customer workflows at Apple, and directed a Latin dance company that performed internationally. These diverse experiences laid a permanent foundation in visual narrative, agile problem-solving, and empathetic mentorship. Today, whether I am mapping complex information architecture, aligning global stakeholders, or designing for physical spaces, I bring a deeply human-centered, multi-dimensional design perspective.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="flex flex-col gap-2">
                  <p
                    className="[word-break:break-word] leading-normal not-italic text-[#222526] text-[18px] lg:text-[20px]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
                  >
                    {title}
                  </p>
                  <p
                    className="[word-break:break-word] leading-normal text-[#222526] text-[16px]"
                    style={{ fontFamily: "'Karla', sans-serif", fontWeight: 400 }}
                  >
                    {body}
                  </p>
                </div>
              ))}

              {/* Gallery: xs=2x2 grid, sm+=4-col row */}
              <div className="grid grid-cols-2 sm:flex sm:flex-row gap-4">
                <div className="relative rounded-[2px] aspect-square sm:flex-1 sm:min-w-0 overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden rounded-[2px]">
                    <img alt="" className="absolute h-[148.93%] left-0 max-w-none top-[-29.14%] w-[111.7%]" src={imgGallery1} />
                  </div>
                </div>
                <div className="relative rounded-[2px] aspect-square sm:flex-1 sm:min-w-0 overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden rounded-[2px]">
                    <img alt="" className="absolute h-[147.39%] left-[-22.81%] max-w-none top-[-27.54%] w-[143.87%]" src={imgGallery2} />
                  </div>
                </div>
                <div className="relative rounded-[2px] aspect-square sm:flex-1 sm:min-w-0 overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden rounded-[2px]">
                    <img alt="" className="absolute h-[107.78%] left-[-15.96%] max-w-none top-0 w-[144.36%]" src={imgGallery3} />
                  </div>
                </div>
                <div className="relative rounded-[2px] aspect-square sm:flex-1 sm:min-w-0 overflow-hidden">
                  <img alt="" className="absolute inset-0 w-full h-full object-cover rounded-[2px]" src={imgGallery4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ICON_HEIGHT = 40;

const skillGroups = [
  {
    Icon: SignPost,
    vb: [37.5, 40],
    title: "Experience & Spatial Design",
    items: ["Information Architecture", "Spatial Storytelling", "Environmental Typography", "Wayfinding", "Exhibition Design", "Identity Systems"],
  },
  {
    Icon: ChartNetwork,
    vb: [50, 40],
    title: "Research & Methods",
    items: ["Stakeholder Workshops", "Contextual Inquiry", "User Journey Mapping", "UI Pattern Analysis, Usability Testing"],
  },
  {
    Icon: LaptopCode,
    vb: [50, 35],
    title: "Technologies & Frameworks",
    items: ["HTML5", "CSS3/SCSS", "JavaScript", "Angular/TypeScript", "Bootstrap", "Git", "API Integration"],
  },
  {
    Icon: PenNib,
    vb: [41.25, 41.25],
    title: "Tools & Software",
    items: ["Figma", "Miro, FigJam", "VS Code", "Adobe Creative Cloud (Photoshop, Illustrator, InDesign, After Effects)", "SketchUp (Basic)"],
  },
  {
    Icon: Cubes,
    vb: [40.0781, 40.625],
    title: "Emerging Tech",
    items: ["Generative AI Integration", "Conversational Design Architecture", "AI-Driven Feature Logic"],
  },
  {
    Icon: EarthAmericas,
    vb: [40, 40],
    title: "Languages",
    items: ["English (Native)", "Spanish (Professional Working Proficiency)", "Portuguese (Limited Working Proficiency)", "French (Elementary Proficiency)"],
  },
];

function SkillsSection() {
  return (
    <div className="w-full bg-[#f7f8f8] py-9 lg:py-12">
      <div className="ic mx-auto flex flex-col gap-9">
        <SectionHeading title="Core Skills & Expertise" large />
        <div className="[word-break:break-word] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-6">
          {skillGroups.map(({ Icon, vb, title, items }) => (
            <div key={title} className="flex flex-col gap-3 items-start self-start">
              <div className="relative shrink-0" style={{ height: ICON_HEIGHT, width: ICON_HEIGHT * (vb[0] / vb[1]) }}>
                <Icon />
              </div>
              <div className="flex flex-col gap-2">
                <p
                  className="leading-normal not-italic text-[#222526] text-[18px] lg:text-[20px]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
                >
                  {title}
                </p>
                <ul className="list-disc text-[#222526] text-[16px]" style={{ fontFamily: "'Karla', sans-serif", fontWeight: 400 }}>
                  {items.map((item) => (
                    <li key={item} className="ms-6 leading-normal">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const workExperience = [
  {
    logo: logoAMNH,
    title: "Contract Experience Designer",
    company: "American Museum of Natural History",
    period: "May 2026 – Present  |  New York, NY",
    bullets: [
      "Partnered with curatorial leadership to rebrand the Arachnology Lab / Scorpion Systematics Research Group and rearchitect their entire online presence.",
      "Engineered a custom, searchable directory system to organize deep historical records and academic profiles",
      "Devised distinct sub-branding and interface guardrails to establish an independent identity from the primary museum site.",
    ],
  },
  {
    logo: logoKornFerry,
    title: "Experience Design Manager",
    company: "Korn Ferry",
    period: "January 2026 – June 2026  |  New York, NY",
    bullets: [
      "Led and supported a distributed team of 8 experience designers across diverse career tracks.",
      "Secured a singular creative vision for high-visibility data layouts across a large, decentralized group of internal executive stakeholders.",
      "Scaled core design system components to support emerging generative AI features, including AI Talent Search agents.",
    ],
  },
  {
    logo: logoVerizon,
    title: "Contract Experience Designer",
    company: "Verizon",
    period: "October 2025 – January 2026  |  New York, NY",
    bullets: [
      "Contributed modular Figma components to the Verizon Design System engineered for advanced conversational prototyping.",
      "Designed interactive customer pathways showing responsive workflows between automated AI and live support.",
    ],
  },
  {
    logo: logoUBS,
    title: "UX Design Lead",
    company: "UBS",
    period: "April 2024 – September 2025  |  New York, NY",
    bullets: [
      "Collaborated with cross-functional global leads to scale the core enterprise design system across recruiting and logistics ecosystems.",
      "Managed a distributed team of 9 experience designers across AMER, EMEA, and APAC regions.",
    ],
  },
  {
    logo: logoAon,
    title: "Principal UX Designer & UX Engineering Lead",
    company: "Aon",
    period: "August 2019 – April 2024  |  New York, NY",
    bullets: [
      "Refactored legacy talent assessments into a performant, mobile-first single-page application using Angular and TypeScript.",
      "Coded robust, highly flexible components using design variables to allow automated, instant client sub-branding.",
      "Redesigned a study materials microsite utilizing HTML/CSS/JS, directly driving $620K+ in revenue.",
    ],
  },
  {
    logo: logoCII,
    title: "Senior Designer",
    company: "Cambridge Innovation Institute",
    period: "February 2016 – August 2019  |  Boston, MA",
    bullets: [
      "Orchestrated the comprehensive visual and environmental design ecosystem for over 60 annual international biotech and life sciences conferences.",
      "Designed large-scale on-site entryway arches, wayfinding signage, and responsive web event prototypes.",
      "Programmed automated workflow scripts using Adobe ExtendScript and InDesign APIs to stream live databases into print layouts.",
    ],
  },
  {
    logo: logoINPA,
    title: "Graphic Designer",
    company: "National Institute for Amazonian Research (INPA)",
    period: "February 2013 – August 2016  |  Manaus, Brazil",
    bullets: [
      "Developed website prototypes, visual brand identities, and staging layouts for an international ornithology congress.",
      "Hand-rendered detailed scientific illustrations, taxonomy figures, and complex biogeographical maps for graduate publications.",
    ],
  },
];

function WorkExperienceSection() {
  return (
    <div className="w-full">
      <div className="ic mx-auto flex flex-col gap-9">
        <SectionHeading title="Work Experience Highlights" large />
        <div className="[word-break:break-word] flex flex-col gap-6">
          {workExperience.map(({ logo, title, company, period, bullets }) => (
            <div key={title + company} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* Logo column — stacked on xs, left column on sm+ */}
              <div className="shrink-0 flex items-start">
                {logo
                  ? <img src={logo} alt={`${company} logo`} width={48} height={48} className="block" style={{ width: 48, height: 48 }} />
                  : <div style={{ width: 48, height: 48 }} />
                }
              </div>
              <div className="flex flex-col gap-2 flex-1 min-w-0">
              <div className="flex flex-col gap-1 leading-normal">
                <p
                  className="text-[#222526] text-[18px] lg:text-[20px] not-italic"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
                >
                  {title}
                </p>
                <p
                  className="text-[#222526] text-[18px]"
                  style={{ fontFamily: "'Karla', sans-serif", fontWeight: 500 }}
                >
                  {company}
                </p>
                <p
                  className="text-[#6a7576] text-[16px] whitespace-pre-wrap"
                  style={{ fontFamily: "'Karla', sans-serif", fontWeight: 400 }}
                >
                  {period}
                </p>
              </div>
              <ul
                className="list-disc text-[#222526] text-[16px]"
                style={{ fontFamily: "'Karla', sans-serif", fontWeight: 400 }}
              >
                {bullets.map((b) => (
                  <li key={b} className="ms-6 leading-normal">{b}</li>
                ))}
              </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://www.linkedin.com/in/isadoracolmenares/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-2 px-4 py-2 rounded-[2px] text-[#3a4041] text-[14px] cursor-pointer w-full sm:w-auto"
            style={{ fontFamily: "'Karla', sans-serif", fontWeight: 400 }}
          >
            <div aria-hidden className="absolute border border-[#06d6a0] border-solid inset-0 pointer-events-none rounded-[2px]" />
            <div className="relative shrink-0" style={{ height: 14, width: 14 }}>
              <LinkedInSVG />
            </div>
            <span>View LinkedIn</span>
          </a>
          <a
            href="https://www.dropbox.com/scl/fi/v8etkykw5q286jeq4wgr0/isadora-colmenares-cv.pdf?dl=1"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-2 px-4 py-2 rounded-[2px] text-[#3a4041] text-[14px] cursor-pointer w-full sm:w-auto"
            style={{ fontFamily: "'Karla', sans-serif", fontWeight: 400 }}
          >
            <div aria-hidden className="absolute border border-[#06d6a0] border-solid inset-0 pointer-events-none rounded-[2px]" />
            <div className="relative shrink-0" style={{ height: 14, width: 14 * (12.25 / 13.125) }}>
              <DownloadSVG />
            </div>
            <span>Download Full CV</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function AccoladesSection() {
  const accolades = [
    {
      Icon: AwardIcon,
      vb: [36.25, 46.4844],
      title: "Inhouse Design Award",
      org: "Graphic Design USA",
      desc: "Awarded for data-dense infographic of Cambridge Innovation Institute's Discovery on Target pharmaceutical conference.",
    },
    {
      Icon: RankingStarIcon,
      vb: [40, 38.3594],
      title: "Platinum Star Award",
      org: "Aon",
      desc: "Recognized for delivering exceptional project work and exemplifying Aon United behavior in cross team support.",
    },
  ];
  return (
    <div className="w-full bg-[#f7f8f8] py-9 lg:py-12">
      <div className="ic mx-auto flex flex-col gap-9">
        <SectionHeading title="Key Accolades" large />
        <div className="[word-break:break-word] flex flex-col sm:flex-row gap-6">
          {accolades.map(({ Icon, vb, title, org, desc }) => (
            <div key={title} className="flex flex-col gap-3 flex-1 min-w-0">
              <div className="relative shrink-0" style={{ height: ICON_HEIGHT, width: ICON_HEIGHT * (vb[0] / vb[1]) }}>
                <Icon />
              </div>
              <div className="flex flex-col gap-2 leading-normal">
                <div className="flex flex-col gap-1">
                  <p
                    className="text-[#222526] text-[18px] lg:text-[20px] not-italic"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-[#6a7576] text-[18px]"
                    style={{ fontFamily: "'Karla', sans-serif", fontWeight: 500 }}
                  >
                    {org}
                  </p>
                </div>
                <p
                  className="text-[#222526] text-[16px]"
                  style={{ fontFamily: "'Karla', sans-serif", fontWeight: 400 }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const recommendations = [
  {
    avatar: imgAvatar1,
    quote: `I was always impressed by her diligence and steady leadership as a UX Manager. She did a great job keeping projects organized and creating a collaborative environment where people could do their best work. Isa combines strong UX expertise with clear communication and thoughtful management."`,
    person: "Meera Butler, Senior Director Product Management at Korn Ferry",
  },
  {
    avatar: imgAvatar2,
    quote: `Isadora went above and beyond, found solutions to complex components, filled in when others were sick, and truly was there for any change or improvement. Her work included an intense ramp up on a library that was complicated and she dove right into it and was more than dedicated. Her attention to detail is fantastic and her documentation process was so helpful."`,
    person: "Kate Baillargeon, Senior UX Designer for Conversational AI at Verizon",
  },
  {
    avatar: imgAvatar3,
    quote: `I was impressed by her strong system thinking and deep understanding of design systems. She played a key role in translating foundational components into scalable, application-level patterns that enabled her team to deliver high-quality and consistent design outcomes. She continually brought in fresh ideas and best practices from her own learning."`,
    person: "Pei-Yu Shen, Design System Lead at UBS",
  },
  {
    avatar: imgAvatar4,
    quote: `I observed how glowingly her reports speak of her and credit her leadership to their success. I rarely speak with designers who have such a deep understanding of users with disabilities and real empathy for their needs. Isadora made a positive impact on our culture with her warm and engaging leadership style. She identified process improvements to increase efficiency and business value."`,
    person: "Michellanne Li, Accessibility Product Designer at Aon",
  },
  {
    avatar: imgAvatar5,
    quote: `Isadora brought a formidable range of UX and front-end development knowledge; her collaboration with content providers, marketers, engineers, and designers assured a project's success. Major initiatives were successful due to her involvement. Unfailingly generous with her time and willingness to assist others, we all benefited from Isadora's excellent energy, humor, and creative nature."`,
    person: "Tom Norton, Design Director at Cambridge Innovation Institute",
  },
  {
    avatar: imgAvatar6,
    quote: `As a new employee, Isadora worked on a complex, multi-screen animation. Her creative input and attention to detail was matched by her speed and efficiency in completing the program on time and on budget. I enjoyed working with Isadora. Her talents, good nature, and adaptability will be a measurable asset on any project she works on."`,
    person: "Robert Pascarella, Creative Director at Cramer Productions",
  },
];

function RecommendationsSection() {
  return (
    <div className="w-full">
      <div className="ic mx-auto flex flex-col gap-9">
        <SectionHeading title="Recommendations" large />
        {/* xs: 1-col, sm-md: 2-col, xl: 3-col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 lg:gap-x-9 gap-y-9">
          {recommendations.map(({ avatar, quote, person }) => (
            <div key={person} className="flex items-start self-start">
              <p
                className="[word-break:break-word] leading-normal text-[#222526] text-[16px] whitespace-nowrap shrink-0"
                style={{ fontFamily: "'Karla', sans-serif", fontWeight: 400 }}
              >
                "
              </p>
              <div className="flex flex-col gap-3 flex-1 min-w-0">
                <p
                  className="[word-break:break-word] leading-normal text-[#222526] text-[16px]"
                  style={{ fontFamily: "'Karla', sans-serif", fontWeight: 400 }}
                >
                  {quote}
                </p>
                <div className="flex gap-2 items-center">
                  <div className="relative shrink-0 size-[67px] rounded-full overflow-hidden">
                    <img alt="" className="absolute inset-0 w-full h-full object-cover" src={avatar} />
                  </div>
                  <p
                    className="[word-break:break-word] flex-1 min-w-0 leading-normal text-[#6a7576] text-[16px]"
                    style={{ fontFamily: "'Karla', sans-serif", fontWeight: 400 }}
                  >
                    {person}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* MARKER-MAKE-KIT-INVOKED */}
      <style>{`
        /* inner-content centers page content to match each breakpoint's inner width */
        .ic {
          width: 100%;
          padding-left: 16px;
          padding-right: 16px;
          margin-left: auto;
          margin-right: auto;
          box-sizing: border-box;
        }
        @media (min-width: 640px) {
          .ic {
            max-width: 592px;
            padding-left: 0;
            padding-right: 0;
          }
        }
        @media (min-width: 1024px) { .ic { max-width: 952px; } }
        @media (min-width: 1280px) { .ic { max-width: 1000px; } }
      `}</style>
      <div className="bg-white min-h-screen w-full flex flex-col">
        <Navbar />
        <main className="flex flex-col gap-6 sm:gap-9 lg:gap-12 pt-[48px]">
          {/* Hero */}
          <div className="bg-white">
            <div className="ic">
              <HeroSection />
            </div>
          </div>

          <SkillsSection />

          <div className="bg-white">
            <WorkExperienceSection />
          </div>

          <AccoladesSection />

          <div className="bg-white pb-24">
            <RecommendationsSection />
          </div>
        </main>

        {/* Footer */}
        <div className="w-full bg-[#06d6a0] py-[36px] overflow-clip">
          <div
            className="ic flex flex-col sm:flex-row sm:items-start sm:justify-between gap-[24px] [word-break:break-word] text-[#222526] text-[14px]"
            style={{ fontFamily: "'Karla', sans-serif", fontWeight: 400 }}
          >
            {/* Links: stacked on xs, row on sm+ */}
            <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[24px] items-start shrink-0">
              {["About", "Projects"].map((label) => (
                <a key={label} href="#" className="leading-normal underline whitespace-nowrap">{label}</a>
              ))}
            </div>
            <p className="leading-normal whitespace-nowrap shrink-0">© Isadora Colmenares 2026. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
