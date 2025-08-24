import styled from "styled-components";

export const Container = styled.div`
  height: 4px;
  width: 100%;
  background-color: rgba(255, 0, 0, 0.53); 
  position: relative;
  margin-top: -4px; /* justo debajo del navbar */
`;

export const Progress = styled.div`
  height: 100%;
  background-color: red; 
  width: 0%;
  transition: width 0.1s linear; 
`;
