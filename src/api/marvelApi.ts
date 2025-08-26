import axios from 'axios';
import { mockCharacters } from './mockCharacters';
import { mockComics } from './mockComics';

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
}

export interface Comic {
  id: number;
  year: number;
  title: string;
  thumbnail: string;
}

interface MarvelComic {
  id: number;
  title: string;
  thumbnail: { path: string; extension: string };
  dates: { type: string; date: string }[];
}

interface MarvelParams {
  ts: number;
  apikey: string;
  limit: number;
  nameStartsWith?: string;
}

const MARVEL_BASE_URL = import.meta.env.VITE_MARVEL_BASE_URL;
const PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY;

/**
 * Nota:
 * Los endpoints mantienen la misma estructura de la API oficial de Marvel.
 * Actualmente la data es mockeada debido a que no se dispone del `ts + apikey + hash`
 * necesarios para autenticar los requests contra la API real.
 */

export const getCharacters = async (limit = 50, searchTerm = ''): Promise<Character[]> => {
  try {
    const ts = Date.now();
    const params: MarvelParams = { ts, apikey: PUBLIC_KEY, limit };
    if (searchTerm) params.nameStartsWith = searchTerm;

    const response = await axios.get<{ data?: { results?: Character[] } }>(MARVEL_BASE_URL, {
      params,
    });

    if (response.data?.data?.results && Array.isArray(response.data.data.results)) {
      return response.data.data.results;
    } else {
      console.warn('Respuesta inesperada de Marvel API, usando datos mock');
      return mockCharacters;
    }
  } catch (err: unknown) {
    // console.error('Error inesperado al llamar a Marvel API, usando datos mock', err);
    return mockCharacters;
  }
};

export const getCharacterById = async (id: number): Promise<Character | null> => {
  try {
    const ts = Date.now();
    const response = await axios.get<{ data: { results: Character[] } }>(
      `${MARVEL_BASE_URL}/${id}`,
      { params: { ts, apikey: PUBLIC_KEY } },
    );
    return response.data.data.results[0] || null;
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response?.status === 401) {
      console.warn('API Marvel no accesible (401), usando datos mock');
    } else {
      // console.error('Error inesperado al llamar a Marvel API, usando datos mock', err);
    }
    return mockCharacters.find((c) => c.id === id) || null;
  }
};

export const getComicsByCharacterId = async (id: number): Promise<Comic[]> => {
  try {
    const ts = Date.now();
    const response = await axios.get<{ data: { results: MarvelComic[] } }>(
      `${MARVEL_BASE_URL}/${id}/comics`,
      { params: { ts, apikey: PUBLIC_KEY } },
    );

    return response.data.data.results.map((comic) => ({
      id: comic.id,
      year: comic.dates.length > 0 ? new Date(comic.dates[0].date).getFullYear() : 0,
      title: comic.title,
      thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
    }));
  } catch {
    return mockComics;
  }
};
