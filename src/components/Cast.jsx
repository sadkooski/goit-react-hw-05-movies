import { fetchMovieCredits } from 'api/api';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

export const Cast = () => {
  const [movieCredits, setMovieCredits] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCredits(setMovieCredits, movieId);
  }, [setMovieCredits, movieId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        setMovieCredits(data);
      } catch (error) {
        console.log('error', error);
      }
    };

    if (movieCredits.length === 0) {
      fetchData();
    }
  }, [movieId, setMovieCredits]);

  return (
    <section>
      <ul>
        {movieCredits.cast ? (
          <div>
            {movieCredits.cast.map(actor => {
              const fullProfilePath =
                actor.profile_path &&
                `https://image.tmdb.org/t/p/w185/${actor.profile_path}`;
              return (
                <li key={nanoid()}>
                  {fullProfilePath !== null && (
                    <img src={fullProfilePath} alt={actor.name} />
                  )}
                  <span>{actor.name}</span>
                  <span>Characters: {actor.character}</span>
                </li>
              );
            })}
          </div>
        ) : null}
      </ul>
    </section>
  );
};
