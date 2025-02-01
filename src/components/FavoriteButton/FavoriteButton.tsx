import React from "react";
import IconButton from "@mui/material/IconButton";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { useFavorites } from "../../contexts/FavoritesContext";

type FavoriteButtonProps = {
  heroId: string;
};

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ heroId }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  return (
    <IconButton
      onClick={() => toggleFavorite(heroId)}
      aria-label="toggle favorite"
    >
      {isFavorite(heroId) ? (
        <Favorite sx={{ color: "red" }} />
      ) : (
        <FavoriteBorder />
      )}
    </IconButton>
  );
};

export default FavoriteButton;
