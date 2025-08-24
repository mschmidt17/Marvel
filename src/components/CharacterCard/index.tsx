import React, { useContext } from "react";
import { Card, Thumbnail, Footer, FavoriteIcon, CharacterName, RedDivider, CardWrapper } from "./CharacterCard.styled";
import heartFilled from "@/assets/icon/heart_filled.svg";
import heartOutlined from "@/assets/icon/heart_outlined.svg";
import type { Character } from "../../api/marvelApi";
import { FavoriteCharactersContext } from "../../store";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/character/${character.id}`);
  };

  const handleFavoriteClick = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    e.stopPropagation(); 
    toggleFavorite(character);
  };

  return (
    <CardWrapper>
      <Card>
        <Thumbnail
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          onClick={handleCardClick}
        />
        <Footer>
          <RedDivider />
          <CharacterName>{character.name.toUpperCase()}</CharacterName>
          <FavoriteIcon
            src={favorite ? heartFilled : heartOutlined}
            alt={favorite ? "Favorito" : "No favorito"}
            onClick={handleFavoriteClick}
          />
        </Footer>
      </Card>
    </CardWrapper>
  );
};

export default CharacterCard;