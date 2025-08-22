import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc; /* divider */
  padding: 4px 8px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 16px;
  padding-bottom: 4px;
`;

export const ResultsText = styled.span`
  margin-left: 28px; 
  font-weight: 400;
  margin-top: 4px;
  font-size: 14px;
  color: #0c0c0cff;
`;
