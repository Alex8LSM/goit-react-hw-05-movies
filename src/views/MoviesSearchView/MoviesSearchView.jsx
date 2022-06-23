import { useNavigate, useLocation } from 'react-router-dom';
import Searchbar from '../../components/Searchbar/Searchbar';
import FilmStatus from '../FilmStatus/FilmStatus';

export default function MoviesSearchView() {
  const navigate = useNavigate();
  const location = useLocation();
  const requestUrl = new URLSearchParams(location.search).get('request');

  const onRequestChange = request => {
    navigate({ ...location, search: `request=${request}` });
  };

  const onSubmit = name => {
    onRequestChange(name);
  };
  console.log('navigate: ', navigate);
  console.log('location: ', location);
  console.log('requestUrl: ', requestUrl);

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <FilmStatus requestUrl={requestUrl} />
    </>
  );
}
