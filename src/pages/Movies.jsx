import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'api/api';
import { Link } from 'react-router-dom';
// import { SearchedMovie } from 'components/SearchedMovie';

export const Movies = () => {
  const [searchedMovie, setSearchedMovie] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const navigate = useNavigate();

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

    if (searchParams.has('query')) {
      setSearchedMovie(searchParams.get('query'));
      setIsSubmit(true);
    } else {
      setSearchedMovie('');
      setIsSubmit(false);
    }
  }, [searchedMovie, isSubmit, searchParams]);



  const handleSubmit = event => {
    event.preventDefault();

    setIsSubmit(true);
    // setSearchedMovie(event.target.firstChild.value);
    // navigate(`/movies?query=${event.target.firstChild.value}`);
    // setSearchParams(SearchedMovie);
    setSearchParams({ query: event.target.firstChild.value });
    // fetchData(searchParams);
  };

  const onChange = event => {
    setSearchedMovie(event.target.value);
  };

  console.log('1', isSubmit, movieList);

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={onChange} />
        <button type="submit">Search</button>
      </form>
      {isSubmit === true && (
        <section>
          <ul>
            {movieList.map(movie => (
              <li key={movie.id}>
                <Link
                  to={`/movies/${movie.id}`}
                  state={{ from: `/movies?query=${searchedMovie}` }}
                >
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
