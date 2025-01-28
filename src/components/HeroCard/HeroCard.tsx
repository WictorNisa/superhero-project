import styles from "./HeroCard.module.css";

interface Hero {
  id: string;
  name: string;
  image: {
    url: string;
  };
  biography: {
    aliases: string[];
  };
}

const HeroCard = ({
  hero,
  onFetchHero,
}: {
  hero: Hero;
  onFetchHero: (heroID: string) => void;
}) => {
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
      </div>
    </div>
  );
};

export default HeroCard;
