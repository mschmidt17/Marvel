import { useState, useEffect, useMemo } from 'react';
import { getCharacters } from '../api/marvelApi';
import type { Character } from '../api/marvelApi';

export const useFetchCharacters = (searchTerm: string = '') => {
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const data = await getCharacters(50, searchTerm);
      setAllCharacters(data);
      setLoading(false);
    };
    fetchCharacters();
  }, [searchTerm]);

  // Filtrado en tiempo real según el searchTerm
  const characters = useMemo(
    () =>
      allCharacters.filter((char) => char.name.toLowerCase().includes(searchTerm.toLowerCase())),
    [allCharacters, searchTerm],
  );

  return { characters, loading };
};
