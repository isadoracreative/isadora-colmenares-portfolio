import imgHeaderImage from "./733fa2b13ff47c113210fc4be88ef5dd4828494f.png";
import imgHeaderImage1 from "./3fb6ca0a4ba3ac0148308654f70382778854a10b.png";
import imgHeaderImage2 from "./7f524c264af485602a19f2336dc0146fe1db14c8.png";
import imgHeaderImage3 from "./11c627127818b8398fd7e571e9bda028e04b120a.png";
import imgHeaderImage4 from "./0561d50eca3edf9feee419ff8676cab4f0ee9060.png";
import imgEllipse1 from "./d2b21d3cd6acaa73d9231a2d6d5f89fc699f2466.png";
import imgEllipse2 from "./d2b21d3cd6acaa73d9231a2d6d5f89fc699f2466.png";
import imgEllipse3 from "./d2b21d3cd6acaa73d9231a2d6d5f89fc699f2466.png";
import imgEllipse4 from "./d2b21d3cd6acaa73d9231a2d6d5f89fc699f2466.png";
import imgEllipse5 from "./d2b21d3cd6acaa73d9231a2d6d5f89fc699f2466.png";
import imgEllipse6 from "./e575d8077864f95abebf40a25b03111f4881dd55.png";

function HeaderImage() {
  return (
    <div className="relative rounded-[2px] shrink-0 size-[293px]" data-name="header image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgHeaderImage} />
    </div>
  );
}

function ClientAndProject() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Client and project">
      <p className="[word-break:break-word] font-['Montserrat:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#222526] text-[60px] w-full">Isadora Colmenares</p>
    </div>
  );
}

function TitleAndDescription() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="title and description">
      <ClientAndProject />
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="divider short">
        <div className="flex-[1_0_0] h-0 max-w-[72px] min-w-px relative" data-name="divider short">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 1">
              <line id="divider short" stroke="var(--stroke-0, #06D6A0)" x2="72" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="heading">
      <TitleAndDescription />
      <p className="[word-break:break-word] font-['Karla:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#222526] text-[18px] w-full">Experience Design Leader and Engineer based in New York City</p>
    </div>
  );
}

function ClientAndProject1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Client and project">
      <p className="[word-break:break-word] font-['Montserrat:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#222526] text-[32px] w-full">About</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading">
      <ClientAndProject1 />
    </div>
  );
}

function About() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 text-[#222526] w-full" data-name="about">
      <p className="font-['Montserrat:Semibold',sans-serif] not-italic relative shrink-0 text-[20px] w-full">{`Experiential Design & Systemic Hierarchy`}</p>
      <p className="font-['Karla:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full">I operate at the intersection of experience design, systemic visual hierarchy, and frontend execution. As a multidisciplinary design leader, my passion is stepping into complex, data-dense environments to architect the visual systems, intuitive layouts, and cross-functional alignments required to unify digital and physical experiences. By mapping complex information architecture and establishing unified visual standards, I transform chaotic ecosystems into elegant, scalable, and navigable user experiences.</p>
    </div>
  );
}

function About1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 text-[#222526] w-full" data-name="about">
      <p className="font-['Montserrat:Semibold',sans-serif] not-italic relative shrink-0 text-[20px] w-full">{`Cross-Disciplinary Translation & Execution`}</p>
      <p className="font-['Karla:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full">Throughout my career, I have acted as a critical translator between creative vision and technical realization—ensuring that deep structural empathy directly informs production-ready interfaces. From orchestrating holistic, large-scale environmental graphics, wayfinding, and exhibition layouts to engineering responsive digital design systems, I focus on establishing unified visual standards and driving design velocity. Whether scaling core components or directing high-visibility layouts, I bridge the gap between form, space, and technical execution.</p>
    </div>
  );
}

function About2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 text-[#222526] w-full" data-name="about">
      <p className="font-['Montserrat:Semibold',sans-serif] not-italic relative shrink-0 text-[20px] w-full">Multi-Dimensional Creative Perspective</p>
      <p className="font-['Karla:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full">My approach to form and space is shaped by a unique journey: I have hand-rendered detailed scientific taxonomy and conducted field research in the Amazon basin, diagnosed complex customer workflows at Apple, and directed a Latin dance company that performed internationally. These diverse experiences laid a permanent foundation in visual narrative, agile problem-solving, and empathetic mentorship. Today, whether I am mapping complex information architecture, aligning global stakeholders, or designing for physical spaces, I bring a deeply human-centered, multi-dimensional design perspective.</p>
    </div>
  );
}

