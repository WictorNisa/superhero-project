import { Link } from "react-router";
import styles from "./AboutPage.module.css";
import Reveal from "../Reveal/Reveal";

const AboutPage = () => {
  return (
    <section className={styles.aboutPageContainer}>
      <div className={styles.aboutLeftContainer}>
        <Reveal>
          <h1>About us</h1>
        </Reveal>
        <Reveal>
          <h2>Unleashing the Power of Heroes</h2>
        </Reveal>
        <Reveal>
          <p>
            Welcome to Supelore, where we bring superheroes to life! Whether
            you’re searching for your favorite hero, exploring their powers, or
            discovering new legends, our platform is designed for every comic
            book and superhero fan.
          </p>
        </Reveal>
        <Reveal>
          <h3>Our Mission</h3>
        </Reveal>
        <Reveal>
          <p>
            We aim to create the ultimate superhero database where fans can:
          </p>
        </Reveal>
        <Reveal>
          <ul>
            <li>
              <span>Search</span> for any superhero by name or ID.
            </li>
            <li>
              <span>Discover</span> their stats, powers, origins, and
              affiliations.
            </li>
            <li>
              <span>Dive deeper</span> into detailed biographies and
              lesser-known facts.
            </li>
          </ul>
        </Reveal>
      </div>
      <div className={styles.aboutRightContainer}>
        <Reveal>
          <h2>Who we are</h2>
        </Reveal>
        <Reveal>
          <p>
            We are a team of passionate developers and superhero enthusiasts who
            believe that every hero—big or small, mainstream or obscure—deserves
            a spotlight. By combining technology and fandom, we’ve built a space
            where superhero lovers can explore and learn more about the heroes
            they admire.
          </p>
        </Reveal>
        <Reveal>
          <h3>How it works</h3>
        </Reveal>

        <Reveal>
          <ul>
            <li>
              <span>Search</span> for a superhero using our smart search tool.
            </li>
            <li>
              <span>Explore</span> their powers, history, and connections.
            </li>
            <li>
              <span>Dive</span> into details with interactive hero cards.
            </li>
          </ul>
        </Reveal>
        <Reveal>
          <h4>Join Us on This Heroic Journey!</h4>
        </Reveal>
        <Reveal>
          <p className={styles.contactParagraph}>
            Got a favorite superhero you’d love to see featured? Have ideas to
            make our platform even better? We’d love to hear from you! Connect
            with us and become part of our growing community.
          </p>
        </Reveal>
        
          <button className={styles.aboutButton}>
            <Link to="contact" />
            Contact
          </button>
        
      </div>
    </section>
  );
};

export default AboutPage;
