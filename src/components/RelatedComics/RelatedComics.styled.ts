import styled from 'styled-components';

export const ComicsCarrousel = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 10px;
  width: 100%;
  cursor: grab;
  user-select: none;

  &.active {
    cursor: grabbing;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  img {
    user-select: none;
    -webkit-user-drag: none;
    width: 200px;
    height: 300px;
    object-fit: cover;
    object-position: center;
  }
`;

export const ComicCardCWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 200px;
  cursor: grab;
`;

export const ComicTitle = styled.p`
  margin: 15px 0 2px 0;
  font-weight: bold;
  font-size: 16px;
`;

export const ComicYear = styled.p`
  margin: 0;
  font-size: 12px;
`;
