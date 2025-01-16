import { Link } from "react-router-dom";
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h1>Navbar</h1>
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
