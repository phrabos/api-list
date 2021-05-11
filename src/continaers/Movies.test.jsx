import React from 'react';
import { render, screen } from '@testing-library/react';
import Movies from './Moveis';

describe('MoviesContainer', () => {
  it('renders a list of movies on page', async () => {
    render(<Movies />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'movies' });
  });
});
