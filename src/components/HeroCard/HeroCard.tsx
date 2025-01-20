import styles from "./HeroCard.module.css";

interface Hero {
  name: string;
  image: {
    url: string;
  };
  aliases: string[];
}

interface HeroCardProps {
  hero: Hero;
}

const HeroCard = ({ hero }: HeroCardProps) => {
  console.log(hero);
  const hasAliases =
    Array.isArray(hero.biography.aliases) &&
    hero.biography.aliases.length > 0 &&
    !(hero.biography.aliases.length === 1 && hero.biography.aliases[0] === "-");

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        {hasAliases ? (
          <p className={styles.aliasesText}>{hero.biography.aliases[0]}</p> // Display the first alias
        ) : (
          <p className={styles.aliasesText}>No aliases known</p> // Fallback message
        )}
        <img src={hero.image.url} alt={hero.name} />
        <h1>{hero.name}</h1>
      </div>
      <div className={styles.detailsContainer}>
        <button className={styles.detailsButton}>
          <h2>More details</h2>
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
