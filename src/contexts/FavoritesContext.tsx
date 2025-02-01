import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const STORAGE_KEY = "favorites";

interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (heroId: string) => void;
  isFavorite: (heroId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const storedFavorites = localStorage.getItem(STORAGE_KEY);
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (heroId: string) => {
    setFavorites((prevFavorites) => {
      const isFav = prevFavorites.includes(heroId);
      return isFav
        ? prevFavorites.filter((id) => id !== heroId)
        : [...prevFavorites, heroId];
    });
  };

  const isFavorite = (heroId: string) => favorites.includes(heroId);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
