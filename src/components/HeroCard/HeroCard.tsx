import styles from "./HeroCard.module.css";
import { Hero } from "../../types/heroTypes";
import FavoriteButton from "../FavoriteButton/FavoriteButton"; // ✅ Ensure FavoriteButton is imported correctly

interface HeroCardProps {
  hero: Hero;
  onFetchHero: (heroID: string) => void;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero, onFetchHero }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={hero.image.url} alt={hero.name} />
        <h1>{hero.name}</h1>
      </div>
      <div className={styles.detailsContainer}>
        <button
          className={styles.detailsButton}
          onClick={() => onFetchHero(hero.id)}
        >
          <h2>More details</h2>
        </button>
        <FavoriteButton heroId={hero.id} />
      </div>
    </div>
  );
};

export default HeroCard;
