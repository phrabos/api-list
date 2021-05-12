/* eslint-disable max-len */
export const findMovies = async (search) => {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&include_adult=false&include_video=false&page=1&query=${search}`);
  const { results } = await res.json();
  
  return results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    releaseDate: movie.release_date,
    posterPath: movie.poster_path,
  }));
};
