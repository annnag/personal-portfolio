import { ReactNode } from "react";
import styles from "./Skills.module.css";
import { DiJqueryLogo } from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaFigma,
  FaGitAlt,
  FaPython,
  FaJava,
  FaUnity,
} from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiJest,
  SiBlender,
  SiJavascript,
} from "react-icons/si";
import { GrGraphQl, GrMysql } from "react-icons/gr";

const Skill = ({ icon, name }: { icon: ReactNode; name: string }) => {
  return (
    <div className={styles.skillItem}>
      {icon}
      <p>{name}</p>
    </div>
  );
};

const skills = [
  { name: "HTML5", icon: <FaHtml5 key="html" /> },
  { name: "CSS3", icon: <FaCss3Alt key="css" /> },
  { name: "React", icon: <FaReact key="react" /> },
  { name: "NextJS", icon: <RiNextjsFill key="nextjs" /> },
  { name: "Javascript", icon: <SiJavascript key="js" /> },
  { name: "Typescript", icon: <SiTypescript key="ts" /> },
  { name: "Redux", icon: <SiRedux key="redux" /> },
  { name: "TailwindCSS", icon: <RiTailwindCssFill key="tailwind" /> },
  { name: "JQuery", icon: <DiJqueryLogo key="jquery" /> },

  { name: "NodeJS", icon: <SiExpress key="node" /> },
  { name: "GraphQL", icon: <GrGraphQl key="graphql" /> },
  { name: "MongoDB", icon: <SiMongodb key="mongodb" /> },
  { name: "MySQL", icon: <GrMysql key="mysql" /> },

  { name: "Jest", icon: <SiJest key="jest" /> },

  { name: "Git", icon: <FaGitAlt key="git" /> },
  { name: "Python", icon: <FaPython key="python" /> },
  { name: "Java", icon: <FaJava key="java" /> },
  { name: "Unity", icon: <FaUnity key="unity" /> },
  { name: "Figma", icon: <FaFigma key="figma" /> },
  { name: "Blender", icon: <SiBlender key="blender" /> },
];

export const Skills = () => {
  return (
    <section className={styles.container} id="Skills">
      <div className={styles.title}>SKILLS</div>
      <div className={styles.contentContainer}>
        {skills.map((item, i) => (
          <Skill key={i} {...item} />
        ))}
      </div>
    </section>
  );
};
