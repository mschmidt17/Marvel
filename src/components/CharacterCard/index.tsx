import React from "react";
import type { Character } from "../../api/marvelApi";
import { Card, Thumbnail } from './CharacterCard.styled';

interface Props {
  character: Character;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <Card>
      <Thumbnail
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <h3>{character.name}</h3>
    </Card>
  );
};

export default CharacterCard;
