import { useState, useEffect, useMemo } from 'react';
import { getCharacters } from '../api/marvelApi';
import type { Character } from '../api/marvelApi';

export const useFetchCharacters = (searchTerm: string = '') => {
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const data = await getCharacters(50, searchTerm);
        setTimeout(() => {
          setAllCharacters(data.filter((char) => char && char.name));
          setLoading(false);
        }, 800);
      } catch (err) {
        console.error('Error al obtener personajes:', err);
        setAllCharacters([]);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [searchTerm]);

  const characters = useMemo(
    () =>
      allCharacters.filter(
        (char) => char.name && char.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [allCharacters, searchTerm],
  );

  return { characters, loading };
};
