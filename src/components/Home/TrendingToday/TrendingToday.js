import React, { useState, useEffect } from 'react';
import { fetchMovies } from 'api/api';
import { Link } from 'react-router-dom';

export const TrendingToday = movies => {
  const [bestMovies, setBestMovies] = useState([]);
  // const bestMovies = movies;
  useEffect(() => {
    fetchMovies(setBestMovies);
  }, [setBestMovies]);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {bestMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/${movie.id}`}>{movie.name || movie.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
