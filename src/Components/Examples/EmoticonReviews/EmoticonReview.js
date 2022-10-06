import styles from './EmoticonReview.module.scss';

function EmoticonReview(props) {
  const { image, name, count } = props;
  return (
    <div className={styles.emoticon_review_container}>
      <div className={styles.emoticon_review_image}>
        <img src={image} alt="none" />
      </div>
      <div className={styles.emoticon_review_name}>
        <span>{name}</span>
      </div>
      <div className={styles.emoticon_review_count}>
        <span>{count}</span>
      </div>
    </div>
  );
}

export default EmoticonReview;
