import "./styles/App.css";
import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";
import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext";

function AppWrapper() {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      {" "}
      {/* This wrapper controls dark mode styling */}
      <Nav />
      <main>
        <Outlet /> {/* This renders the child route content */}
      </main>
    </div>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <AppWrapper />
    </DarkModeProvider>
  );
}

export default App;
