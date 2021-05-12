import React, { Component } from 'react';
import Movie from '../components/movies/Movie';
import { findSingleMovie } from '../services/movieApi';
import PropTypes from 'prop-types';

export default class DetailsContainer extends Component {
static propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
}
  state={
    loading: true,
    movie: {
      id:0,
      title: '',
      releaseDate: '',
      posterPath: ''
    },
  }
  async componentDidMount(){
    const singleMovie = await findSingleMovie(this.props.match.params.id);
    this.setState({
      movie: singleMovie,
      loading: false,
    });
  }

  render() {
    if(this.state.loading) return <h1>Loading...</h1>;
    return (
      <>
        <Movie movie={this.state.movie}/>
        <p>Additional Facts</p>
        <ul>
          <li>Popularity: {this.state.movie.popularity}</li>
          <li>Budget ${this.state.movie.budget}</li>
          <li>Rating {this.state.movie.rating}</li>
        </ul>
      </>
    );
  }
}
