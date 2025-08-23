import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
  color: white;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: 24px;
  font-size: 32px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
`;

export const SearchBar = styled.input`
  margin: 20px 0;
  padding: 10px 16px;
  width: 60%;
  max-width: 500px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  outline: none;
`;

export const Cards = styled.div`
  display: flex;
  gap: 16px;
  padding: 24px;
  width: 100%;
  max-width: 1200px;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  margin-top: 50px;
  font-size: 18px;
  color: gray;
`;
