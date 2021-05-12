import React, { Component } from 'react';
import Movie from '../components/movies/Movie';
import { findSingleMovie } from '../services/movieApi';

export default class DetailsContainer extends Component {

  state={
    movie: '',
  }
  async componentDidMount(){
    const singleMovie = await findSingleMovie('680304');
    console.log(singleMovie);
    this.setState({
      movie: singleMovie
    });
  }

  render() {
    // const { singleMovie } = this.state;
    return (
      <Movie movie={this.state.movie}/>
      // <h1>hi</h1>
    );
  }
}
