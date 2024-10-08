import { ReactNode } from "react";
import styles from "./About.module.css";
import { FaServer } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { AiFillLayout } from "react-icons/ai";
import { ComputerCanvas } from "../Computer/Computer";

interface AboutItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const AboutItem = ({ icon, title, description }: AboutItemProps) => {
  return (
    <div className={styles.itemContainer}>
      {icon}
      <div className={styles.itemContent}>
        <p className={styles.itemTitle}>{title}</p>
        <p className={styles.itemDescription}>{description}</p>
      </div>
    </div>
  );
};

const aboutItems: AboutItemProps[] = [
  {
    icon: <AiFillLayout />,
    title: "Frontend Developer",
    description:
      "I'm a fontend developer with experience in building responsive and user friendly sites",
  },
  {
    icon: <FaServer />,
    title: "Backend Developer",
    description:
      "I'm a backend developer with experience in developing fast and optimized backend systems and APIs",
  },
  {
    icon: <MdDesignServices />,
    title: "UI Designer",
    description:
      "I have experience in designing mockup for multiple web pages and logo designing",
  },
];

export const About = () => {
  return (
    <section className={styles.container} id="About">
      <div className={styles.title}>ABOUT</div>
      <div className={styles.contentContainer}>
        <div className={styles.computer}>
          <ComputerCanvas />
        </div>
        <div className={styles.content}>
          {aboutItems.map((item, i) => (
            <AboutItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
