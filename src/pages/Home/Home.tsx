import { useEffect, useState } from "react";
import RandomCard from "../../components/RandomCard/RandomCard";
import { fetchRandomFromAPI } from "../../services/ApiSearchFetch";
import styles from "./Home.module.css";

interface HeroData {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

const Home = () => {
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  const fetchData = async () => {
    const data: HeroData = await fetchRandomFromAPI();
    setHeroData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={styles.HomeContainer}>
      <h1>Welcome to the home page about superheroes</h1>
      {heroData && <RandomCard hero={heroData} onFetchNewHero={fetchData} />}
    </section>
  );
};

export default Home;
