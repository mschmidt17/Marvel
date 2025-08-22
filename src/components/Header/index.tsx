import React, { useContext } from "react";
import { HeaderContainer, Logo, Favorites } from "./Header.styled";
import marvelLogo from "@/assets/marvel_logo.svg";
import heartFilled from "@/assets/heart_filled.svg";
import { FavoriteCharactersContext } from "../../store";


const Header: React.FC = () => {
  const context = useContext(FavoriteCharactersContext);

  if (!context) {
    throw new Error("Header must be used within FavoriteCharactersProvider");
  }

  const { favorites } = context; // 🔹 usar "favorites" en lugar de "favoriteCharacters"

  return (
    <HeaderContainer>
      <Logo src={marvelLogo} alt="Marvel Logo" />
      <Favorites>
        <img src={heartFilled} alt="Corazones" />
        <span>{favorites.length}</span>
      </Favorites>
    </HeaderContainer>
  );
};

export default Header;
