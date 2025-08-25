import styled, { keyframes, css } from 'styled-components';

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
  position: relative;
  margin-top: -4px; /* justo debajo del navbar */
  overflow: hidden;
  z-index: 9999;
`;

export const Progress = styled.div<{ $duration: number; $loading: boolean }>`
  height: ${({ $loading }) => ($loading ? '100%' : '0')};
  width: ${({ $loading }) => ($loading ? '100%' : '0%')};
  opacity: ${({ $loading }) => ($loading ? 1 : 0)};
  background-color: #ec1d24;

  transition: width ${({ $duration }) => $duration}ms ease-out, opacity 0.3s ease-out,
    height 0.3s ease-out;

  ${({ $loading, $duration }) =>
    $loading &&
    css`
      animation: ${grow} ${$duration}ms ease-out forwards;
    `}
`;
