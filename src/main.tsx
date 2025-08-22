import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FavoriteCharactersProvider } from './store/FavoriteCharacters/FavoriteCharactersContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FavoriteCharactersProvider>
      <App />
    </FavoriteCharactersProvider>
  </StrictMode>,
);
