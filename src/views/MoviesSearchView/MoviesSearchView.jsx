import { useNavigate, useLocation } from 'react-router-dom';
import Searchbar from '../../components/Searchbar/Searchbar';
import FilmStatus from '../FilmStatus/FilmStatus';

export default function MoviesSearchView() {
  const navigate = useNavigate();
  const location = useLocation();
  const requestUrl = new URLSearchParams(location.search).get('query');

  const onRequestChange = request => {
    navigate({ ...location, search: `query=${request}` });
  };

  const onSubmit = name => {
    onRequestChange(name);
  };
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <FilmStatus requestUrl={requestUrl} />
    </>
  );
}
