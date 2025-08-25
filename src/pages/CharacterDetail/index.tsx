import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getCharacterById, type Character } from '../../api/marvelApi';
import heartFilled from '@/assets/icon/heart_filled.svg';
import heartOutlined from '@/assets/icon/heart_outlined.svg';
import Navbar from '../../components/Navbar';
import {
  CharacterImage,
  CharacterName,
  ComicsContainer,
  Content,
  Description,
  Divider,
  FavoriteIcon,
  Header,
  Wrapper,
} from './CharacterDetail.styled';
import { FavoriteCharactersContext } from '../../store';
import Loading from '../../components/Loading';
import { useFetchComics } from '../../hooks/useFetchComics';
import RelatedComics from '../../components/RelatedComics';
import { Title } from '../Home/Home.styled';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const characterId = character?.id;
  const { comics: relatedComics } = useFetchComics(characterId ?? 0);

  const context = useContext(FavoriteCharactersContext);
  if (!context) {
    throw new Error('CharacterDetail must be used within FavoriteCharactersProvider');
  }
  const { toggleFavorite, isFavorite, favorites } = context;

  useEffect(() => {
    if (id) {
      setLoading(true);
      getCharacterById(Number(id))
        .then((char) => {
          setTimeout(() => {
            setCharacter(char);
            setLoading(false);
          }, 800);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  if (!loading && !character) {
    return <p style={{ color: 'white' }}>Character not found.</p>;
  }

  const favorite = character ? isFavorite(character.id) : false;

  return (
    <Wrapper>
      <Navbar navigateToHome={true} favoritesDisabled={favorites.length === 0} />
      <Loading loading={loading} duration={1000} />

      {!loading && character && (
        <>
          <Divider />
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
                  alt={favorite ? 'Favorito' : 'No favorito'}
                  onClick={() => toggleFavorite(character)}
                />
              </Header>

              <Description>
                Adam Warlock is an artificially created human who was born in a cocoon at a
                scientific complex called The Beehive.
              </Description>
            </div>
          </Content>

          <ComicsContainer>
            <Title>COMICS</Title>
            <RelatedComics comics={relatedComics} />
          </ComicsContainer>
        </>
      )}
    </Wrapper>
  );
};

export default CharacterDetail;
