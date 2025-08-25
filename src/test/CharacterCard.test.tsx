import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import { FavoriteCharactersContext } from "../store";

const navigateMock = vi.fn();

// Mock useNavigate
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

const contextValue = {
  favorites: [],
  toggleFavorite: vi.fn(),
  isFavorite: vi.fn().mockReturnValue(false),
  addFavorite: vi.fn(),
  removeFavorite: vi.fn(),
};

const mockCharacter = {
  id: 1,
  name: "Spider-Man",
  description: "Friendly neighborhood Spider-Man",
  thumbnail: { path: "path/to/image", extension: "jpg" },
};

describe("CharacterCard", () => {
  const renderComponent = () =>
    render(
      <MemoryRouter>
        <FavoriteCharactersContext.Provider value={contextValue}>
          <CharacterCard character={mockCharacter} />
        </FavoriteCharactersContext.Provider>
      </MemoryRouter>
    );

    it("renders character name and image", () => {
        renderComponent();

        expect(screen.getByText("SPIDER-MAN")).toBeInTheDocument();
        expect(screen.getByAltText("Spider-Man")).toBeInTheDocument();
    });

    it("calls toggleFavorite when heart icon is clicked", () => {
       renderComponent();

        const heart = screen.getByAltText("No favorito");
        fireEvent.click(heart);

        expect(contextValue.toggleFavorite).toHaveBeenCalledWith(mockCharacter);
    });

    it("navigates when thumbnail is clicked", () => {
        renderComponent();

        const thumbnail = screen.getByRole("button", { name: /Spider-Man/i });
        fireEvent.click(thumbnail);

        expect(navigateMock).toHaveBeenCalledWith(`/character/${mockCharacter.id}`);
    });
});
