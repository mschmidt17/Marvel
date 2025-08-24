import { useState, useEffect } from "react";
import type { Comic } from "../api/marvelApi";
import { getComicsByCharacterId } from "../api/marvelApi";

export const useFetchComics = (characterId: number) => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!characterId) return;

    const fetchComics = async () => {
      setLoading(true);
      try {
        const data = await getComicsByCharacterId(characterId);
        setComics(data);
      } catch (error) {
        console.error("Error al cargar comics", error);
        setComics([]);
      } finally {
        setLoading(false);
      }
    };

    fetchComics();
  }, [characterId]);

  return { comics, loading };
};