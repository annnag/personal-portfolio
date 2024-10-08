import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hey, <span className={styles.name}>I&apos;m Anna</span>
        </h1>
        <p className={styles.description}>
          I&apos;m a skilled full stack developer with 3+ years of experience.
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:kexin.guo@alumni.utoronto.ca"
        >
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/hero.png")}
        alt="Hero Image"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
