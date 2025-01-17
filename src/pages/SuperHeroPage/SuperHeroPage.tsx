import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { fetchDataByName } from "../../services/ApiSearchFetch";

const SuperHeroPage = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  

  const onSubmitHandle = (searchQuery: string, e: any) => {
    e.preventDefault();
    fetchDataByName(searchQuery).then((res) => {
        setSearchInput(res)
        console.log(searchInput);
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
      </div>
    </>
  );
};

export default SuperHeroPage;
