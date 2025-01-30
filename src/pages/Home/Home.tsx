import { useEffect, useState } from "react";
import RandomCard from "../../components/RandomCard/RandomCard";
import { fetchRandomFromAPI } from "../../services/ApiSearchFetch";
import styles from "./Home.module.css";
import Reveal from "../../components/Reveal/Reveal";
import { Link } from "react-router";
import AboutPage from "../../components/AboutPage/AboutPage";

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
    <main>
    <section className={styles.HomeContainer}>
      <div className={styles.introContainer}>
        <div className={styles.innerIntroContainer}>
          <Reveal>
            <h1>Welcome to SupeLore</h1>
          </Reveal>
          <Reveal>
            <h2>
              Your <span className={styles.ultimate}>Ultimate</span> Superhero Database!
            </h2>
          </Reveal>
          <Reveal>
            <p>
              Discover heroes, learn their stories, and get inspired by their
              powers.
            </p>
          </Reveal>
          <button className={styles.ctaButton}>
            <Link to="/superheropage">To the gallery</Link>
          </button>
        </div>
      </div>

      <div className={styles.randomHeroContainer}>
        {heroData && <RandomCard hero={heroData} onFetchNewHero={fetchData} />}
      </div>
    </section>
    <AboutPage/>
    </main>
  );
};

export default Home;
