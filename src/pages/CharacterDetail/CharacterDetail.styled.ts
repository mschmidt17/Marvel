import styled from "styled-components";

export const Wrapper = styled.div`
  background: black;
  min-height: 100vh;
  color: white;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
`;

export const CharacterImage = styled.img`
  width: 100%;
  border-radius: 12px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const CharacterName = styled.h1`
  flex: 1;
  font-size: 2rem;
  font-weight: bold;
`;

export const FavoriteIcon = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

export const Description = styled.p`
  margin-top: 1rem;
  line-height: 1.6;
`;
