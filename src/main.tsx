import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import "./index.css";
import App from "./App.tsx";
import SuperHeroPage from "./pages/SuperHeroPage/SuperHeroPage.tsx";
import Favourites from "./pages/Favourites/Favourites.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/superheropage" element={<SuperHeroPage />} />
        <Route path="/favourites" element={<Favourites />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
