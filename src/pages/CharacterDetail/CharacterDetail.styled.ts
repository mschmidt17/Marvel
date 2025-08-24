import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 0.5px solid rgba(65, 62, 62, 1);
`;

export const Content = styled.div`
  background: black;
  color: white;
  display: flex;
  align-items:center;
  width: 100%;
  justify-content:center;
  gap: 3%;
  animation: ${slideDown} 0.4s ease-out forwards;

`;

export const CharacterImage = styled.img`
  width: 400px;
  aspect-ratio: 1 / 1;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  justify-content: scpace-between;
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
  width: 700px; 
  word-wrap: break-word; 
  overflow-wrap: break-word;
  text-align: justify;
}
`;

export const ComicsContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: center;
  width: 63%;
  margin: 2% 0 6% 0;
  border-bottom: 5px solid transparent; 
  border-image: linear-gradient(to right, #EC1D24 24%, #D9D9D9 0) 1;
  animation: ${slideDown} 0.4s ease-out forwards;

}
`;