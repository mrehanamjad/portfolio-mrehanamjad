import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiFastapi, SiGreensock, SiJsonwebtokens, SiTailwindcss } from "react-icons/si";
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
import { Settings2Icon, SettingsIcon } from "lucide-react";
import { IoSettings } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

interface skillI {
  name: string;
  isImage: boolean;
  icon: IconType;
  imgSrc: string;
}

export const skillData = [
  [
    {
      name: "Python",
      isImage: false,
      icon: BiLogoPython,
      imgSrc: "",
    },
    {
      name: "TypeScript",
      isImage: false,
      icon: BiLogoTypescript,
      imgSrc: "",
    },
    {
      name: "Javascript",
      isImage: false,
      icon: BiLogoJavascript,
      imgSrc: "",
    },
    {
      name: "Html",
      isImage: false,
      icon: BiLogoHtml5,
      imgSrc: "",
    },
    {
      name: "Css",
      isImage: false,
      icon: BiLogoCss3,
      imgSrc: "",
    },
  ],
  [
    {
      name: "Next.js",
      isImage: false,
      icon: RiNextjsFill,
      imgSrc: "",
    },
    {
      name: "React.js",
      isImage: false,
      icon: BiLogoReact,
      imgSrc: "",
    },
    {
      name: "Redux ToolKit",
      isImage: false,
      icon: BiLogoRedux,
      imgSrc: "",
    },
    {
      name: "Tailwindcss",
      isImage: false,
      icon: BiLogoTailwindCss,
      imgSrc: "",
    },
     {
      name: "GSAP",
      isImage: false,
      icon: SiGreensock,
      imgSrc: "",
    },
  ],[
     {
      name: "Node.js",
      isImage: false,
      icon: BiLogoNodejs,
      imgSrc: "",
    },
    {
      name: "Express.js",
      isImage: false,
      icon: SiExpress,
      imgSrc: "",
    },
    {
      name: "Fastapi",
      isImage: false,
      icon: SiFastapi,
      imgSrc: "",
    },
     {
      name: "MongoDB",
      isImage: false,
      icon: BiLogoMongodb,
      imgSrc: "",
    },
    {
      name: "Rest Api",
      isImage: false,
      icon: IoMdSettings,
      imgSrc: "",
    },
  ]
];
