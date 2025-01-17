import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { fetchFromAPI } from "../../services/ApiSearchFetch";
import HeroDisplay from "../../components/HeroDisplay/HeroDisplay";

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
      <section>
        Lookup your favourite superhero chicken on the corn on the corn cane
        ummmmhmm
      </section>
      <div>
        <SearchForm onSubmitHandle={onSubmitHandle} />
        <HeroDisplay searchInput={searchInput} />
      </div>
    </>
  );
};

export default SuperHeroPage;
