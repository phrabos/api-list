import React from 'react';
import PropTypes from 'prop-types';

function Movie({ movie }) {
  return (
    <>
      <p>{movie.title}</p>
      <p>{movie.releaseDate}</p>
      <img 
        src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`}
        alt={movie.title}
        style={{
          width: '100px',
          height: '200px',

        }}
      />
    </>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    posterPath: PropTypes.string.isRequired,

  })
};

export default Movie;
