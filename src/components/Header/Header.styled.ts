import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

export const Favorites = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 18px;
  cursor: pointer;

  & > img {
    margin-right: 8px;
    height: 20px;
    width: 20px;
  }
`;