function HeaderImage1() {
  return (
    <div className="aspect-[288/288] flex-[1_0_0] min-w-px relative rounded-[2px]" data-name="header image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2px]">
        <img alt="" className="absolute h-[148.93%] left-0 max-w-none top-[-29.14%] w-[111.7%]" src={imgHeaderImage1} />
      </div>
    </div>
  );
}

function HeaderImage2() {
  return (
    <div className="aspect-[332.5/332.5] flex-[1_0_0] min-w-px relative rounded-[2px]" data-name="header image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2px]">
        <img alt="" className="absolute h-[147.39%] left-[-22.81%] max-w-none top-[-27.54%] w-[143.87%]" src={imgHeaderImage2} />
      </div>
    </div>
  );
}

function HeaderImage3() {
  return (
    <div className="aspect-[332.5/332.5] flex-[1_0_0] min-w-px relative rounded-[2px]" data-name="header image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2px]">
        <img alt="" className="absolute h-[107.78%] left-[-15.96%] max-w-none top-0 w-[144.36%]" src={imgHeaderImage3} />
      </div>
    </div>
  );
}

function HeaderImage4() {
  return (
    <div className="aspect-[332.5/332.5] flex-[1_0_0] min-w-px relative rounded-[2px]" data-name="header image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgHeaderImage4} />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <HeaderImage1 />
      <HeaderImage2 />
      <HeaderImage3 />
      <HeaderImage4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Heading1 />
      <About />
      <About1 />
      <About2 />
      <Frame11 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[36px] items-start justify-center min-w-px relative">
      <Heading />
      <Frame1 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[36px] items-start relative shrink-0 w-full" data-name="header">
      <HeaderImage />
      <Frame />
    </div>
  );
}

function Layout() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[952px]" data-name="layout">
      <Header />
    </div>
  );
}

function ClientAndProject2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Client and project">
      <p className="[word-break:break-word] font-['Montserrat:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#222526] text-[44px] w-full">{`Core Skills & Expertise`}</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="heading">
      <ClientAndProject2 />
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="divider short">
        <div className="flex-[1_0_0] h-0 max-w-[72px] min-w-px relative" data-name="divider short">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 1">
              <line id="divider short" stroke="var(--stroke-0, #06D6A0)" x2="72" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#222526] w-full">
      <p className="font-['Montserrat:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] w-full">{`Experience & Spatial Design`}</p>
      <ul className="block font-['Karla:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[16px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Information Architecture</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Spatial Storytelling</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Environmental Typography</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Wayfinding</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Exhibition Design</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">Identity Systems</span>
        </li>
      </ul>
    </div>
  );
}

function About3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative self-start shrink-0" data-name="about">
      <div className="flex flex-col font-['Font_Awesome_7_Sharp:Thin',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#a368ca] text-[40px] w-full">
        <p className="leading-[normal]">sign-post</p>
      </div>
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#222526] w-full">
      <p className="font-['Montserrat:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] w-full">{`Research & Methods`}</p>
      <ul className="block font-['Karla:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[16px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Stakeholder Workshops</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Contextual Inquiry</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">User Journey Mapping</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">UI Pattern Analysis, Usability Testing</span>
        </li>
      </ul>
    </div>
  );
}

function About4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative self-start shrink-0" data-name="about">
      <div className="flex flex-col font-['Font_Awesome_7_Sharp:Thin',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#a368ca] text-[40px] w-full">
        <p className="leading-[normal]">chart-network</p>
      </div>
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#222526] w-full">
      <p className="font-['Montserrat:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] w-full">{`Technologies & Frameworks`}</p>
      <ul className="block font-['Karla:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[16px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">HTML5</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">CSS3/SCSS</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">JavaScript</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Angular/TypeScript</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Bootstrap</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Git</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">API Integration</span>
        </li>
      </ul>
    </div>
  );
}

