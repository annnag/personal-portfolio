import { getImageUrl } from "../../utils";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./Experience.module.css";

const experience = [
  {
    date: "July 2022 - July 2024",
    iconUrl: "experience/uberflipLogo.png",
    title: "Software Engineer I",
    subtitle: "Uberflip",
    points: [
      "Participated in the technical design and development of a page-building web application from scratch",
      "Led the development of small-to-medium features from technical planning through completion",
    ],
    tags: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Jest",
      "MySQL",
      "MongoDB",
      "Docker",
    ],
  },
  {
    date: "September 2020 - July 2022",
    iconUrl: "experience/sickkidsLogo.jpg",
    title: "Software Developer",
    subtitle: "Sickkids",
    points: [
      "Contributed full stack development to STAGER  and CRESCENT",
      "Implemented new data visualization methods for CRESCENT, including dot plots and heatmaps, enhancing data interpretation capabilities",
      "Created UI mockups with Figma and the logo for STAGER",
    ],
    tags: [
      "React",
      "Javascript",
      "Semantic UI",
      "Redux",
      "GraphQL",
      "Material UI",
      "MongoDB",
      "MinIO",
      "Docker",
    ],
  },
  {
    date: "September 2020 - July 2022",
    iconUrl: "experience/utLogo.png",
    title: "University of Toronto",
    points: ["GPA: 3.82/4.0", "Dean's List Scholar"],
  },
];

export const Experience = () => {
  return (
    <section className={styles.container} id="Experience">
      <div className={styles.title}>EXPERIENCE</div>
      <div className={styles.contentContainer}>
        <VerticalTimeline lineColor="#eaeaea">
          {experience.map(
            ({ date, iconUrl, title, subtitle, points, tags }, i) => (
              <VerticalTimelineElement
                key={i}
                className={styles.verticalTimeline}
                contentStyle={{ background: "#eaeaea", color: "#4f6d7a" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #eaeaea",
                }}
                icon={
                  <img
                    src={getImageUrl(iconUrl)}
                    style={{ borderRadius: "50%" }}
                  />
                }
                iconStyle={{
                  background: "#fff",
                  color: "#fff",
                  display: "flex",
                  boxShadow:
                    "0 0 0 4px #eaeaea,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)",
                }}
                date={date}
              >
                <h3 className={styles.verticalTimelineTitle}>
                  {title}
                  {subtitle && ` | ${subtitle}`}
                </h3>
                <ul className={styles.verticalTimelinePoints}>
                  {points?.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className={styles.tags}>
                  {tags?.map((tag, i) => (
                    <p key={i}>#{tag}</p>
                  ))}
                </div>
              </VerticalTimelineElement>
            )
          )}
        </VerticalTimeline>
      </div>
    </section>
  );
};
