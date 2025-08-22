import { useState } from "react";
import { useFetchCharacters } from "./hooks/useFetchCharacters";

import CharacterCard from "./components/CharacterCard";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

import { AppContainer, CardsContainer, MainContent } from "./App.styled";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { characters, loading } = useFetchCharacters(searchTerm);

  return (
    <AppContainer>
      <Header />

      <MainContent>
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          resultsCount={characters.length}
        />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <CardsContainer>
            {characters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </CardsContainer>
        )}
      </MainContent>
    </AppContainer>
  );
}

export default App;
