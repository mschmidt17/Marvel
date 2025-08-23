import React, { useContext } from "react";
import { Logo, Favorites, NavbarContainer } from "./Navbar.styled";
import marvelLogo from "@/assets/marvel_logo.svg";
import heartFilled from "@/assets/heart_filled.svg";
import { FavoriteCharactersContext } from "../../store";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  onToggleFavorites?: () => void; 
  favoritesDisabled?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleFavorites,favoritesDisabled }) => {
  const context = useContext(FavoriteCharactersContext);

  if (!context) {
    throw new Error("Header must be used within FavoriteCharactersProvider");
  }

  const { favorites } = context; 
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <Logo src={marvelLogo} alt="Marvel Logo" onClick={() => navigate("/")} />
      <Favorites
        onClick={() => !favoritesDisabled && onToggleFavorites?.()}
        disabled={favoritesDisabled}
      >
        <img src={heartFilled} alt="Heart" />
        <span>{favorites.length}</span>
      </Favorites>
    </NavbarContainer>
  );
};

export default Navbar;
