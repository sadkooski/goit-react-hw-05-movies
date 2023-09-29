import { Outlet, useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'api/api';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails(setMovieDetails, movieId);
  }, [setMovieDetails, movieId]);

  const fullPosterPath =
    'https://image.tmdb.org/t/p/w400/' + movieDetails.poster_path;

  return (
    <main>
      <div>
        <img src={fullPosterPath} alt="" />
        <div>
          <h2>{movieDetails.original_title}</h2>
          <span>User Score: {Math.round(movieDetails.vote_average * 10)}%</span>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          {movieDetails.genres ? (
            <div>
              <h3>Genres</h3>
              {movieDetails.genres.map(genre => {
                return <span>{genre.name}&nbsp;</span>;
              })}
            </div>
          ) : null}
        </div>
      </div>
      <div>
        <span>Additional information</span>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};
