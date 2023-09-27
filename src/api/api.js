export const fetchBestMovies = async setBestMovies => {
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

export const fetchMovieDetails = async (setMovieDetails, id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=cc63449c5a93a3a95e20690fb0c768c8`
    );
    const data = await response.json();
    setMovieDetails(data);
  } catch (error) {
    console.log('errr', error);
  }
};

// fetch(
//   'https://api.themoviedb.org/3/movie/movie_id?language=en-US&api_key=cc63449c5a93a3a95e20690fb0c768c',
//   options
// );

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer cc63449c5a93a3a95e20690fb0c768c8'
//   }
// };

// fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=cc63449c5a93a3a95e20690fb0c768c', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
