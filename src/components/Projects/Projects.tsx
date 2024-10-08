import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Projects.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectProp {
  coverImg: string;
  name: string;
  description: string;
  githubUrl?: string;
  url?: string;
  tags: string[];
}

const projects: ProjectProp[] = [
  {
    coverImg: "scrapbook.png",
    name: "Scrapbook",
    description:
      "Scrapbook is a first-person 3D puzzle game in Unity. The game features an innovative mechanic where players manipulate an isometric blueprint of a dollhouse, rotating and rearranging six rooms to solve puzzles and escape. ",
    githubUrl: "https://github.com/annnag/CSC404Group8",
    url: "https://aurorapetsbirds.itch.io/scrapbook",
    tags: ["Unity", "C#", "Blender", "Procreate"],
  },
  {
    coverImg: "movie.png",
    name: "Movie Searching App",
    description:
      "A movie searching app with OMDB API. This app allows users to search for movies by entering keywords. It will return the top ten results and more upon requesting.",
    githubUrl: "https://github.com/annnag/react_app_with_OMDB_api",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "Redux",
      "SemanticUI",
      "Nodejs",
      "GraphQL",
    ],
  },
  {
    coverImg: "hackathon.jpg",
    name: "AI Chatbot",
    description:
      "A chatbot that can answer question based on information stored in the database. It is developed in a company wide hackathon by a group of 6 including me and was the winner of the competition. We converted articles, blog and video content into smaller chunks and further convert them into vector embeddings. When the user types in a question, the related information will found in the vector database by calculating consine similarity. These information are then passed to chatgpt assistant to summarize, and returned to the user with links to the related content.",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "ChatGPT",
      "Rev AI",
      "VectorDB",
    ],
  },
];

const Project = ({
  coverImg,
  name,
  description,
  githubUrl,
  url,
  tags,
}: ProjectProp) => {
  return (
    <div className={styles.projectContainer}>
      <img
        className={styles.coverImg}
        src={getImageUrl(`projects/${coverImg}`)}
        alt="About Image"
      />
      <p className={styles.projectTitle}>{name}</p>
      <p className={styles.projectDescription}>{description}</p>
      <div className={styles.tagContainer}>
        {tags.map((tag, i) => (
          <div key={i} className={styles.tag}>
            {tag}
          </div>
        ))}
      </div>
      <div className={styles.links}>
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <FaGithub />
            Github
          </a>
        )}
        {url && (
          <>
            <a href={url} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt />
              URL
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section className={styles.container} id="Projects">
      <div className={styles.title}>PROJECTS</div>
      <div className={styles.contentContainer}>
        {projects.map((proj, i) => (
          <Project key={i} {...proj} />
        ))}
      </div>
    </section>
  );
};
