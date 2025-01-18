import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <img
        className={styles.navLogo}
        src="./src/assets/img/superherodb_logo.svg"
        alt="logo"
      />
      <ul className={styles.linkList}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/superheropage">Superhero gallery</Link>
        </li>

        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