function About5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative self-start shrink-0" data-name="about">
      <div className="flex flex-col font-['Font_Awesome_7_Sharp:Thin',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#a368ca] text-[40px] w-full">
        <p className="leading-[normal]">laptop-code</p>
      </div>
      <Frame17 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#222526] w-full">
      <p className="font-['Montserrat:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] w-full">{`Tools & Software`}</p>
      <ul className="block font-['Karla:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[16px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Figma</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Miro, FigJam</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">VS Code</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">Adobe Creative Cloud (Photoshop, Illustrator, InDesign, After Effects)</span>
        </li>
      </ul>
    </div>
  );
}

function About6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative self-start shrink-0" data-name="about">
      <div className="flex flex-col font-['Font_Awesome_7_Sharp:Thin',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#a368ca] text-[40px] w-full">
        <p className="leading-[normal]">pen-nib</p>
      </div>
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#222526] w-full">
      <p className="font-['Montserrat:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] w-full">Emerging Tech</p>
      <ul className="block font-['Karla:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[16px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Generative AI Integration</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Conversational Design Architecture</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">AI-Driven Feature Logic</span>
        </li>
      </ul>
    </div>
  );
}

function About7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative self-start shrink-0" data-name="about">
      <div className="flex flex-col font-['Font_Awesome_7_Sharp:Thin',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#a368ca] text-[40px] w-full">
        <p className="leading-[normal]">cubes</p>
      </div>
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#222526] w-full">
      <p className="font-['Montserrat:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] w-full">Languages</p>
      <ul className="block font-['Karla:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[16px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">English (Native)</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Spanish (Professional Working Proficiency)</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Portuguese (Limited Working Proficiency)</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">French (Elementary Proficiency)</span>
        </li>
      </ul>
    </div>
  );
}

function About8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative self-start shrink-0" data-name="about">
      <div className="flex flex-col font-['Font_Awesome_7_Sharp:Thin',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#a368ca] text-[40px] w-full">
        <p className="leading-[normal]">earth-americas</p>
      </div>
      <Frame20 />
    </div>
  );
}

function Layout1() {
  return (
    <div className="[word-break:break-word] gap-x-[36px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full" data-name="layout">
      <About3 />
      <About4 />
      <About5 />
      <About6 />
      <About7 />
      <About8 />
    </div>
  );
}

function Overview() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="overview">
      <Layout1 />
    </div>
  );
}

function SkillsAndExperience() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-[952px]" data-name="skills and experience">
      <Heading2 />
      <Overview />
    </div>
  );
}

function FluidContainer() {
  return (
    <div className="bg-[#f7f8f8] content-stretch flex flex-col items-center py-[48px] relative shrink-0 w-full" data-name="fluid container">
      <SkillsAndExperience />
    </div>
  );
}

