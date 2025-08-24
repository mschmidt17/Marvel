import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import { useLocation } from "react-router-dom";
import CharacterCard from "../../components/CharacterCard";
import { CardsContainer, Container, MainContent, Title } from "./Home.styled";
import EmptyState from "../../components/EmptyState";
import Loading from "../../components/Loading";
import { FavoriteCharactersContext } from "../../store";
import { useContext, useMemo, useState } from "react";
import { useFetchCharacters } from "../../hooks/useFetchCharacters";
import type { Character } from "../../api/mockCharacters";


const Home = () => {
  const location = useLocation();
  const showFavoritesFromState = location.state?.showFavorites ?? false;
  const [showFavorites, setShowFavorites] = useState(showFavoritesFromState);
  const [searchTerm, setSearchTerm] = useState("");
  const { characters, loading } = useFetchCharacters(searchTerm);

  const context = useContext(FavoriteCharactersContext);
  if (!context) {
    throw new Error("Home must be used within FavoriteCharactersProvider");
  }
  const { favorites } = context;

  // Filtrar los personajes a mostrar según search y favoritos
  const displayedCharacters = useMemo(() => {
  const list = showFavorites ? favorites : characters;

    return list.filter((char: Character) =>
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [showFavorites, favorites, characters, searchTerm]);

  return (
    <Container>
      <Navbar
        onToggleFavorites={() => setShowFavorites(true)}
        onShowAll={() => {
          setShowFavorites(false);
          setSearchTerm(""); 
        }}
        favoritesDisabled={favorites.length === 0}
        isShowingFavorites={showFavorites}
      />
      <MainContent show={showFavorites}>
        {showFavorites ? <Title>FAVORITES</Title> : null }
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        resultsCount={displayedCharacters.length}
      />

        {loading ? (
          <Loading />
        ) : displayedCharacters.length === 0 ? (
          <EmptyState
            message={"No characters found"}
          />
        ) : (
          <CardsContainer>
            {displayedCharacters.map((char: Character) => (
            <CharacterCard key={char.id} character={char} />
            ))}
          </CardsContainer>
        )}
      </MainContent>
    </Container>
  );
};

export default Home;