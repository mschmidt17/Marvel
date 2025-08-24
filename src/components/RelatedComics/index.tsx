import type { Comic } from "../../api/mockComics";

type RelatedComicsProps = {
  comics: Comic[];
};

const RelatedComics = ({ comics }: RelatedComicsProps) => {
  return (
    <div>
      {comics.map((comic) => (
        <div key={comic.id}>
          <img src={comic.thumbnail} alt={comic.title} />
          <p>{comic.title}</p>
          <p>{comic.year}</p>
        </div>
      ))}
    </div>
  );
};

export default RelatedComics;
