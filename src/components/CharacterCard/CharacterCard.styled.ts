import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ccc;
  width: 210px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
`;

export const Thumbnail = styled.img`
  aspect-ratio: 1 / 1;
  width: 100%;
  object-fit: cover;
`;

export const Footer = styled.div`
  position: relative;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 18px;
  height: 60px;
  overflow: hidden; 
`;

export const RedDivider = styled.div`
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%;
  height: 4px; 
  background-color: red;
  transition: height 0.3s ease;
  z-index: 0; 
`;

export const CharacterName = styled.span`
  font-size: 14px;
  color: #fff;
  z-index: 1; 
`;

export const FavoriteIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
  z-index: 1; 
`;

export const CardWrapper = styled.div`
  &:hover ${Footer} ${RedDivider} {
    height: 100%; 
  }
`;
