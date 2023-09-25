import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { NotFound } from 'pages/NotFound';
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
          <Route path=":movieId" element={<MovieDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
