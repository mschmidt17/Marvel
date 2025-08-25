import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import EmptyState from "../components/EmptyState";


describe("EmptyState component", () => {
  it("renders the default message when no props are provided", () => {
    render(<EmptyState />);
    expect(screen.getByText("No results found")).toBeInTheDocument();
  });

  it("renders the custom message when message prop is provided", () => {
    const customMessage = "No characters available";
    render(<EmptyState message={customMessage} />);
    expect(screen.getByText(customMessage)).toBeInTheDocument();
  });
});
