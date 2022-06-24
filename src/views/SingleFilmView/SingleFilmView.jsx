import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { fetchPrimaryInfoAboutFilm, IMAGE_URL } from '../../services/film-api';
import s from './SingleFilmView.module.css';
import ErrorView from '../ErrorView/ErrorView';

export default function SingleFilmsView() {
  const { movieId } = useParams();
  const [film, setFilm] = useState('not set');
  const [fromLink, setfromLink] = useState('/');
  const location = useLocation();
  useEffect(() => {
    fetchPrimaryInfoAboutFilm(movieId)
      .then(setFilm)
      .catch(err => {
        return setFilm(null);
      });
  }, [movieId]);
  useEffect(() => {
    if (location.state) {
      setfromLink(location.state.from);
    }
  }, [location.state]);
  return (
    <>
      {film ? (
        <div>
          <nav>
            <button className={s.backBtn}>
              <NavLink to={fromLink} className={s.backLink}>
                ← Go Back
              </NavLink>
            </button>
          </nav>
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
          <Outlet />
        </div>
      ) : (
        <>
          <nav>
            <button className={s.backBtn}>
              <NavLink to={fromLink} className={s.backLink}>
                ← Go Back
              </NavLink>
            </button>
          </nav>
          <ErrorView message={'Film not found'} />
        </>
      )}
    </>
  );
}
