import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
import PendingView from '../views/PendingView/PendingView';

const CastView = lazy(() => import('../views/CastView/CastView'));
const ReviewView = lazy(() => import('../views/ReviewView/ReviewView'));
const HomeView = lazy(() => import('../views/HomeView/HomeView'));
const SingleFilmView = lazy(() =>
  import('../views/SingleFilmView/SingleFilmView')
);
const MoviesSearchView = lazy(() =>
  import('../views/MoviesSearchView/MoviesSearchView')
);

export const App = () => {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<PendingView />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/movies/:movieId" element={<SingleFilmView />}>
            <Route path="cast" element={<CastView />} />
            <Route path="review" element={<ReviewView />} />
          </Route>
          <Route path="/movies" element={<MoviesSearchView />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
