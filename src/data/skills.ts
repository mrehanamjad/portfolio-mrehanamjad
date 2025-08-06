import { RiNextjsFill } from "react-icons/ri";
import { SiAppwrite, SiExpress, SiFastapi, SiGreensock, SiSanity} from "react-icons/si";
import { IconType } from "react-icons";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

export interface skillI {
  name: string;
  isImage: boolean;
  icon: IconType;
  imgSrc: string;
  size: number;
}

export const skillData:skillI[][] = [
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
  ],[
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
      name: "MongoDB",
      isImage: false,
      icon: BiLogoMongodb,
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
  [{
     name: "AppWrite",
      isImage: false,
      icon: SiAppwrite,
      imgSrc: "",
      size: 48,
  },
  {
     name: "Sanity",
      isImage: false,
      icon: SiSanity,
      imgSrc: "",
      size: 48,
  },

]
];
