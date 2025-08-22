import React, { useContext } from "react";
import { Card, Thumbnail, Footer, FavoriteIcon, CharacterName, RedDivider, CardWrapper } from "./CharacterCard.styled";
import heartFilled from "@/assets/heart_filled.svg";
import heartOutlined from "@/assets/heart_outlined.svg";
import type { Character } from "../../api/marvelApi";
import { FavoriteCharactersContext } from "../../store";

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
    <CardWrapper>
      <Card>
        <Thumbnail src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        <Footer>
          <RedDivider />
          <CharacterName>{character.name}</CharacterName>
          <FavoriteIcon
            src={favorite ? heartFilled : heartOutlined}
            alt={favorite ? "Favorito" : "No favorito"}
            onClick={() => toggleFavorite(character)}
          />
        </Footer>
      </Card>
    </CardWrapper>
  );
};

export default CharacterCard;
