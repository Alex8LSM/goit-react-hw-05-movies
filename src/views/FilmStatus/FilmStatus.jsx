import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchFilmsByKeyWord } from '../../services/film-api';
import ErrorView from '../ErrorView/ErrorView';
import PendingView from '../PendingView/PendingView';
import FilmsView from '../FilmsView/FilmsView';
import image from '../../images/backgroung.png';
import s from './FilmStatus.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function FilmStatus({ requestUrl }) {
  const [error, setError] = useState({});
  const [status, setStatus] = useState(Status.IDLE);
  const [films, setFilms] = useState([]);

  const fetchMovies = name => {
    fetchFilmsByKeyWord(name)
      .then(request => {
        if (request.total_results > 0) {
          setFilms(request.results);
          setStatus(Status.RESOLVED);
        } else return Promise.reject(new Error('Bad request'));
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  };

  useEffect(() => {
    if (requestUrl !== null) {
      fetchMovies(requestUrl);
      return;
    }
  }, [requestUrl]);
  if (status === Status.IDLE) {
    return (
      <div>
        <img className={s.image} src={image} alt="movie-roll" />
      </div>
    );
  }
  if (status === Status.PENDING) {
    return <PendingView />;
  }
  if (status === Status.REJECTED) {
    return <ErrorView message={error.message} />;
  }
  if (status === Status.RESOLVED) {
    return (
      <>
        <FilmsView films={films} />
      </>
    );
  }
}

FilmStatus.propTypes = {
  requestUrl: PropTypes.string,
};
