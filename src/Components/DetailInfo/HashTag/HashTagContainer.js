import styles from './HashTagContainer.module.scss';

function HashTagContainer(props) {
  return <div className={styles.hashtag_container}>{props.children}</div>;
}

export default HashTagContainer;
