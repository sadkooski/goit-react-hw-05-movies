import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { NotFound } from 'pages/NotFound';
import { Container, Header, StyledLink } from './App.styled';
import { fetchMovies } from 'api/api';
import React, { useState, useEffect } from 'react';

export const App = () => {
  const [bestMovies, setBestMovies] = useState([]);

  useEffect(() => {
    fetchMovies(setBestMovies);
  }, [setBestMovies]);

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
        <Route path="/" element={<Home movies={bestMovies} />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/movies/:movieId"
          element={<MovieDetails movies={bestMovies} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
