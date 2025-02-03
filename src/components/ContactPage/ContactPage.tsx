import React from "react";
import styles from "./ContactPage.module.css";
import { GitHub } from "@mui/icons-material";
import Reveal from "../Reveal/Reveal";
import { motion } from "motion/react";

const ContactPage = () => {
  return (
    <section className={styles.contactPageContainer}>
      <Reveal>
        <h1>Contact us</h1>
      </Reveal>
      <Reveal>
        <p className={styles.contactDescription}>
          Want to connect? Reach out via GitHub!
        </p>
      </Reveal>
      
      <div className={styles.contactInnerContainer}>
        <motion.div
          className={styles.contactInfoContainer}
          whileHover={{ scale: 1.05 }}
        >
          <h3>AdhSwede</h3>
          <a
            href="https://github.com/adhSwede"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={styles.githubLink}
          >
            <GitHub fontSize="large" />
          </a>
        </motion.div>
        <motion.div
          className={styles.contactInfoContainer}
          whileHover={{ scale: 1.05 }}
        >
          <h3>Wictor</h3>
          <a
            href="https://github.com/WictorNisa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={styles.githubLink}
          >
            <GitHub fontSize="large" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
