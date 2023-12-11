import React from "react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "./Header";

describe("Header Component", () => {
  it("renders a title or heading", () => {
    const { getByRole } = render(<Header />);
    const titleElement = getByRole("heading", {
      level: 1,
      name: "Movie Contacts",
    });

    expect(titleElement).toBeInTheDocument();
  });
});
