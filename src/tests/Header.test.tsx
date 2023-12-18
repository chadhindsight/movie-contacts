import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header Component", () => {
    it("should have a title header", () => {
        render(<Header />);

        const appTitle = screen.getByText("Movie Contacts");
        expect(appTitle).toBeTruthy();
    });
});
