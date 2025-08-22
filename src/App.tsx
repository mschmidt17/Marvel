import { useState } from "react";
import { useFetchCharacters } from "./hooks/useFetchCharacters";

import "./App.css";
import CharacterCard from "./components/CharacterCard";


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { characters, loading } = useFetchCharacters(searchTerm);

  return (
    <div style={{ padding: "16px" }}>
      <h1>Marvel Characters</h1>
      <input
        type="text"
        placeholder="Search character..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "16px", padding: "8px", width: "300px" }}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
