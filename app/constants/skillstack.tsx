import { IconType } from "react-icons"
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill, BsRobot } from "react-icons/bs";
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  // new icons
  SiKeras,
  SiTensorflow,
  SiCplusplus,
  SiBun,
  SiC,
  SiPython,
  SiSolidity,
  SiHtml5,
  SiFlask,
  SiArchlinux,
  SiMongodb,
} from "react-icons/si";

export type stacksProps = Record<string,{
  Icon: IconType;
  className: string
}>

export const FRONTEND_TECH: stacksProps = {
  JavaScript: { Icon: SiJavascript, className: "text-yellow-400" },
  TypeScript: { Icon: SiTypescript, className: "text-blue-400" },
  "Next.js": { Icon: SiNextdotjs, className: "" },
  "React.js": { Icon: SiReact, className: "text-sky-500" },
  TailwindCSS: { Icon: SiTailwindcss, className: "text-cyan-300" },
  Python: { Icon: SiPython, className: "text-yellow-300" },
  Solidity: { Icon: SiSolidity, className: "text-stone-500" },
  HTML: { Icon: SiHtml5, className: "text-orange-600" },
}

export const BACKEND_TECH = {
  postgreSql: { Icon: BiLogoPostgresql, className: "text-blue-500" },
  Prisma: { Icon: SiPrisma, className: "text-emerald-500" },
  "Node.js": { Icon: SiNodedotjs, className: "text-green-600" },
  Firebase: { Icon: SiFirebase, className: "text-yellow-500" },
  "OpenAi api": { Icon: BsRobot, className: "text-rose-500" },
  Nginx: { Icon: SiNginx, className: "text-green-500" },
  Express: { Icon: SiExpress, className: "" },
  TensorFlow: { Icon: SiTensorflow, className: "text-orange-600" },
  MongoDB: { Icon: SiMongodb, className: "text-green-400" },
};