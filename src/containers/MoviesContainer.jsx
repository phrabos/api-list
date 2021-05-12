import React, { Component } from 'react';
import MovieList from '../components/movies/MovieList';
import { findMovies } from '../services/movieApi';

export default class MoviesContainer extends Component {
state={
  movies: [],

}
async componentDidMount(){
  const moviesArr = await findMovies();
  this.setState({
    movies: moviesArr
  });
}
render() {
  const { movies } = this.state;
  return (
    <MovieList movies={movies} />
    
  );
}
}
