import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'api/api';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);

  const { movieId } = useParams();

  console.log(movieId);

  useEffect(() => {
    fetchMovieDetails(setMovieDetails, movieId);
  }, [setMovieDetails, movieId]);

  const details = movieDetails.genres.map(movie => {
    console.log(movie.genre);
  });
  // console.log('1', movieDetails.genres[0].name);
  return (
    <main>
      <div>
        <img src="" alt="" />
        <div>
          <h2>{movieDetails.original_title}</h2>
          <span>User Score: {Math.round(movieDetails.vote_average * 10)}%</span>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          {/* {movieDetails.genres.map(genre => {
            <span>{genre.name}</span>;
          })} */}
        </div>
      </div>
      <div>
        <span>Additional information</span>
        <ul>
          <li>
            <a href="*">Cast</a>
          </li>
          <li>
            <a href="*">Reviews</a>
          </li>
        </ul>
      </div>
    </main>
  );
};
