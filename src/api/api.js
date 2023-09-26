export const fetchMovies = async setBestMovies => {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=cc63449c5a93a3a95e20690fb0c768c8'
    );
    const data = await response.json();

    setBestMovies(data.results);
  } catch (error) {
    console.log('errr', error);
  }
};

// export const getMovieById = (movieId, movies) => {
//   return movies.find(movie => movie.id === movieId);
// };