function ClientAndProject3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Client and project">
      <p className="[word-break:break-word] font-['Montserrat:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#222526] text-[44px] w-full">Work Experience Highlights</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="heading">
      <ClientAndProject3 />
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="divider short">
        <div className="flex-[1_0_0] h-0 max-w-[72px] min-w-px relative" data-name="divider short">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 1">
              <line id="divider short" stroke="var(--stroke-0, #06D6A0)" x2="72" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="font-['Montserrat:Semibold',sans-serif] not-italic relative shrink-0 text-[#222526] text-[20px] w-full">Contract Experience Designer</p>
      <p className="font-['Karla:Medium',sans-serif] font-medium relative shrink-0 text-[#222526] text-[18px] w-full">American Museum of Natural History</p>
      <p className="font-['Karla:Regular',sans-serif] font-normal relative shrink-0 text-[#6a7576] text-[16px] w-full whitespace-pre-wrap">{`May 2026 – Present  |  New York, NY`}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame14 />
      <ul className="block font-['Karla:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#222526] text-[16px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Partnered with curatorial leadership to rebrand the Arachnology Lab / Scorpion Systematics Research Group and rearchitect their entire online presence.</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Engineered a custom, searchable directory system to organize deep historical records and academic profiles</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">Devised distinct sub-branding and interface guardrails to establish an independent identity from the primary museum site.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="font-['Montserrat:Semibold',sans-serif] not-italic relative shrink-0 text-[#222526] text-[20px] w-full">Experience Design Manager</p>
      <p className="font-['Karla:Medium',sans-serif] font-medium relative shrink-0 text-[#222526] text-[18px] w-full">Korn Ferry</p>
      <p className="font-['Karla:Regular',sans-serif] font-normal relative shrink-0 text-[#6a7576] text-[16px] w-full whitespace-pre-wrap">{`January 2026 – June 2026  |  New York, NY`}</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame21 />
      <ul className="block font-['Karla:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#222526] text-[16px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Led and supported a distributed team of 8 experience designers across diverse career tracks.</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Secured a singular creative vision for high-visibility data layouts across a large, decentralized group of internal executive stakeholders.</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">Scaled core design system components to support emerging generative AI features, including AI Talent Search agents.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="font-['Montserrat:Semibold',sans-serif] not-italic relative shrink-0 text-[#222526] text-[20px] w-full">Contract Experience Designer</p>
      <p className="font-['Karla:Medium',sans-serif] font-medium relative shrink-0 text-[#222526] text-[18px] w-full">Verizon</p>
      <p className="font-['Karla:Regular',sans-serif] font-normal relative shrink-0 text-[#6a7576] text-[16px] w-full whitespace-pre-wrap">{`October 2025 – January 2026  |  New York, NY`}</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame22 />
      <ul className="block font-['Karla:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#222526] text-[16px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Contributed modular Figma components to the Verizon Design System engineered for advanced conversational prototyping.</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">Designed interactive customer pathways showing responsive workflows between automated AI and live support.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="font-['Montserrat:Semibold',sans-serif] not-italic relative shrink-0 text-[#222526] text-[20px] w-full">UX Design Lead</p>
      <p className="font-['Karla:Medium',sans-serif] font-medium relative shrink-0 text-[#222526] text-[18px] w-full">UBS</p>
      <p className="font-['Karla:Regular',sans-serif] font-normal relative shrink-0 text-[#6a7576] text-[16px] w-full whitespace-pre-wrap">{`April 2024 – September 2025  |  New York, NY`}</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame23 />
      <ul className="block font-['Karla:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#222526] text-[16px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Collaborated with cross-functional global leads to scale the core enterprise design system across recruiting and logistics ecosystems.</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">Managed a distributed team of 9 experience designers across AMER, EMEA, and APAC regions.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="font-['Montserrat:Semibold',sans-serif] not-italic relative shrink-0 text-[#222526] text-[20px] w-full">{`Principal UX Designer & UX Engineering Lead`}</p>
      <p className="font-['Karla:Medium',sans-serif] font-medium relative shrink-0 text-[#222526] text-[18px] w-full">Aon</p>
      <p className="font-['Karla:Regular',sans-serif] font-normal relative shrink-0 text-[#6a7576] text-[16px] w-full whitespace-pre-wrap">{`August 2019 – April 2024  |  New York, NY`}</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame24 />
      <ul className="block font-['Karla:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#222526] text-[16px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Refactored legacy talent assessments into a performant, mobile-first single-page application using Angular and TypeScript.</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Coded robust, highly flexible components using design variables to allow automated, instant client sub-branding.</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">Redesigned a study materials microsite utilizing HTML/CSS/JS, directly driving $620K+ in revenue.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="font-['Montserrat:Semibold',sans-serif] not-italic relative shrink-0 text-[#222526] text-[20px] w-full">Senior Designer</p>
      <p className="font-['Karla:Medium',sans-serif] font-medium relative shrink-0 text-[#222526] text-[18px] w-full">Cambridge Innovation Institute</p>
      <p className="font-['Karla:Regular',sans-serif] font-normal relative shrink-0 text-[#6a7576] text-[16px] w-full whitespace-pre-wrap">{`February 2016 – August 2019  |  Boston, MA`}</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame25 />
      <ul className="block font-['Karla:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#222526] text-[16px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Orchestrated the comprehensive visual and environmental design ecosystem for over 60 annual international biotech and life sciences conferences.</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Designed large-scale on-site entryway arches, wayfinding signage, and responsive web event prototypes.</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">Programmed automated workflow scripts using Adobe ExtendScript and InDesign APIs to stream live databases into print layouts.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="font-['Montserrat:Semibold',sans-serif] not-italic relative shrink-0 text-[#222526] text-[20px] w-full">Graphic Designer</p>
      <p className="font-['Karla:Medium',sans-serif] font-medium relative shrink-0 text-[#222526] text-[18px] w-full">National Institute for Amazonian Research (INPA)</p>
      <p className="font-['Karla:Regular',sans-serif] font-normal relative shrink-0 text-[#6a7576] text-[16px] w-full whitespace-pre-wrap">{`February 2013 – August 2016  |  Manaus, Brazil`}</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame26 />
      <ul className="block font-['Karla:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#222526] text-[16px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Developed website prototypes, visual brand identities, and staging layouts for an international ornithology congress.</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">Hand-rendered detailed scientific illustrations, taxonomy figures, and complex biogeographical maps for graduate publications.</span>
        </li>
      </ul>
    </div>
  );
}

