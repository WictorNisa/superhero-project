import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import "./index.css";
import App from "./App.tsx";
import SuperHeroPage from "./pages/SuperHeroPage/SuperHeroPage.tsx";
import Favorites from "./pages/Favorites/FavoritesPage.tsx";
import { FavoritesProvider } from "./contexts/FavoritesContext.tsx"; // adjust the path if needed

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
