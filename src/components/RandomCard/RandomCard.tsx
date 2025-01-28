import React, { useState } from "react";
import styles from "./RandomCard.module.css";
import { useNavigate } from "react-router-dom";
import DetailsCard from "../DetailsCard/DetailsCard.tsx";

interface Hero {
  id: string;
  name: string;
  image: {
    url: string;
  };
  biography: {
    aliases: string[];
  };
  powerstats: {
    [key: string]: number;
  };
  appearance: {
    [key: string]: string | string[];
  };
  work: {
    [key: string]: string;
  };
  connections: {
    [key: string]: string;
  };
}

const RandomCard = ({
  hero,
  onFetchNewHero,
}: {
  hero: Hero;
  onFetchNewHero: () => void;
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsClick = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={hero.image.url} alt={hero.name} />
        <h1>{hero.name}</h1>
      </div>
      <div className={styles.detailsContainer}>
        <button className={styles.detailsButton} onClick={handleDetailsClick}>
          More details
        </button>
        <button className={styles.newHeroButton} onClick={onFetchNewHero}>
          New Random Hero
        </button>
      </div>

      {showDetails && (
        <DetailsCard heroDetails={hero} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default RandomCard;
