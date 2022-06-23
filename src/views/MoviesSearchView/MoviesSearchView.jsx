import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Searchbar from '../../components/Searchbar/Searchbar';
import FilmStatus from '../FilmStatus/FilmStatus';

export default function MoviesSearchView() {
  const navigate = useNavigate();
  const location = useLocation();
  const [filmName, setFilmName] = useState();

  const requestUrl = new URLSearchParams(location.search).get('request');

  const onRequestChange = request => {
    navigate({ ...location, search: `request=${request}` });
  };

  const onSubmit = name => {
    setFilmName(name);
    onRequestChange(name);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <FilmStatus filmName={filmName} requestUrl={requestUrl} />
    </>
  );
}