function About9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[793px]" data-name="about">
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <About9 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[2px] shrink-0" data-name="button outline">
        <div aria-hidden className="absolute border border-[#06d6a0] border-solid inset-0 pointer-events-none rounded-[2px]" />
        <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_7_Brands:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[14px] text-[#3a4041] text-[14px] text-center">
          <p className="leading-[normal]">linkedin</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Karla:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3a4041] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">View LinkedIn</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[2px] shrink-0" data-name="button outline">
        <div aria-hidden className="absolute border border-[#06d6a0] border-solid inset-0 pointer-events-none rounded-[2px]" />
        <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_7_Sharp:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[14px] text-[#3a4041] text-[14px] text-center">
          <p className="leading-[normal]">download</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Karla:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3a4041] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">Download Full CV</p>
        </div>
      </div>
    </div>
  );
}

function SkillsAndExperience1() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-[952px]" data-name="skills and experience">
      <Heading3 />
      <Frame2 />
      <Frame13 />
    </div>
  );
}

function ClientAndProject4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Client and project">
      <p className="[word-break:break-word] font-['Montserrat:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#222526] text-[44px] w-full">Key Accolades</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="heading">
      <ClientAndProject4 />
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="divider short">
        <div className="flex-[1_0_0] h-0 max-w-[72px] min-w-px relative" data-name="divider short">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 1">
              <line id="divider short" stroke="var(--stroke-0, #06D6A0)" x2="72" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:Semibold',sans-serif] not-italic relative shrink-0 text-[#222526] text-[20px] w-full">Inhouse Design Award</p>
      <p className="font-['Karla:Medium',sans-serif] font-medium relative shrink-0 text-[#6a7576] text-[18px] w-full">Graphic Design USA</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 w-full">
      <Frame10 />
      <p className="font-['Karla:Regular',sans-serif] font-normal relative shrink-0 text-[#222526] text-[16px] w-full">Awarded for data-dense infographic of Cambridge Innovation Institute’s Discovery on Target pharmaceutical conference.</p>
    </div>
  );
}

function About10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="about">
      <div className="flex flex-col font-['Font_Awesome_7_Sharp:Thin',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#a368ca] text-[40px] w-full">
        <p className="leading-[normal]">award</p>
      </div>
      <Frame27 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:Semibold',sans-serif] not-italic relative shrink-0 text-[#222526] text-[20px] w-full">Platinum Star Award</p>
      <p className="font-['Karla:Medium',sans-serif] font-medium relative shrink-0 text-[#6a7576] text-[18px] w-full">Aon</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 w-full">
      <Frame12 />
      <p className="font-['Karla:Regular',sans-serif] font-normal relative shrink-0 text-[#222526] text-[16px] w-full">Recognized for delivering exceptional project work and exemplifying Aon United behavior in cross team support.</p>
    </div>
  );
}

function About11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="about">
      <div className="flex flex-col font-['Font_Awesome_7_Sharp:Thin',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#a368ca] text-[40px] w-full">
        <p className="leading-[normal]">ranking-star</p>
      </div>
      <Frame28 />
    </div>
  );
}

function Layout2() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[36px] items-start relative shrink-0 w-full" data-name="layout">
      <About10 />
      <About11 />
    </div>
  );
}

function Overview1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="overview">
      <Layout2 />
    </div>
  );
}

function SkillsAndExperience2() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-[952px]" data-name="skills and experience">
      <Heading4 />
      <Overview1 />
    </div>
  );
}

function FluidContainer1() {
  return (
    <div className="bg-[#f7f8f8] content-stretch flex flex-col items-center py-[48px] relative shrink-0 w-full" data-name="fluid container">
      <SkillsAndExperience2 />
    </div>
  );
}

