import { BackButton } from 'components/BackButton';
import { useEffect, useState } from 'react';

import { fetchMovies } from 'api/api';
import { Outlet, Link } from 'react-router-dom';

export const Movies = () => {
  const [searchedMovie, setSearchedMovie] = useState('');

  console.log(searchedMovie);
  // useEffect(() => {
  //   fetchMovies(searchedMovie);
  // }, [searchedMovie]);

  return (
    <main>
      <BackButton />
      <form>
        <input
          type="text"
          value={searchedMovie}
          onChange={evt => setSearchedMovie(evt.target.value)}
        />
        <Link to={`/movies?query=${searchedMovie}`}>
          <button type="submit">Search</button>
        </Link>
      </form>
      <Outlet />
    </main>
  );
};
