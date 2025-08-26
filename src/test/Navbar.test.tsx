import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FavoriteCharactersContext } from '../store';

// Mock useNavigate
const navigateMock = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

const mockFavorites: any[] = [
  { id: 1, name: 'Spider-Man', description: '', thumbnail: { path: '', extension: 'jpg' } },
];

const contextValue = {
  favorites: mockFavorites,
  toggleFavorite: vi.fn(),
  isFavorite: vi.fn(),
  addFavorite: vi.fn(),
  removeFavorite: vi.fn(),
};

const renderComponent = (props = {}) =>
  render(
    <MemoryRouter>
      <FavoriteCharactersContext.Provider value={contextValue}>
        <Navbar {...props} />
      </FavoriteCharactersContext.Provider>
    </MemoryRouter>,
  );

describe('Navbar component', () => {
  beforeEach(() => {
    navigateMock.mockClear();
  });

  it('renders logo and favorites button', () => {
    renderComponent();

    const logoBtn = screen.getByRole('button', { name: /Marvel Logo/i });
    expect(logoBtn).toBeInTheDocument();

    const favoritesBtn = screen.getByRole('button', { name: /Favorites/i });
    expect(favoritesBtn).toBeInTheDocument();
    expect(favoritesBtn).toHaveTextContent(mockFavorites.length.toString());
  });

  it('calls navigate and onShowAll when logo is clicked', () => {
    const onShowAll = vi.fn();
    renderComponent({ onShowAll });

    const logo = screen.getByRole('button', { name: /Marvel Logo/i });
    fireEvent.click(logo);

    expect(navigateMock).toHaveBeenCalledWith('/');
    expect(onShowAll).toHaveBeenCalled();
  });

  it('calls onToggleFavorites when favorites button is clicked', () => {
    const onToggleFavorites = vi.fn();
    renderComponent({ onToggleFavorites });

    const favoritesBtn = screen.getByRole('button', { name: /Favorites/i });
    fireEvent.click(favoritesBtn);

    expect(onToggleFavorites).toHaveBeenCalled();
  });

  it('does not call onToggleFavorites if favorites are disabled', () => {
    const onToggleFavorites = vi.fn();
    renderComponent({ onToggleFavorites, favoritesDisabled: true });

    const favoritesBtn = screen.getByRole('button', { name: /Favorites/i });
    fireEvent.click(favoritesBtn);

    expect(onToggleFavorites).not.toHaveBeenCalled();
  });

  it('does not call onToggleFavorites if isShowingFavorites is true', () => {
    const onToggleFavorites = vi.fn();
    renderComponent({ onToggleFavorites, isShowingFavorites: true });

    const favoritesBtn = screen.getByRole('button', { name: /Favorites/i });
    fireEvent.click(favoritesBtn);

    expect(onToggleFavorites).not.toHaveBeenCalled();
  });
});
