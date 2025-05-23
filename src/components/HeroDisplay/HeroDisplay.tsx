import HeroCard from "../HeroCard/HeroCard";
import styles from "./HeroDisplay.module.css";
import { HeroApiResponse } from "../../types/heroTypes";

const HeroDisplay: React.FC<{
  searchInput: HeroApiResponse | null;
  onFetchHero: (heroID: string) => void;
}> = ({ searchInput, onFetchHero }) => {
  const heroes = searchInput?.results || [];

  return (
    <section className={styles.HeroDisplayContainer}>
      <div className={styles.HeroDisplayInnerContainer}>
        {heroes.length > 0 ? (
          heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} onFetchHero={onFetchHero} />
          ))
        ) : (
          <p>No heroes found</p>
        )}
      </div>
    </section>
  );
};

export default HeroDisplay;
