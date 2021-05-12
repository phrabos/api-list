import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

function MovieList({ movies }) {
  return (
   
    <ul aria-label="movies">
      {movies.map((movie) => {
        return <li key={movie.id}>
          <Movie 
            title={movie.title}
            releaseDate={movie.releaseDate}
            posterPath={movie.posterPath}

          />
        </li>;
      })}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      posterPath: PropTypes.string.isRequired,

    })
  ).isRequired,
};

export default MovieList;
