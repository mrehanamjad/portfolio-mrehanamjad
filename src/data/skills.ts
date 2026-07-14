import { RiNextjsFill } from "react-icons/ri";
import {
  SiAppwrite,
  SiExpress,
  SiFastapi,
  SiGreensock,
  SiLangchaincorporate,
  SiLanggraph,
  SiPostman,
  SiSanity,
  SiShopify,
} from "react-icons/si";
import { IconType } from "react-icons";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiVector,
} from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { AiOutlineDocker, AiOutlineOpenAI } from "react-icons/ai";
import { PiFileSqlFill } from "react-icons/pi";

export interface skillI {
  name: string;
  isImage: boolean;
  icon: IconType;
  imgSrc: string;
  size: number;
}

export const skillData: skillI[][] = [
  [
    {
      name: "Python",
      isImage: false,
      icon: BiLogoPython,
      imgSrc: "",
      size: 48,
    },
    {
      name: "TypeScript",
      isImage: false,
      icon: BiLogoTypescript,
      imgSrc: "",
      size: 48,
    },
    {
      name: "Javascript",
      isImage: false,
      icon: BiLogoJavascript,
      imgSrc: "",
      size: 48,
    },
    {
      name: "Html",
      isImage: false,
      icon: BiLogoHtml5,
      imgSrc: "",
      size: 48,
    },
    {
      name: "Css",
      isImage: false,
      icon: BiLogoCss3,
      imgSrc: "",
      size: 48,
    },
  ],[
    // AI Skills
    {
     name: "LangChain",
      isImage: false,
      icon: SiLangchaincorporate,
      imgSrc: "",
      size: 48,
    },
    {
     name: "LangGraph",
      isImage: false,
      icon: SiLanggraph,
      imgSrc: "",
      size: 48,
    },
      {
     name: "Agent SDK",
      isImage: false,
      icon: AiOutlineOpenAI,
      imgSrc: "",
      size: 48,
    },
  ],
  [
    {
      name: "Next.js",
      isImage: false,
      icon: RiNextjsFill,
      imgSrc: "",
      size: 48,
    },
    {
      name: "React.js",
      isImage: false,
      icon: BiLogoReact,
      imgSrc: "",
      size: 48,
    },
    {
      name: "Redux ToolKit",
      isImage: false,
      icon: BiLogoRedux,
      imgSrc: "",
      size: 48,
    },
    {
      name: "Tailwindcss",
      isImage: false,
      icon: BiLogoTailwindCss,
      imgSrc: "",
      size: 48,
    },
    {
      name: "GSAP",
      isImage: false,
      icon: SiGreensock,
      imgSrc: "",
      size: 48,
    },
  ],
  [
    {
      name: "Node.js",
      isImage: false,
      icon: BiLogoNodejs,
      imgSrc: "",
      size: 48,
    },
    {
      name: "Express.js",
      isImage: false,
      icon: SiExpress,
      imgSrc: "",
      size: 48,
    },
    {
      name: "Fastapi",
      isImage: false,
      icon: SiFastapi,
      imgSrc: "",
      size: 48,
    },
    {
      name: "Rest Api",
      isImage: false,
      icon: IoMdSettings,
      imgSrc: "",
      size: 48,
    },
  ],
  [
    {
      name: "",
      isImage: false,
      icon: PiFileSqlFill,
      imgSrc: "",
      size: 48,
    },
    {
      name: "Postgresql",
      isImage: false,
      icon: BiLogoPostgresql,
      imgSrc: "",
      size: 48,
    },
    {
      name: "MongoDB",
      isImage: false,
      icon: BiLogoMongodb,
      imgSrc: "",
      size: 48,
    },
    
     {
      name: "Vector Databases",
      isImage: false,
      icon: BiVector,
      imgSrc: "",
      size: 48,
    },
  ],
  [
    {
      name: "Docker",
      isImage: false,
      icon: AiOutlineDocker,
      imgSrc: "",
      size: 48,
    },
    {
      name: "Shopify",
      isImage: false,
      icon: SiShopify,
      imgSrc: "",
      size: 48,
    },
    {
      name: "Git",
      isImage: false,
      icon: FaGitAlt,
      imgSrc: "",
      size: 45,
    },
    {
      name: "AppWrite",
      isImage: false,
      icon: SiAppwrite,
      imgSrc: "",
      size: 40,
    }
  ],
];
