import { useState, useEffect } from "react";
import { getCharacters } from "../api/marvelApi";
import type { Character } from "../api/marvelApi";

export const useFetchCharacters = (searchTerm: string = "") => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const data = await getCharacters(50, searchTerm);
      setCharacters(data);
      setLoading(false);
    };
    fetchCharacters();
  }, [searchTerm]);

  return { characters, loading };
};