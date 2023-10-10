export const fetchBestMovies = async () => {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=cc63449c5a93a3a95e20690fb0c768c8'
    );
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.log('errr', error);
  }
};

export const fetchMovies = async movie => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1&api_key=cc63449c5a93a3a95e20690fb0c768c8`
    );
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.log('errr', error);
  }
};

export const fetchMovieDetails = async id => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=cc63449c5a93a3a95e20690fb0c768c8`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log('errr', error);
    throw error;
  }
};

export const fetchMovieCredits = async id => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=cc63449c5a93a3a95e20690fb0c768c8`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log('errr', error);
  }
};

export const fetchMovieReviews = async id => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&api_key=cc63449c5a93a3a95e20690fb0c768c8`
    );
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.log('errr', error);
  }
};
