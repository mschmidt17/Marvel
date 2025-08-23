import styled from "styled-components";

export const NavbarContainer = styled.header`
  width: 100%;
  height: 100px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const Logo = styled.img`
  height: 60px;
  cursor: pointer;
  margin-left: 5%;
`;

export const Favorites = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  margin-right: 5%;

  & > img {
    margin-right: 8px;
    height: 30px;
    width: 30px;
  }
`;
