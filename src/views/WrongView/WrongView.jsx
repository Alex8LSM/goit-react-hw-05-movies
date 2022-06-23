import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function WrongView() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/', { replace: true });
  }, []);
}
