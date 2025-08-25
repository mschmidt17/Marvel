import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RelatedComics from "../components/RelatedComics";


const mockComics = [
  { id: 1, title: "Comic One", year: 2020, thumbnail: "/comic1.jpg" },
  { id: 2, title: "Comic Two", year: 2021, thumbnail: "/comic2.jpg" },
];

describe("RelatedComics component", () => {
  it("renders all comics passed as props", () => {
    render(<RelatedComics comics={mockComics} />);

    mockComics.forEach((comic) => {
      expect(screen.getByText(comic.title)).toBeInTheDocument();
      expect(screen.getByText(comic.year.toString())).toBeInTheDocument();
      expect(screen.getByAltText(comic.title)).toHaveAttribute("src", comic.thumbnail);
    });
  });

    it("adds 'active' class while dragging", () => {
    render(<RelatedComics comics={mockComics} />);
    const carousel = screen.getByTestId("carousel");
    
    // simulamos mouse down y movimiento
    fireEvent.mouseDown(carousel, { pageX: 0 });
    fireEvent.mouseMove(carousel, { pageX: 50 });

    expect(carousel.classList.contains("active")).toBe(true);

    // mouse up quita la clase
    fireEvent.mouseUp(carousel);
    expect(carousel.classList.contains("active")).toBe(false);
    });
});
