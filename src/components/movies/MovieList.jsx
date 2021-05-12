import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Movie from './Movie';

function MovieList({ movies }) {
  return (
   
    <ul aria-label="movies">
      {movies.map((movie) => {
        return (
          <Link to={`movies/${movie.id}`} key={movie.id}>
            <li >
              <Movie 
                movie={movie}
              />
            </li>
          </Link>
        );
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
