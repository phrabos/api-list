/* eslint-disable max-len */
export const findMovies = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&include_adult=false&include_video=false&page=1&query=star%20wars`);
  const { results } = await res.json();
  
  return results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    releaseDate: movie.release_date,
    posterPath: movie.poster_path,
  }));
};

export const findSingleMovie = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIE_API_KEY}&language=en-US`);

  const movie = await res.json();
  
  return {
    id: movie.id,
    title: movie.title,
    popularity: movie.popularity,
    budget: movie.budget,
    rating: movie.vote_average,
    releaseDate: movie.release_date,
    posterPath: movie.poster_path,
  };
};
