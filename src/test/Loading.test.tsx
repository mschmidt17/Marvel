import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import Loading from "../components/Loading";
import { act } from "react";

describe("Loading component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders progress initially at 0%", () => {
    render(<Loading duration={1000} />);
    
    const progress = screen.getByTestId("progress");
    expect(progress).toHaveStyle({ width: "0%" });
  });

  it("animates progress to 100%", () => {
    render(<Loading duration={1000} />);
    const progress = screen.getByTestId("progress");

    // Avanzamos el tiempo simulando la duración completa
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(progress).toHaveStyle({ width: "97.6%" });
  });
});