import React, { Component } from 'react';
import MovieList from '../components/movies/MovieList';
import { findMovies } from '../services/movieApi';

export default class MoviesContainer extends Component {
state={
  movies: [],
  loading: true,

}
async componentDidMount(){
  const moviesArr = await findMovies();
  this.setState({
    movies: moviesArr,
    loading: false,
  });
}
render() {
  const { movies, loading } = this.state;
  if(loading) return <h1>Loading...</h1>;
  return (
    <MovieList movies={movies} />
    
  );
}
}
