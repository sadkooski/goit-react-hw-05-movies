import { fetchMovieCredits } from 'api/api';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { CastList, Actor, ActorInfo, CastElement } from './Cast.styled';

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
        if (data) {
          setMovieCredits(data);
        } else {
          console.log(`There aren't any cast info.`);
        }
      } catch (error) {
        console.log('error', error);
      }
    };

    if (movieCredits.length === 0) {
      fetchData();
    }
  }, [movieCredits, movieId, setMovieCredits]);

  return (
    <section>
      <CastList>
        {movieCredits.cast ? (
          <CastElement>
            {movieCredits.cast.map(actor => {
              const fullProfilePath =
                actor.profile_path &&
                `https://image.tmdb.org/t/p/w185/${actor.profile_path}`;
              return (
                <Actor key={nanoid()}>
                  {fullProfilePath !== null && (
                    <img
                      src={fullProfilePath}
                      alt={actor.name}
                      style={{ width: '250px' }}
                    />
                  )}
                  <ActorInfo>
                    <span>{actor.name}</span>
                    <span>Characters: {actor.character}</span>
                  </ActorInfo>
                </Actor>
              );
            })}
          </CastElement>
        ) : null}
      </CastList>
    </section>
  );
};
