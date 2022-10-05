import styles from './HashTag.module.scss';

function HashTag(props) {
  return (
    <div className={styles.theme_info_tag}>
      <span>{props.name}</span>
    </div>
  );
}

export default HashTag;
