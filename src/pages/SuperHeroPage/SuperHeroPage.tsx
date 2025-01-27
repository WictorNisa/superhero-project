import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { fetchById, fetchByName } from "../../services/ApiSearchFetch";
import HeroDisplay from "../../components/HeroDisplay/HeroDisplay";
import styles from "./SuperHeroPage.module.css";

const SuperHeroPage = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const { heroDetails, setHeroDetails } = useState<any>(null);

  const onSubmitHandle = (searchQuery: string, e: any) => {
    e.preventDefault();
    fetchByName(searchQuery).then((res) => {
      setSearchInput(res);
    });
  };

  const onClickHandle = (heroID: string) => {
    fetchById(heroID).then((res) => {
      setHeroDetails(res);
    });
  };

  return (
    <>
      <section className={styles.s1}>
        <div>
          {/* Lookup your favourite superhero chicken on the corn on the corn cane
          ummmmhmm */}
          <SearchForm onSubmitHandle={onSubmitHandle} />
          <HeroDisplay searchInput={searchInput} />
          <DetailsCard heroDetails={heroDetails} onFetchHero={onClickHandle} />
        </div>
      </section>
    </>
  );
};

export default SuperHeroPage;
