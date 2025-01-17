import { useState } from "react";

type SearchFormProps = {
  onSubmitHandle: (
    userInput: string,
    event: React.FormEvent<HTMLFormElement>
  ) => void;
};

const SearchForm: React.FC<SearchFormProps> = ({ onSubmitHandle }) => {
  const [userInput, setUserInput] = useState<string>("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
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
        value={userInput}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
