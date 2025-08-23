import { useState } from "react";

import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import CharacterCard from "../../components/CharacterCard";
import { CardsContainer, Container, MainContent } from "./Home.styled";
import { useFetchCharacters } from "../../hooks/useFetchCharacters";
import EmptyState from "../../components/EmptyState";
import Loading from "../../components/Loading";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { characters, loading } = useFetchCharacters(searchTerm);

  return (
    <Container>
      <Navbar />

      <MainContent>
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          resultsCount={characters.length}
        />

        {loading ? (
          <Loading />
        ) : characters.length === 0 ? (
          <EmptyState message="No characters found" />
        ) : (
          <CardsContainer>
            {characters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </CardsContainer>
        )}
      </MainContent>
    </Container>
  );
};

export default Home;