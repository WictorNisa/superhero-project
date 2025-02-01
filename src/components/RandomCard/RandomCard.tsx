import { useState } from "react";
import styles from "./RandomCard.module.css";
import { motion, AnimatePresence } from "framer-motion";
import DetailsCard from "../DetailsCard/DetailsCard";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { Hero } from "../../types/heroTypes";

const RandomCard = ({
  hero,
  onFetchNewHero,
}: {
  hero: Hero;
  onFetchNewHero: () => void;
}) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <AnimatePresence mode="wait">
          <motion.img
            key={hero.id}
            src={hero.image.url}
            alt={hero.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={styles.heroImage}
          />
        </AnimatePresence>
        <h1 className={styles.heroName}>{hero.name}</h1>
      </div>
      <div className={styles.detailsContainer}>
        <motion.button
          className={styles.detailsButton}
          onClick={() => setShowDetails(true)}
        >
          More details
        </motion.button>
        <motion.button
          className={styles.newHeroButton}
          onClick={onFetchNewHero}
        >
          Random
        </motion.button>
        <FavoriteButton heroId={hero.id} />
      </div>
      {showDetails && (
        <DetailsCard heroDetails={hero} onClose={() => setShowDetails(false)} />
      )}
    </div>
  );
};

export default RandomCard;
