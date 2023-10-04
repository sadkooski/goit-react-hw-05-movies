import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { Reviews } from './Reviews';
import { MovieDetails } from 'pages/MovieDetails';
import { NotFound } from 'pages/NotFound';
import { Cast } from './Cast';
// import { SearchedMovie } from './SearchedMovie';
import { Container, Header, StyledLink } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      {/* ______________________ */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}>
          {/* <Route path="" element={<SearchedMovie />} /> */}
        </Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
