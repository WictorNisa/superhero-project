import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./index.css";
import App from "./App";
import SuperHeroPage from "./pages/SuperHeroPage/SuperHeroPage";
import Favorites from "./pages/Favorites/FavoritesPage";
import { FavoritesProvider } from "./contexts/FavoritesContext";

createRoot(document.getElementById("root")!).render(
  <FavoritesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/superheropage" element={<SuperHeroPage />} />
          <Route path="/favourites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </FavoritesProvider>
);
