import { useState, useEffect } from "react";
import { useFavorites } from "../../contexts/FavoritesContext.tsx";
import HeroCard from "../../components/HeroCard/HeroCard.tsx";
import { fetchById } from "../../services/ApiSearchFetch.tsx";
import { Hero } from "../../types/heroTypes.ts";
import DetailsCard from "../../components/DetailsCard/DetailsCard.tsx";
import styles from "./FavoritesPage.module.css";

const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [heroDetails, setHeroDetails] = useState<Hero | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (favorites.length === 0) {
      setHeroes([]);
      return;
    }

    const fetchHeroes = async () => {
      const heroData = await Promise.all(
        favorites.map((id) => fetchById(String(id)))
      );
      setHeroes(heroData.filter((hero) => hero));
    };

    fetchHeroes();
  }, [favorites]);

  const handleShowDetails = async (heroID: string) => {
    const hero = await fetchById(heroID);
    setHeroDetails(hero);
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
    setHeroDetails(null);
  };

  return (
    <div>
      <h2>Favorite Heroes</h2>
      {heroes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="favorites-grid">
          {heroes.map((hero) => (
            <HeroCard
              key={`${hero.id}-${favorites.length}`}
              hero={hero}
              onFetchHero={() => handleShowDetails(String(hero.id))}
            />
          ))}
        </div>
      )}

      {showDetails && heroDetails && (
        <>
          <div className={styles.overlay} onClick={closeDetails}></div>
          <DetailsCard heroDetails={heroDetails} onClose={closeDetails} />
        </>
      )}
    </div>
  );
};

export default FavoritesPage;
