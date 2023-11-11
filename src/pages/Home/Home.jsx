import React, { useState, useEffect } from 'react';
import { fetchBestMovies } from 'api/api';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [bestMovies, setBestMovies] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await fetchBestMovies();
        setBestMovies(data);
      } catch (error) {
        console.log('error', error);
      }
    };

    if (bestMovies.length === 0) {
      getImages();
    }
  }, [setBestMovies, bestMovies]);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {bestMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: '/' }}>
              {movie.name || movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};