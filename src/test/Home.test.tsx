import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';
import { FavoriteCharactersContext } from '../store';
import * as useFetchCharactersHook from '../hooks/useFetchCharacters';
import { vi } from 'vitest';

const mockCharacters = [
  {
    id: 1,
    name: 'Spider-Man',
    description: 'Hero',
    thumbnail: { path: '/spiderman', extension: 'jpg' },
  },
  {
    id: 2,
    name: 'Iron Man',
    description: 'Hero',
    thumbnail: { path: '/ironman', extension: 'jpg' },
  },
];

const renderComponent = (contextValue?: any, showFavorites = false) =>
  render(
    <MemoryRouter initialEntries={[{ pathname: '/', state: { showFavorites } }]}>
      <FavoriteCharactersContext.Provider
        value={
          contextValue || {
            favorites: [],
            toggleFavorite: vi.fn(),
            isFavorite: vi.fn().mockReturnValue(false),
            addFavorite: vi.fn(),
            removeFavorite: vi.fn(),
          }
        }
      >
        <Home />
      </FavoriteCharactersContext.Provider>
    </MemoryRouter>,
  );

vi.mock('../hooks/useFetchCharacters');

describe('Home component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders loading initially', () => {
    const mockedUseFetchCharacters = vi.mocked(useFetchCharactersHook.useFetchCharacters);
    mockedUseFetchCharacters.mockReturnValue({ characters: [], loading: true });

    renderComponent();

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('renders characters when loading is false', () => {
    const mockedUseFetchCharacters = vi.mocked(useFetchCharactersHook.useFetchCharacters);
    mockedUseFetchCharacters.mockReturnValue({ characters: mockCharacters, loading: false });

    renderComponent();

    mockCharacters.forEach((char) => {
      expect(
        screen.getByText((content) => content.toLowerCase().includes(char.name.toLowerCase())),
      ).toBeInTheDocument();
    });
  });

  it('renders EmptyState when no characters', () => {
    const mockedUseFetchCharacters = vi.mocked(useFetchCharactersHook.useFetchCharacters);
    mockedUseFetchCharacters.mockReturnValue({ characters: [], loading: false });

    renderComponent();

    expect(screen.getByText(/no characters found/i)).toBeInTheDocument();
  });

  it('renders favorites when showFavorites is true', () => {
    const mockedUseFetchCharacters = vi.mocked(useFetchCharactersHook.useFetchCharacters);
    mockedUseFetchCharacters.mockReturnValue({ characters: mockCharacters, loading: false });

    const favorites = [mockCharacters[0]];

    renderComponent(
      {
        favorites,
        toggleFavorite: vi.fn(),
        isFavorite: vi.fn(),
        addFavorite: vi.fn(),
        removeFavorite: vi.fn(),
      },
      true,
    ); // showFavorites = true

    expect(screen.getByTestId('favorites-title')).toBeInTheDocument();
    expect(screen.getByText(new RegExp(favorites[0].name, 'i'))).toBeInTheDocument();
  });
});
