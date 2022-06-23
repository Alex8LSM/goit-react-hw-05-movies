import { useState, useEffect } from 'react';

import { fetchReviewsForFilm } from '../../services/film-api';
import s from './ReviewView.module.css';
import photo from '../../images/photo.png';

export default function ReviewView({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviewsForFilm(movieId).then(request => setReviews(request.results));
  }, [movieId]);
  console.log(reviews);
  return (
    <div className={s.wrapper}>
      {reviews.length > 0 ? (
        <>
          <ul className={s.list}>
            {reviews.map((item, index) => (
              <li key={index} className={s.item}>
                <div className={s.author}>
                  <img
                    className={s.avatar}
                    src={
                      item.author_details.avatar_path
                        ? item.author_details.avatar_path.slice(
                            1,
                            item.author_details.avatar_path.length
                          )
                        : photo
                    }
                    alt={item.author}
                  />
                  <h3 className={s.title}>{item.author}</h3>
                </div>
                <p className={s.descr}> {item.content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h3 className={s.text}>We don't have any review for this movie</h3>
      )}
    </div>
  );
}
