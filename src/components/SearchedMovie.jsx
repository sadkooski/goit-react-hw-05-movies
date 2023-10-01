import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'api/api';

export const SearchedMovie = () => {
  const [searchQuery, setSearchQuery] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  useEffect(() => {
    const movies = fetchMovies(query);
    setSearchQuery(movies);

    console.log('query', Object.values(searchQuery));
  }, [query]);

  return (
    <section>
      <ul>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet
          iusto fugiat sed iure soluta amet odit autem cum rem, quidem nesciunt
          error? Suscipit nam natus porro voluptatem perspiciatis harum!
        </li>
      </ul>
    </section>
  );
};
