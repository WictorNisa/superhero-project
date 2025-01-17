import styles from "./HeroCard.module.css";
const HeroCard = ({ hero }) => {
  return (
    <div className={styles.cardContainer}>
      <h1>{hero.name}</h1>
      <img src={hero.image.url} alt={hero.image} />
    </div>
  );
};

export default HeroCard;
