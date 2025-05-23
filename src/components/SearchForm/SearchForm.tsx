import { useState } from "react";
import styles from "./SearchForm.module.css";

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
      className={styles.searchform}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandle(userInput, e);
      }}
    >
      <label htmlFor="search-name">Search for your favorite superhero</label>
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
