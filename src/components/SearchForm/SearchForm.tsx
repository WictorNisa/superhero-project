import { useState } from "react";

const SearchForm = ({ onSubmitHandle }) => {
  const [userInput, setUserInput] = useState<string>("");
  return (
    <form
      onSubmit={(e) => {
        onSubmitHandle(userInput, e);
      }}
    >
      <label htmlFor="search-name">Search for your favourite superhero</label>
      <input
        type="text"
        id="search-name"
        name="search-name"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchForm;
