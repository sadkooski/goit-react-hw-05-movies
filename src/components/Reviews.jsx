import { fetchMovieReviews } from 'api/api';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(setMovieReviews, movieId);
  }, [setMovieReviews, movieId]);

  return (
    <section>
      <ul>
        {movieReviews ? (
          <div>
            {movieReviews.length !== 0 &&
              movieReviews.map(review => {
                return (
                  <li key={nanoid()}>
                    <h3>Author: {review.author}</h3>
                    <p>{review.content}</p>
                  </li>
                );
              })}
          </div>
        ) : null}
      </ul>
    </section>
  );
};
