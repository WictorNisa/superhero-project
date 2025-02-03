import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";


const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "Switch to light mode" : "Switch to dark mode"}
    </button>
  );
};


export default ThemeToggle