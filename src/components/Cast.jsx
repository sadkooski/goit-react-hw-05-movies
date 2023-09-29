import { fetchMovieCredits } from 'api/api';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [movieCredits, setMovieCredits] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCredits(setMovieCredits, movieId);
  }, [setMovieCredits, movieId]);

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
                <li>
                  <img src={fullProfilePath} alt={actor.name} />
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
