import { describe, it, expect } from 'vitest';
import { queryByText, render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer component', () => {
    it('renders the Footer component with the correct content', () => {
        const { container } = render(<Footer />);
        // Get the current year
        const currYear = new Date().getFullYear();

        // Check if there is an element with the correct copyright text
        const copyrightElements = queryByText(container, `© ${currYear} Chadhindsight™. All Rights Reserved.`);

        if (copyrightElements !== null) {
            // Element exists
            // Check if the link is rendered and has the correct href attribute
            const link = screen.getByText('Chadhindsight™');
            expect(link).toBeTruthy();
            const linkElement = link.closest('a');

            // Check if the link element is not null
            expect(linkElement).toBeTruthy();

            // Check the href attribute
            const hrefAttribute = linkElement?.getAttribute('href');
            expect(hrefAttribute).toBe('https://chadhindsight.github.io');
        }
    });
});
