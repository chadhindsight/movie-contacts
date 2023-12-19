import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Actors from '../components/Actors';
import contacts from '../contacts.json'

describe('Actors component', () => {
    it('renders the component with a list of actors', () => {
        const actorsList = contacts;

        const { getByText } = render(<Actors actors={actorsList} />);

        // Check if the table headers are rendered
        expect(getByText('Actor')).toBeTruthy();
        expect(getByText('Popularity')).toBeTruthy();
        expect(getByText('Action')).toBeTruthy();

        // Check if the actors are rendered in the table
        actorsList.slice(0, 5).forEach((actor) => {
            expect(getByText(actor.name)).toBeTruthy();
            expect(getByText(actor.popularity.toString())).toBeTruthy();
        });

        // Check if the buttons are rendered
        expect(getByText('Add Random Actor')).toBeTruthy();
        expect(getByText('Sort By Name')).toBeTruthy();
        expect(getByText('Sort By Popularity')).toBeTruthy();
    });

    it('renders a message when there are no actors', () => {
        const { getByText } = render(<Actors actors={[]} />);

        expect(getByText('Sorry, No Actors to display!')).toBeTruthy();
    });
});
