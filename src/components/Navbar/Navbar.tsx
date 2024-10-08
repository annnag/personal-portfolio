import { useState } from "react";
import styles from "./Navbar.module.css";
import { IoMenu, IoClose } from "react-icons/io5";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Portfolio
      </a>
      <div className={styles.menu}>
        {menuOpen ? (
          <IoClose
            className={styles.menuBtn}
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <IoMenu
            className={styles.menuBtn}
            onClick={() => setMenuOpen(true)}
          />
        )}

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Experience">Experience</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
