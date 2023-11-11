import { lazy } from 'react';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';

// const Home = lazy(() => import('../pages/Home'));
const Home = lazy(() =>
  import('../../pages/Home/Home').then(module => ({ default: module.Home }))
);
const Movies = lazy(() =>
  import('../../pages/Movies/Movies').then(module => ({
    default: module.Movies,
  }))
);
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails').then(module => ({
    default: module.MovieDetails,
  }))
);
const NotFound = lazy(() =>
  import('../../pages/NotFound/NotFound').then(module => ({
    default: module.NotFound,
  }))
);
const Reviews = lazy(() =>
  import('../Reviews/Reviews').then(module => ({ default: module.Reviews }))
);
const Cast = lazy(() =>
  import('../Cast/Cast').then(module => ({ default: module.Cast }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
