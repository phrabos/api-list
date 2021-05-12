import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MoviesContainer from './MoviesContainer';

describe('MoviesContainer', () => {
  it('renders a list of movies on page', async () => {
    render(
      <MemoryRouter>
        <MoviesContainer />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'movies' });
    expect(ul).toMatchSnapshot();
  });
});
