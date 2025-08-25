import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SearchBar from "../components/SearchBar";

describe("SearchBar component", () => {
  it("renders input with correct value", () => {
    render(<SearchBar value="Spider-Man" onChange={vi.fn()} />);
    
    const input = screen.getByLabelText("Search a character") as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("Spider-Man");
  });

  it("calls onChange when typing", () => {
    const onChange = vi.fn();
    render(<SearchBar value="" onChange={onChange} />);
    const input = screen.getByLabelText("Search a character");

    fireEvent.change(input, { target: { value: "Iron Man" } });
    expect(onChange).toHaveBeenCalledWith("Iron Man");
  });

  it("displays results text correctly for multiple results", () => {
    render(<SearchBar value="" onChange={vi.fn()} resultsCount={5} />);
    expect(screen.getByText("5 RESULTS")).toBeInTheDocument();
  });

  it("displays results text correctly for 1 result", () => {
    render(<SearchBar value="" onChange={vi.fn()} resultsCount={1} />);
    expect(screen.getByText("1 RESULT")).toBeInTheDocument();
  });

  it("does not display results text if resultsCount is undefined", () => {
    render(<SearchBar value="" onChange={vi.fn()} />);
    expect(screen.queryByText(/RESULT/)).toBeNull();
  });
});
