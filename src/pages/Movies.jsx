import { BackButton } from 'components/BackButton';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'api/api';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [searchedMovie, setSearchedMovie] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovies(searchedMovie);
        setMovieList(data);
        console.log(movieList);
      } catch (error) {
        console.log('error', error);
      }
    };

    if (isSubmit) {
      fetchData();
    }
  }, [searchedMovie, isSubmit]);

  const handleSubmit = event => {
    event.preventDefault();
    setIsSubmit(true);
    setSearchedMovie(event.target.firstChild.value);
  };

  return (
    <main>
      <BackButton />
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      {isSubmit === true && (
        <section>
          <ul>
            {movieList.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  {movie.name || movie.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
};
