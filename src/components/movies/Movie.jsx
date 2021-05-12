import React from 'react';
import PropTypes from 'prop-types';

function Movie({ title, releaseDate, posterPath }) {
  return (
    <>
      <p>{title}</p>
      <p>{releaseDate}</p>
      <img 
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        alt={title}
        style={{
          width: '100px',
          height: '200px',

        }}
      />
    </>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
};

export default Movie;
