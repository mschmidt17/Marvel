import { useContext, useMemo, useState } from "react";

import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import CharacterCard from "../../components/CharacterCard";
import { CardsContainer, Container, MainContent, Title } from "./Home.styled";
import { useFetchCharacters } from "../../hooks/useFetchCharacters";
import EmptyState from "../../components/EmptyState";
import Loading from "../../components/Loading";
import { FavoriteCharactersContext } from "../../store";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);
  const { characters, loading } = useFetchCharacters(searchTerm);

  const context = useContext(FavoriteCharactersContext);
  if (!context) {
    throw new Error("Home must be used within FavoriteCharactersProvider");
  }
  const { favorites } = context;

  // Filtrar los personajes a mostrar según search y favoritos
  const displayedCharacters = useMemo(() => {
    const list = showFavorites ? favorites : characters;
    return list.filter((char) =>
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [showFavorites, favorites, characters, searchTerm]);

  return (
    <Container>
      <Navbar
        onToggleFavorites={() => setShowFavorites(prev => !prev)}
        favoritesDisabled={favorites.length === 0}
      />
      <MainContent>
        {showFavorites ? <Title>FAVORITES</Title> : null }
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
            {displayedCharacters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </CardsContainer>
        )}
      </MainContent>
    </Container>
  );
};

export default Home;