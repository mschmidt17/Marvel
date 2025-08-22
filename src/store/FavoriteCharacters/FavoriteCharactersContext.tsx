import { createContext, useState, type FC, type PropsWithChildren } from 'react';
import type { FavoriteCharactersContextProps } from './FavoriteCharactersContext.types';
import type { Character } from '../../api/marvelApi';

export const FavoriteCharactersContext = createContext<FavoriteCharactersContextProps | undefined>(undefined);

export const FavoriteCharactersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  const addFavorite = (character: Character) => setFavorites((prev) => [...prev, character]);
  const removeFavorite = (id: number) => setFavorites((prev) => prev.filter((favorite) => favorite.id !== id));
  const toggleFavorite = (character: Character) =>
    isFavorite(character.id) ? removeFavorite(character.id) : addFavorite(character);
  const isFavorite = (id: number) => favorites.some((favorite) => favorite.id === id);

  return (
    <FavoriteCharactersContext.Provider
      value={{ favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoriteCharactersContext.Provider>
  );
};