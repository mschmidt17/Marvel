import React, { useContext, useMemo, useState } from "react";
import { FavoriteCharactersContext } from "../../store";
import Navbar from "../../components/Navbar";
import CharacterCard from "../../components/CharacterCard";
import { Cards, PageContainer, Title } from "./FavoritesPage.styled";
import EmptyState from "../../components/EmptyState";
import SearchBar from "../../components/SearchBar";

const FavoritesPage: React.FC = () => {
  const context = useContext(FavoriteCharactersContext);

  if (!context) {
    throw new Error("FavoritesPage must be used within FavoriteCharactersProvider");
  }

  const { favorites } = context;
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar favoritos según el search
  const filteredFavorites = useMemo(
    () =>
      favorites.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [favorites, searchTerm]
  );

  return (
    <PageContainer>
      <Navbar />
      <Title>FAVORITES</Title>

      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        resultsCount={filteredFavorites.length}
      />

      {filteredFavorites.length > 0 ? (
        <Cards>
          {filteredFavorites.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </Cards>
      ) : (
        <EmptyState message="No characters found" />
      )}
    </PageContainer>
  );
};

export default FavoritesPage;