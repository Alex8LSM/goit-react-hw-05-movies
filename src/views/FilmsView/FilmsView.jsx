import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMAGE_URL } from '../../services/film-api';
import photo from '../../images/movie-roll-court.jpg';
import s from './FilmsView.module.css';

export default function FilmsView({ films }) {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {films.map(film => (
        <li key={film.id} className={s.item}>
          <Link to={`${film.id}`} state={{ from: location }} className={s.link}>
            <img
              className={s.image}
              src={film.poster_path ? IMAGE_URL + film.poster_path : photo}
              alt={film.title}
              width="300"
              height="450"
            />
            <p className={s.title}>{film.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

FilmsView.propTypes = {
  images: PropTypes.array,
};
