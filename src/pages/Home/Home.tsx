import styles from "./Home.module.css";
import { fetchRandomFromAPI } from "../../services/ApiSearchFetch";
import { useEffect, useState } from "react";

// Define the type for the superhero data
interface HeroData {
  image: {
    url: string;
  };
  name: string;
}

const Home = () => {
  // State for fetched data, HeroData : null
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  // Function for calling Random Fetch
  const fetchData = async () => {
    const data: HeroData = await fetchRandomFromAPI();
    setHeroData(data);
  };

  // Call on Load
  useEffect(() => {
    fetchData();
  }, []);

  // Call on Button click
  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <section className={styles.HomeContainer}>
      <div className={styles.HomeContainerInner}>
        <h1> Welcome to the home page about superheroes</h1>
        <div className={styles.imageWrapper}>
          {/* Render image if no problems */}
          {heroData && heroData.image && (
            <img src={heroData.image.url} alt={heroData.name || "Superhero"} />
          )}
        </div>
        <h2 className={styles.HomeContainerH2}>{heroData?.name}</h2>
        <button onClick={handleButtonClick}>Give me another Hero!</button>
      </div>
    </section>
  );
};

export default Home;
