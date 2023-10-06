import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'api/api';
import { nanoid } from 'nanoid';
import { BackButton } from 'components/BackButton';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  console.log('location', location.state);

  useEffect(() => {
    fetchMovieDetails(setMovieDetails, movieId);
  }, [setMovieDetails, movieId]);

  const fullPosterPath =
    'https://image.tmdb.org/t/p/w400/' + movieDetails.poster_path;

  return (
    <main>
      <BackButton to={location.state.from} />
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
                return <span key={nanoid()}>{genre.name}&nbsp;</span>;
              })}
            </div>
          ) : null}
        </div>
      </div>
      <div>
        <span>Additional information</span>
        <ul>
          <li>
            <Link
              to={`/movies/${movieId}/cast`}
              state={{ from: location?.state?.from || '/movies' }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={`/movies/${movieId}/reviews`}
              state={{ from: location?.state?.from || '/movies' }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};
