import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0c0c0cff;
  padding: 4px 0;
`;

export const Icon = styled.img`
  width: 13px;
  height: 13px;
  margin: 0 7px 7px 0;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 16px;
  padding-bottom: 4px;

  &::placeholder {
    color: #b4b0b0ff; 
    opacity: 1; 
  }
`;

export const ResultsText = styled.span`
  margin-top: 4px;
  font-size: 14px;
  color: #0c0c0cff;
`;
