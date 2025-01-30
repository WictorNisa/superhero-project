import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { motion } from "framer-motion";
const Nav = () => {
  

const navLinks = ["Home", "About", "Contact"];
  return (
    <nav className={styles.nav}>
      {/* Temporary until we find a better logo */}
      <h1>SupeLore</h1>
      <ul className={styles.navList}>
        <li className={styles.listItem}>
          <Link to="/">Home</Link>
        </li>

        <li className={styles.listItem}>
          <Link to="/superheropage">Superhero gallery</Link>
        </li>

        <li className={styles.listItem}>
          <Link to="/favourites">Favourites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
