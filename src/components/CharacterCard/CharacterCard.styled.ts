import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 150px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  // height: 200px; 
`;

export const Thumbnail = styled.img`
  flex: 1;         
  width: 100%;
  object-fit: cover; 
`;

export const Footer = styled.div`
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
`;

export const FavoriteIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
