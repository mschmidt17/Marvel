import React, { useContext } from "react";
import { Logo, Favorites, NavbarContainer } from "./Navbar.styled";
import marvelLogo from "@/assets/marvel_logo.svg";
import heartFilled from "@/assets/heart_filled.svg";
import { FavoriteCharactersContext } from "../../store";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const context = useContext(FavoriteCharactersContext);

  if (!context) {
    throw new Error("Header must be used within FavoriteCharactersProvider");
  }

  const { favorites } = context; 
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <Logo src={marvelLogo} alt="Marvel Logo" onClick={() => navigate("/")} />
      <Favorites onClick={() => navigate("/favorites")} style={{ cursor: "pointer" }}>
        <img src={heartFilled} alt="Corazones" />
        <span>{favorites.length}</span>
      </Favorites>
    </NavbarContainer>
  );
};

export default Navbar;
