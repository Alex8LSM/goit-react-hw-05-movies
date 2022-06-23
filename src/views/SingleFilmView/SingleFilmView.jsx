import { useState, useEffect, lazy, Suspense } from 'react';

import { useParams, NavLink, Route, Routes } from 'react-router-dom';

import { fetchPrimaryInfoAboutFilm, IMAGE_URL } from '../../services/film-api';
import s from './SingleFilmView.module.css';
import PendingView from '../PendingView/PendingView';

const CastView = lazy(() => import('../CastView/CastView'));
const ReviewView = lazy(() => import('../ReviewView/ReviewView'));

export default function SingleFilmsView() {
  const { moviesId } = useParams();
  const [film, setFilm] = useState(null);
  useEffect(() => {
    fetchPrimaryInfoAboutFilm(moviesId).then(setFilm);
  }, [moviesId]);
  return (
    <>
      {film && (
        <>
          <div>
            <div className={s.wrapper}>
              <div className={s.image__wrapper}>
                <img
                  className={s.image}
                  src={`${IMAGE_URL}${film.poster_path}`}
                  alt={film.title || film.name}
                />
              </div>
              <div>
                <h2 className={s.title}>{film.title || film.name}</h2>
                <h3 className={s.subtitle}>Rating: </h3>
                <p className={s.rating}>{film.vote_average}</p>
                <h3 className={s.subtitle}>Overview</h3>
                <p className={s.descr}>{film.overview}</p>
                <h3 className={s.subtitle}>Release date : </h3>
                <p className={s.release}>{film.release_date}</p>

                {film.genres && (
                  <>
                    <h3 className={s.subtitle}>Genres</h3>
                    <ul className={s.genres}>
                      {film.genres.map((item, index) => (
                        <li key={index} className={s.item}>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            <nav>
              <NavLink
                to="cast"
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
              >
                Cast
              </NavLink>
              <NavLink
                to="review"
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
              >
                Review
              </NavLink>
            </nav>

            <Suspense fallback={<PendingView />}>
              <Routes>
                <Route path="cast" element={<CastView moviesId={moviesId} />} />
                <Route
                  path="review"
                  element={<ReviewView movieId={moviesId} />}
                />
              </Routes>
            </Suspense>
          </div>
        </>
      )}
    </>
  );
}
