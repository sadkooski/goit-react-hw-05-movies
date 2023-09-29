import { fetchMovieReviews } from 'api/api';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
            {movieReviews.map(review => {
              return (
                <li>
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
