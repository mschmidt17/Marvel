import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getCharacterById, type Character } from "../../api/marvelApi";
import heartFilled from "@/assets/heart_filled.svg";
import heartOutlined from "@/assets/heart_outlined.svg";
import Navbar from "../../components/Navbar";
import { CharacterImage, CharacterName, Content, Description, Divider, FavoriteIcon, Header, Wrapper } from "./CharacterDetail.styled";
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
      <Navbar/>
      <Divider/>
      <Content>
        <CharacterImage
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
        <div>
          <Header>
            <CharacterName>{character.name.toUpperCase()}</CharacterName>
            <FavoriteIcon
              src={favorite ? heartFilled : heartOutlined}
              alt={favorite ? "Favorito" : "No favorito"}
              onClick={() => toggleFavorite(character)}
            />
          </Header>

          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </Description>
        </div>
      </Content>
    </Wrapper>
  );
};

export default CharacterDetail;
