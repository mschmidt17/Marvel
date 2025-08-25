import type { Character } from '../../api/marvelApi';

export interface FavoriteCharactersContextProps {
  favorites: Character[];
  addFavorite: (character: Character) => void;
  removeFavorite: (id: number) => void;
  toggleFavorite: (character: Character) => void;
  isFavorite: (id: number) => boolean;
}
