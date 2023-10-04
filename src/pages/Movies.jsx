import { BackButton } from 'components/BackButton';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { fetchMovies } from 'api/api';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [searchedMovie, setSearchedMovie] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovies(searchedMovie);
        setMovieList(data);
      } catch (error) {
        console.log('error', error);
      }
    };

    if (isSubmit && searchedMovie !== '') {
      fetchData();
    }
  }, [searchedMovie, isSubmit]);

  const handleSubmit = event => {
    event.preventDefault();

    setIsSubmit(true);
    setSearchedMovie(event.target.firstChild.value);
    setSearchParams({ query: event.target.firstChild.value });
    navigate(`/movies?query=${event.target.firstChild.value}`);
  };

  console.log('1', isSubmit, movieList);

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
