import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Actor from '../components/Actor';


describe('Actors component', () => {
    // Mock actor info to be passed to the realted Actor component
    const idrisTest = {
        "name": "Idris Elba",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
        "popularity": 11.622713,
        "id": "11731993-0604-4bee-80d5-67ad845d0a38"
    }

    it('renders a component that displays info for an actor', () => {
        const { getByText, getByAltText } = render(<Actor {...idrisTest} />);

        // Check if the actor's name, popularity, etc are rendered
        expect(getByText(idrisTest.name)).toBeTruthy();
        expect(getByText(idrisTest.popularity.toString())).toBeTruthy();
        expect(getByAltText(idrisTest.name)).toBeTruthy();
        // The Delete button
        expect(getByText('Delete Actor')).toBeTruthy();
    })
})