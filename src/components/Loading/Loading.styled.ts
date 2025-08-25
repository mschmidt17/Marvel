import styled, { keyframes } from 'styled-components';

const grow = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

export const Container = styled.div`
  height: 4px;
  width: 100%;
  background-color: rgba(255, 0, 0, 0.53);
  position: relative;
  margin-top: -4px; /* justo debajo del navbar */
  overflow: hidden;
`;

export const Progress = styled.div<{ $duration: number }>`
  height: 100%;
  background-color: #ec1d24;
  animation: ${grow} ${({ $duration }) => $duration}ms linear forwards;
`;
