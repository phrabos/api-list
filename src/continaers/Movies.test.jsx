import React from 'react';
import { render, screen } from '@testing-library/react';
import Movies from './MoviesContainer';

describe('MoviesContainer', () => {
  it('renders a list of movies on page', async () => {
    render(<Movies />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'movies' });
  });
});
