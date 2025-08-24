import { useContext } from "react";
import { Logo, Favorites, NavbarContainer } from "./Navbar.styled";
import marvelLogo from "@/assets/icon/marvel_logo.svg";
import heartFilled from "@/assets/icon/heart_filled.svg";
import { FavoriteCharactersContext } from "../../store";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  onToggleFavorites?: () => void; 
  onShowAll?: () => void; 
  favoritesDisabled?: boolean;
  isShowingFavorites?: boolean;
  navigateToHome?: boolean; 
}

const Navbar = ({
  onToggleFavorites,
  onShowAll,
  favoritesDisabled = false,
  isShowingFavorites = false,
  navigateToHome = false,
}: NavbarProps) => {
  const context = useContext(FavoriteCharactersContext);
  if (!context) {
    throw new Error("Navbar must be used within FavoriteCharactersProvider");
  }

  const { favorites } = context; 
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    onShowAll?.();
  };

  const handleFavoritesClick = () => {
    if (!favoritesDisabled && !isShowingFavorites) {
      if (navigateToHome) {
        navigate("/", { state: { showFavorites: true } });
      }
      onToggleFavorites?.();
    }
  };

  return (
    <NavbarContainer>
      <Logo
        src={marvelLogo}
        alt="Marvel Logo"
        role="button"
        tabIndex={0}
        onClick={handleLogoClick}
      />
      <Favorites
        as="button"
        onClick={handleFavoritesClick}
        disabled={favoritesDisabled || isShowingFavorites}
      >
        <img src={heartFilled} alt="Favoritos" />
        <span>{favorites.length}</span>
      </Favorites>
    </NavbarContainer>
  );
};

export default Navbar;
