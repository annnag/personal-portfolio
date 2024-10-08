import { ReactNode } from "react";
import styles from "./Contact.module.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface ContactInfoProp {
  icon: ReactNode;
  linkText: string;
  linkURL: string;
}

const ContactInfo = ({ icon, linkText, linkURL }: ContactInfoProp) => {
  return (
    <div className={styles.contact}>
      {icon}
      <a href={linkURL} target="_blank" rel="noreferrer">
        {linkText}
      </a>
    </div>
  );
};

const contacts: ContactInfoProp[] = [
  {
    icon: <MdEmail />,
    linkText: "kexin.guo@alumni.utoronto.ca",
    linkURL: "kexin.guo@alumni.utoronto.ca",
  },
  {
    icon: <FaLinkedin />,
    linkText: "linkedin.com/in/anna-guo-3b53ab212",
    linkURL: "https://www.linkedin.com/in/anna-guo-3b53ab212/",
  },
  {
    icon: <FaGithub />,
    linkText: "github.com/annnag",
    linkURL: "https://github.com/annnag",
  },
];

export const Contact = () => {
  return (
    <section className={styles.container} id="Contact">
      <div className={styles.left}>
        <p className={styles.title}>Contact</p>
        <p className={styles.subtitle}>Feel free to reach out!</p>
      </div>
      <div className={styles.right}>
        {contacts.map((contact, i) => (
          <ContactInfo key={i} {...contact} />
        ))}
      </div>
    </section>
  );
};