function ClientAndProject5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Client and project">
      <p className="[word-break:break-word] font-['Montserrat:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#222526] text-[44px] w-full">Recommendations</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="heading">
      <ClientAndProject5 />
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="divider short">
        <div className="flex-[1_0_0] h-0 max-w-[72px] min-w-px relative" data-name="divider short">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 1">
              <line id="divider short" stroke="var(--stroke-0, #06D6A0)" x2="72" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[67px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="67" src={imgEllipse1} width="67" />
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Karla:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#6a7576] text-[16px]">Meera Butler, Senior Director Product Management at Korn Ferry</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Karla:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#222526] text-[16px] w-full">I was always impressed by her diligence and steady leadership as a UX Manager. She did a great job keeping projects organized and creating a collaborative environment where people could do their best work. Isa combines strong UX expertise with clear communication and thoughtful management.”</p>
      <Frame31 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-start justify-self-stretch relative self-start shrink-0">
      <p className="[word-break:break-word] font-['Karla:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#222526] text-[16px] whitespace-nowrap">“</p>
      <Frame30 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[67px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="67" src={imgEllipse2} width="67" />
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Karla:Regular',sans-serif] font-normal leading-[0] min-w-px relative text-[#6a7576] text-[0px]">
        <span className="leading-[normal] text-[16px]">{`Kate Baillargeon, `}</span>
        <span className="leading-[normal] text-[16px]">Senior UX Designer for Conversational AI at Verizon</span>
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Karla:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#222526] text-[16px] w-full">Isadora went above and beyond, found solutions to complex components, filled in when others were sick, and truly was there for any change or improvement. Her work included an intense ramp up on a library that was complicated and she dove right into it and was more than dedicated. Her attention to detail is fantastic and her documentation process was so helpful.”</p>
      <Frame34 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-start justify-self-stretch relative self-start shrink-0">
      <p className="[word-break:break-word] font-['Karla:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#222526] text-[16px] whitespace-nowrap">“</p>
      <Frame33 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[67px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="67" src={imgEllipse3} width="67" />
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Karla:Regular',sans-serif] font-normal leading-[normal] max-w-[800px] min-w-px relative text-[#6a7576] text-[16px]">Pei-Yu Shen, Design System Lead at UBS</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Karla:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#222526] text-[16px] w-full">I was impressed by her strong system thinking and deep understanding of design systems. She played a key role in translating foundational components into scalable, application-level patterns that enabled her team to deliver high-quality and consistent design outcomes. She continually brought in fresh ideas and best practices from her own learning.”</p>
      <Frame37 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start justify-self-stretch relative self-start shrink-0">
      <p className="[word-break:break-word] font-['Karla:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#222526] text-[16px] whitespace-nowrap">“</p>
      <Frame36 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[67px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="67" src={imgEllipse4} width="67" />
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Karla:Regular',sans-serif] font-normal leading-[normal] max-w-[800px] min-w-px relative text-[#6a7576] text-[16px]">Michellanne Li, Accessibility Product Designer at Aon</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Karla:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#222526] text-[16px] w-full">I observed how glowingly her reports speak of her and credit her leadership to their success. I rarely speak with designers who have such a deep understanding of users with disabilities and real empathy for their needs. Isadora made a positive impact on our culture with her warm and engaging leadership style. She identified process improvements to increase efficiency and business value.”</p>
      <Frame40 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-start justify-self-stretch relative self-start shrink-0">
      <p className="[word-break:break-word] font-['Karla:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#222526] text-[16px] whitespace-nowrap">“</p>
      <Frame39 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[67px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="67" src={imgEllipse5} width="67" />
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Karla:Regular',sans-serif] font-normal leading-[normal] max-w-[800px] min-w-px relative text-[#6a7576] text-[16px]">Tom Norton, Design Director at Cambridge Innovation Institure</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Karla:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#222526] text-[16px] w-full">{`Isadora brought a formidable range of UX and front-end development knowledge; her collaboration with content providers, marketers, engineers, and designers assured a project's success. Major initiatives were successful due to her involvement. Unfailingly generous with her time and willingness to assist others, we all benefited from Isadora’s excellent energy, humor, and creative nature.”`}</p>
      <Frame43 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-start justify-self-stretch relative self-start shrink-0">
      <p className="[word-break:break-word] font-['Karla:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#222526] text-[16px] whitespace-nowrap">“</p>
      <Frame42 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[67px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="67" src={imgEllipse6} width="67" />
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Karla:Regular',sans-serif] font-normal leading-[0] min-w-px relative text-[#6a7576] text-[0px]">
        <span className="leading-[normal] text-[16px]">Robert Pascarella</span>
        <span className="leading-[normal] text-[16px]">{`, `}</span>
        <span className="leading-[normal] text-[16px]">Creative Director at Cramer Productions</span>
      </p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Karla:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#222526] text-[16px] w-full">As a new employee, Isadora worked on a complex, multi-screen animation. Her creative input and attention to detail was matched by her speed and efficiency in completing the program on time and on budget. I enjoyed working with Isadora. Her talents, good nature, and adaptability will be a measurable asset on any project she works on.”</p>
      <Frame46 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-start justify-self-stretch relative self-start shrink-0">
      <p className="[word-break:break-word] font-['Karla:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#222526] text-[16px] whitespace-nowrap">“</p>
      <Frame45 />
    </div>
  );
}

function Layout3() {
  return (
    <div className="gap-x-[36px] gap-y-[36px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] relative shrink-0 w-full" data-name="layout">
      <Frame29 />
      <Frame32 />
      <Frame35 />
      <Frame38 />
      <Frame41 />
      <Frame44 />
    </div>
  );
}

function Overview2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="overview">
      <Layout3 />
    </div>
  );
}

function SkillsAndExperience3() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-[952px]" data-name="skills and experience">
      <Heading5 />
      <Overview2 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="links">
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="decoration-[6%] decoration-solid leading-[normal] underline">Projects</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="decoration-[6%] decoration-solid leading-[normal] underline">About</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="decoration-[6%] decoration-solid leading-[normal] underline">Contact</p>
      </div>
    </div>
  );
}

function FooterContent() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Karla:Regular',sans-serif] font-normal items-start justify-between leading-[0] max-w-[952px] overflow-clip relative shrink-0 text-[#222526] text-[14px] w-full whitespace-nowrap" data-name="footer content">
      <Links />
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="leading-[normal]">© Isadora Colmenares 2026. All rights reserved.</p>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="bg-[#06d6a0] content-stretch flex flex-col items-center overflow-clip py-[36px] relative shrink-0 w-full" data-name="wrapper">
      <FooterContent />
    </div>
  );
}

function MainAndFooter() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] items-center left-0 pt-[72px] top-0 w-[1024px]" data-name="main and footer">
      <div className="bg-white content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-[1024px]" data-name="content - about">
        <Layout />
        <FluidContainer />
        <SkillsAndExperience1 />
        <FluidContainer1 />
        <SkillsAndExperience3 />
      </div>
      <div className="content-stretch flex flex-col items-center max-w-[1024px] min-w-[1024px] pt-[96px] relative shrink-0 w-full" data-name="Footer">
        <Wrapper />
      </div>
    </div>
  );
}

function MenuAndSiteTitle() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-name="menu and site title">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[#222526] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Isadora Colmenares</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="content">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <MenuAndSiteTitle />
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="header nav menu">
        <div className="content-stretch flex items-center justify-center p-[16px] relative shrink-0" data-name="header nav link">
          <div className="[word-break:break-word] flex flex-col font-['Karla:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[800px] relative shrink-0 text-[#222526] text-[14px] whitespace-nowrap">
            <p className="leading-[normal]">Projects</p>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center p-[16px] relative shrink-0" data-name="header nav link">
          <div aria-hidden className="absolute border-[#06d6a0] border-b-3 border-solid inset-0 pointer-events-none" />
          <div className="[word-break:break-word] flex flex-col font-['Karla:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[800px] relative shrink-0 text-[#222526] text-[14px] whitespace-nowrap">
            <p className="leading-[normal]">About</p>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center p-[16px] relative shrink-0" data-name="header nav link">
          <div className="[word-break:break-word] flex flex-col font-['Karla:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[800px] relative shrink-0 text-[#222526] text-[14px] whitespace-nowrap">
            <p className="leading-[normal]">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ViewportLg() {
  return (
    <div className="relative size-full" data-name="viewport lg">
      <MainAndFooter />
      <div className="absolute bg-white content-stretch flex items-center justify-center left-0 max-w-[1024px] min-w-[1024px] pl-[36px] pr-[24px] top-0 w-[1024px]" data-name="header nav">
        <div aria-hidden className="absolute border-[#d4d8d8] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
        <Content />
      </div>
    </div>
  );
}