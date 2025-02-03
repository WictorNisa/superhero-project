import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { useDarkMode } from "../../context/DarkModeContext";
import React from "react";

const Nav = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
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
      <button onClick={toggleDarkMode} className={styles.toggleButton}>
        {darkMode ? <p>Light Mode</p> : <p>Dark Mode</p>}
      </button>
    </nav>
  );
};  

export default Nav;
