import { useParams } from 'react-router-dom';
import { getDetail } from './Api';

import styles from './Detail.module.scss';

function Detail() {
  const { themeId } = useParams();

  return <div className={styles.detail_container}>Detail</div>;
}

export default Detail;
