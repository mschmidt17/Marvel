import { useRef, useState } from "react";
import type { Comic } from "../../api/mockComics";
import { ComicCardCWrapper, ComicsCarrousel, ComicTitle, ComicYear } from "./RelatedComics.styled";

type RelatedComicsProps = { comics: Comic[] };

const RelatedComics = ({ comics }: RelatedComicsProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const walk = (startX - e.pageX) * 1.5; // velocidad ajustable
    carouselRef.current.scrollLeft = scrollLeft + walk;
  };

  return (
    <ComicsCarrousel
      ref={carouselRef}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseUp}
      className={isDragging ? "active" : ""}
    >
      {comics.map((comic) => (
        <ComicCardCWrapper key={comic.id}>
          <img src={comic.thumbnail} alt={comic.title} />
          <ComicTitle>{comic.title}</ComicTitle>
          <ComicYear>{comic.year}</ComicYear>
        </ComicCardCWrapper>
      ))}
    </ComicsCarrousel>
  );
};

export default RelatedComics;
