import React, { useContext } from "react";
import type { Character } from "../../../api/marvelApi";
import { Card, Thumbnail, FavoriteIcon } from "./CharacterCard.styled";
import heartFilled from "@/assets/heart_filled.svg";
import heartOutlined from "@/assets/heart_outlined.svg";
import { FavoriteCharactersContext } from "../../../store";

interface Props {
  character: Character;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
  const context = useContext(FavoriteCharactersContext);

  if (!context) {
    throw new Error("CharacterCard must be used within FavoriteCharactersProvider");
  }

  const { toggleFavorite, isFavorite } = context;
  const favorite = isFavorite(character.id);

  return (
    <Card>
      <Thumbnail
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <h3>{character.name}</h3>
      <FavoriteIcon
        src={favorite ? heartFilled : heartOutlined}
        alt={favorite ? "Favorito" : "No favorito"}
        onClick={() => toggleFavorite(character)}
      />
    </Card>
  );
};

export default CharacterCard;
