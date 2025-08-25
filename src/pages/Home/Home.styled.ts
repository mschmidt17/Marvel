import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 26px;
  margin-top: 2.5%;
`;

const bounceDown = keyframes`
  0%   { transform: translateY(0px); }
  60%  { transform: translateY(2px); }
  80%  { transform: translateY(-1px); }
  100% { transform: translateY(0); }
`;

const bounceUp = keyframes`
  0%   { transform: translateY(0); }
  60%  { transform: translateY(-2px); }
  80%  { transform: translateY(1px); }
  100% { transform: translateY(0px);}
`;

export const MainContent = styled.div<{ show?: boolean }>`
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
  ${({ show }) =>
    show
      ? css`
          animation: ${bounceDown} 0.6s ease forwards;
        `
      : css`
          animation: ${bounceUp} 0.6s ease forwards;
        `}
`;

const slideDown = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Title = styled.h1`
  color: #000000ff;
  margin-bottom: 2%;
  animation: ${slideDown} 0.6s ease-out forwards;
`;
