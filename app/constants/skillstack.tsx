import { IconType } from "react-icons"
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill, BsRobot } from "react-icons/bs";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  // new icons
  SiKeras,
  SiTensorflow,
  SiPython,
  SiMongodb,
} from "react-icons/si";

export type stacksProps = Record<
  string,
  {
    Icon: IconType;
    className: string;
  }
>;

export const FRONTEND_TECH: stacksProps = {
  JavaScript: { Icon: SiJavascript, className: "text-yellow-400" },
  TypeScript: { Icon: SiTypescript, className: "text-blue-400" },
  "Next.js": { Icon: SiNextdotjs, className: "" },
  "React.js": { Icon: SiReact, className: "text-sky-500" },
  TailwindCSS: { Icon: SiTailwindcss, className: "text-cyan-300" },
  Python: { Icon: SiPython, className: "text-yellow-300" },
};

export const BACKEND_TECH = {
  postgreSql: { Icon: BiLogoPostgresql, className: "text-blue-500" },
  Prisma: { Icon: SiPrisma, className: "text-emerald-500" },
  "Node.js": { Icon: SiNodedotjs, className: "text-green-600" },
  Firebase: { Icon: SiFirebase, className: "text-yellow-500" },
  Express: { Icon: SiExpress, className: "" },
  MongoDB: { Icon: SiMongodb, className: "text-green-400" },
};