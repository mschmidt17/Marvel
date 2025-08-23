import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 150px;
  height: 280px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
`;

export const Thumbnail = styled.img`
  flex: 1;
  width: 100%;
  object-fit: cover;
`;

export const Footer = styled.div`
  position: relative; /* para el divider absoluto */
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  height: 40px;
  overflow: hidden; /* para que el divider no se salga */
`;

export const RedDivider = styled.div`
  position: absolute;
  top: 0; /* empieza desde la parte superior del footer */
  left: 0;
  width: 100%;
  height: 4px; /* altura inicial */
  background-color: red;
  transition: height 0.3s ease;
  z-index: 0; /* debajo del contenido del footer */
`;

export const CharacterName = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  z-index: 1; /* encima del divider */
`;

export const FavoriteIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 1; /* encima del divider */
`;

export const CardWrapper = styled.div`
  &:hover ${Footer} ${RedDivider} {
    height: 100%; /* cubre todo el footer sin tocar la imagen */
  }
`;
