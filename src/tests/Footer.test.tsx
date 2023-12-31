import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer component', () => {
    it('renders the Footer component with the correct content', () => {
        const { getByText } = render(<Footer />);

        // Check if the copyright text is rendered
        expect(screen.getByText(/© 2023 Chadhindsight™\. All Rights Reserved\./i)).toBeTruthy();
        // Check if the link is rendered and has the correct href attribute
        const link = getByText('Chadhindsight™');
        expect(link).toBeTruthy();
        const linkElement = link.closest('a');

        // Check if the link element is not null
        expect(linkElement).toBeTruthy();

        // Check the href attribute
        const hrefAttribute = linkElement?.getAttribute('href');
        expect(hrefAttribute).toBe('https://chadhindsight.github.io');
    });
});
