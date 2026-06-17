export interface Skill {
  name: string;
  items: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface WorkExperience {
  title: string;
  company: string;
  logo: string;
  dateRange: string;
  location: string;
  bullets: string[];
}

export interface Accolade {
  title: string;
  icon: string;
  year: string;
  description: string;
}

export interface Recommendation {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export const BIO_DATA = {
  name: "Isadora Colmenares",
  title: "Experience Designer, Behavioral Research & Service Innovator",
  location: "New York, NY",
  image: "/images/avatar-pei-yu-shen.jpg", // Fallback main profile image
  paragraphs: [
    "Experiential Design & Research Hierarchy: I design environments that optimize human interactions, combining behavioral science and space metrics. My work establishes a framework for how spaces feel, flow, and communicate, ensuring consistency across touchpoints. Through user research and spatial analysis, I create intuitive pathways and tactile experiences that engage and guide users.",
    "Cross-Disciplinary Translation & Execution: I translate abstract ideas into tangible designs, collaborating with cross-functional teams to bring concepts to life. I balance creative vision with practical constraints, ensuring design integrity throughout the process. My approach combines research insights with technical expertise to deliver high-impact solutions.",
    "Multi-Dimensional Creative Perspective: My background in both physical and digital design allows me to approach problems from multiple angles. I look beyond immediate needs to understand broader context, creating systems that are adaptable and scalable. I strive to create meaningful connections through design, blending aesthetics and function."
  ],
  collageImages: [
    "/images/avatar-kate-baillargeon.jpg",
    "/images/avatar-meera-butler.jpg",
    "/images/avatar-michellanne-li.jpg",
    "/images/avatar-pei-yu-shen.jpg"
  ]
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Experience & Service Design",
    icon: "sign-post",
    skills: [
      { name: "Excellence & Service Design", items: ["Behavioral mapping", "Service blueprinting", "Spatial experience", "Prototyping", "Interaction design", "Service blueprints"] }
    ]
  },
  {
    category: "Research & Methods",
    icon: "chart-network",
    skills: [
      { name: "Research & Methods", items: ["Qualitative interviews", "Survey design", "Usability testing", "Data analysis & synthesis"] }
    ]
  },
  {
    category: "Technologies & Frameworks",
    icon: "laptop-code",
    skills: [
      { name: "Technologies & Frameworks", items: ["HTML/CSS", "JavaScript", "React/Next.js", "Tailwind CSS", "Git", "Figma API"] }
    ]
  },
  {
    category: "Tools & Software",
    icon: "pen-nib",
    skills: [
      { name: "Tools & Software", items: ["Figma", "Adobe CC", "Miro", "Webflow/Framer", "Visual Studio Code", "Github Desktop"] }
    ]
  },
  {
    category: "Emerging Tech",
    icon: "cubes",
    skills: [
      { name: "Emerging Tech", items: ["Generative AI tools", "Spatial computing (AR/VR)", "Creative coding"] }
    ]
  },
  {
    category: "Languages",
    icon: "earth-americas",
    skills: [
      { name: "Languages", items: ["English (Native)", "Spanish (Bilingual proficiency)", "French (Conversational)", "Italian (Conversational)", "Portuguese (Conversational)"] }
    ]
  }
];

export const WORK_EXPERIENCE_DATA: WorkExperience[] = [
  {
    title: "Contract Experience Designer",
    company: "American Museum of Natural History",
    logo: "/images/logo-amnh.jpeg",
    dateRange: "May 2024 - Present",
    location: "New York, NY",
    bullets: [
      "Designed spatial experiences, maps, and directional signages for museum visitors.",
      "Conducted visitor observation studies to identify touchpoints and friction points.",
      "Collaborated with exhibition design team to improve physical navigation.",
      "Facilitated design thinking workshops with internal stakeholders."
    ]
  },
  {
    title: "Experience Design Manager",
    company: "Sotheby's",
    logo: "/images/logo-ubs.jpg",
    dateRange: "January 2022 - April 2024",
    location: "New York, NY",
    bullets: [
      "Led service design projects to optimize the client buying journey.",
      "Mapped user flows and designed digital tools for specialists.",
      "Collaborated with product managers to guide UI/UX features.",
      "Designed and executed pilot projects in flagship gallery space."
    ]
  },
  {
    title: "Contract Experience Designer",
    company: "Verizon",
    logo: "/images/logo-verizon.jpg",
    dateRange: "October 2020 - December 2021",
    location: "New York, NY",
    bullets: [
      "Designed omnichannel user journeys for retail store visits.",
      "Created wireframes and interactive prototypes for tablet displays.",
      "Analyzed customer feedback to identify service improvement points."
    ]
  },
  {
    title: "UI Design Lead",
    company: "CII",
    logo: "/images/logo-cii.jpg",
    dateRange: "April 2018 - September 2020",
    location: "New York, NY",
    bullets: [
      "Created user interfaces for b2b enterprise platforms.",
      "Led design team and established UI design system guidelines.",
      "Collaborated with frontend developers to ensure pixel-perfect delivery."
    ]
  },
  {
    title: "Principal UX Designer & UI Engineering Lead",
    company: "Aon",
    logo: "/images/logo-aon.jpg",
    dateRange: "August 2015 - March 2018",
    location: "New York, NY",
    bullets: [
      "Led user research, information architecture, and UI layout designs.",
      "Developed high-fidelity prototypes using HTML/CSS/JS.",
      "Ensured accessibility compliance across digital touchpoints."
    ]
  },
  {
    title: "Senior Designer",
    company: "Korn Ferry",
    logo: "/images/logo-korn-ferry.jpg",
    dateRange: "February 2013 - July 2015",
    location: "New York, NY",
    bullets: [
      "Designed marketing campaign pages, newsletters, and presentations.",
      "Collaborated with branding team to launch digital identity guides.",
      "Created motion graphics and video editing tasks."
    ]
  },
  {
    title: "Graphic Designer",
    company: "INPA",
    logo: "/images/logo-inpa.jpg",
    dateRange: "September 2010 - January 2013",
    location: "New York, NY",
    bullets: [
      "Designed print publications, branding identities, and conference collaterals.",
      "Collaborated with communication teams on public outreach designs."
    ]
  }
];

export const ACCOLADES_DATA: Accolade[] = [
  {
    title: "Intranet Design Award",
    icon: "award",
    year: "2019",
    description: "Awarded for excellence in internal digital workspaces design and navigation design."
  },
  {
    title: "Platinum Star Award",
    icon: "ranking-star",
    year: "2017",
    description: "Recognized for outstanding contribution and leadership in design system transformation."
  }
];

export const RECOMMENDATIONS_DATA: Recommendation[] = [
  {
    quote: "Isadora possesses a unique combination of user-centric research excellence and spatial design expertise. Her work elevated our user journey guidelines.",
    author: "Kate Baillargeon",
    role: "Director of Product",
    company: "American Museum of Natural History",
    avatar: "/images/avatar-kate-baillargeon.jpg"
  },
  {
    quote: "I highly recommend Isadora for any strategic design leadership roles. Her structured approach to complex service design challenges is unmatched.",
    author: "Meera Butler",
    role: "VP of Product",
    company: "Sotheby's",
    avatar: "/images/avatar-meera-butler.jpg"
  },
  {
    quote: "Isadora's attention to detail, empathy for the end user, and collaboration with frontend developers made her an invaluable design partner.",
    author: "Michellanne Li",
    role: "Lead Engineer",
    company: "Verizon",
    avatar: "/images/avatar-michellanne-li.jpg"
  },
  {
    quote: "Her design systems work saved our development team countless hours. She is both a brilliant designer and an efficient collaborator.",
    author: "Pei-Yu Shen",
    role: "Senior UI/UX Designer",
    company: "CII",
    avatar: "/images/avatar-pei-yu-shen.jpg"
  },
  {
    quote: "Isadora led our design transformation project with grace and clear vision. Her ability to translate business goals into delightful user experiences is superb.",
    author: "Robert Pascarella",
    role: "Managing Director",
    company: "Aon",
    avatar: "/images/avatar-robert-pascarella.jpg"
  },
  {
    quote: "An absolute pleasure to work with. Isadora brings strategic thinking, design craft, and high energy to every project.",
    author: "Tom Norton",
    role: "Creative Director",
    company: "Korn Ferry",
    avatar: "/images/avatar-tom-norton.jpg"
  }
];
