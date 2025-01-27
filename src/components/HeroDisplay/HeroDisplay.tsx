import { useState, useEffect } from "react";
import HeroCard from "../HeroCard/HeroCard";
import styles from "./HeroDisplay.module.css";

const HeroDisplay = ({ searchInput }: { searchInput: string }) => {
  const [superHeroes, setSuperheroes] = useState([]);

  useEffect(() => {
    if (searchInput && searchInput.results) {
      setSuperheroes(searchInput.results);
    }
  }, [searchInput]);

  return (
    <section className={styles.HeroDisplayContainer}>
      <div className={styles.HeroDisplayInnerContainer}>
        {superHeroes.length > 0 ? (
          superHeroes.map((hero) => <HeroCard key={hero.id} hero={hero} />)
        ) : (
          <p>no heroes found</p>
        )}
      </div>
    </section>
  );
};

export default HeroDisplay;
