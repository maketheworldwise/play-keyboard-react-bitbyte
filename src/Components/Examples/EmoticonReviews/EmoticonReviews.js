import EmoticonReview from './EmoticonReview';

import styles from './EmoticonReviews.module.scss';
import like from '../../../Assets/Svgs/like.svg';
import heart from '../../../Assets/Svgs/heart.svg';
import cheer from '../../../Assets/Svgs/cheer.svg';
import have from '../../../Assets/Svgs/have.svg';

function EmoticonReviews() {
  return (
    <div className={styles.emoticon_reviews_container}>
      <EmoticonReview image={like} name={'맘에들어요'} count={0} />
      <EmoticonReview image={heart} name={'심쿵했어요'} count={0} />
      <EmoticonReview image={cheer} name={'응원해요'} count={0} />
      <EmoticonReview image={have} name={'갖고싶어요'} count={0} />
    </div>
  );
}

export default EmoticonReviews;
