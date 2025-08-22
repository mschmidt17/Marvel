import axios from "axios";
import { mockCharacters } from "./mockCharacters";

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
}

const MARVEL_BASE_URL = import.meta.env.VITE_MARVEL_BASE_URL;
const PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY;

export const getCharacters = async (limit = 50, searchTerm = ""): Promise<Character[]> => {
  try {
    const ts = Date.now();
    const params: any = { ts, apikey: PUBLIC_KEY, limit };
    if (searchTerm) params.nameStartsWith = searchTerm;

    const response = await axios.get(MARVEL_BASE_URL, { params });
    return response.data.data.results;
  } catch (error) {
    // Nota: Esto es temporal para desarrollo mientras la API está caída
    // Cuando el servidor vuelva a funcionar, reemplazar por:
    // console.warn("API caída, usando datos mock", error);
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      console.warn("API Marvel no accesible (401), usando datos mock");
    } else {
      console.error("Error inesperado al llamar a Marvel API, usando datos mock");
    }
    return mockCharacters;
  }
};

export const getCharacterById = async (id: number): Promise<Character | null> => {
  try {
    const ts = Date.now();
    const response = await axios.get(`${MARVEL_BASE_URL}/${id}`, { params: { ts, apikey: PUBLIC_KEY } });
    return response.data.data.results[0];
  } catch (error) {
    // Nota: Esto es temporal para desarrollo mientras la API está caída
    // Cuando el servidor vuelva a funcionar, reemplazar por:
    // console.warn("API caída, usando datos mock", error);
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      console.warn("API Marvel no accesible (401), usando datos mock");
    } else {
      console.error("Error inesperado al llamar a Marvel API, usando datos mock");
    }
    return mockCharacters.find(c => c.id === id) || null;
  }
};
