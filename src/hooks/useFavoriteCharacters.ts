import { useContext, useMemo } from 'react';
import { FavoriteCharactersContext } from '../store';
import type { Character } from '../api/marvelApi';

export const useFavoriteCharacters = (search?: string) => {
  const context = useContext(FavoriteCharactersContext);

  if (!context) {
    throw new Error('useFavoriteCharacters must be used within a FavoriteCharactersProvider');
  }

  const filteredCharacters = useMemo(() => {
    if (!search?.length) return context.favorites;

    // Búsqueda simple por nombre, insensible a mayúsculas/minúsculas
    return context.favorites.filter((character: Character) =>
      character.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [context.favorites, search]);

  return { ...context, favorites: filteredCharacters };
};
