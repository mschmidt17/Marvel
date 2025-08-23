import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getCharacterById, type Character } from "../../api/marvelApi";
import heartFilled from "@/assets/heart_filled.svg";
import heartOutlined from "@/assets/heart_outlined.svg";
import Navbar from "../../components/Navbar";
import { CharacterImage, CharacterName, Content, Description, FavoriteIcon, Header, Wrapper } from "./CharacterDetail.styled";
import { FavoriteCharactersContext } from "../../store";
import Loading from "../../components/Loading";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  const context = useContext(FavoriteCharactersContext);
  if (!context) {
    throw new Error("CharacterDetail must be used within FavoriteCharactersProvider");
  }
  const { toggleFavorite, isFavorite } = context;

  useEffect(() => {
    if (id) {
      setLoading(true);
      getCharacterById(Number(id))
        .then(setCharacter)
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return (
    <>
      <Navbar />
      <Loading duration={1500} />
    </>
  );

  if (!character) return <p style={{ color: "white" }}>Character not found.</p>;

  const favorite = isFavorite(character.id);

  return (
    <Wrapper>
      <Navbar />
      <Content>
        <CharacterImage
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />

        <Header>
          <CharacterName>{character.name}</CharacterName>
          <FavoriteIcon
            src={favorite ? heartFilled : heartOutlined}
            alt={favorite ? "Favorito" : "No favorito"}
            onClick={() => toggleFavorite(character)}
          />
        </Header>

        <Description>
          {character.description || "No description available."}
        </Description>
      </Content>
    </Wrapper>
  );
};

export default CharacterDetail;
