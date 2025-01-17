import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { fetchFromAPI } from "../../services/ApiSearchFetch";
import HeroDisplay from "../../components/HeroDisplay/HeroDisplay";
import styles from "./SuperHeroPage.module.css";

const SuperHeroPage = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  const onSubmitHandle = (searchQuery: string, e: any) => {
    e.preventDefault();
    fetchFromAPI(searchQuery).then((res) => {
      setSearchInput(res);
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
        </div>
      </section>
    </>
  );
};

export default SuperHeroPage;
