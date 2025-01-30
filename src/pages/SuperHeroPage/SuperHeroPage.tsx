import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { fetchByName, fetchById } from "../../services/ApiSearchFetch";
import HeroDisplay from "../../components/HeroDisplay/HeroDisplay";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import styles from "./SuperHeroPage.module.css";

const SuperHeroPage = () => {
  const [searchInput, setSearchInput] = useState<any>(null); // Update based on API response type
  const [heroDetails, setHeroDetails] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);

  const onSubmitHandle = async (
    searchQuery: string,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const res = await fetchByName(searchQuery);
    setSearchInput(res);
    setShowDetails(false); // Close any open DetailsCard when searching again
  };

  const onClickHandle = async (heroID: string) => {
    const res = await fetchById(heroID);
    setHeroDetails(res);
    setShowDetails(true); // Show the DetailsCard
  };

  const closeDetails = () => {
    setShowDetails(false); // Hide the DetailsCard
  };

  return (
    <>
      <section className={styles.superHeroPageContainer}>
        <div>
          <SearchForm onSubmitHandle={onSubmitHandle} />
          <HeroDisplay searchInput={searchInput} onFetchHero={onClickHandle} />
          {showDetails && (
            <>
              <div className={styles.overlay} onClick={closeDetails}></div>
              <DetailsCard heroDetails={heroDetails} onClose={closeDetails} />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default SuperHeroPage;