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
        // Filtramos solo personajes válidos con name
        setAllCharacters(data.filter((char) => char && char.name));
      } catch (err) {
        console.error('Error al obtener personajes:', err);
        setAllCharacters([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [searchTerm]);

  // Filtrado en tiempo real según searchTerm
  const characters = useMemo(
    () =>
      allCharacters.filter(
        (char) => char.name && char.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [allCharacters, searchTerm],
  );

  return { characters, loading };
};
