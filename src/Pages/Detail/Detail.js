import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetail } from './Api';
import Emoticons from '../../Components/page2/Emoticons';
import DetailInfo from '../../Components/DetailInfo/DetailInfo';

import styles from './Detail.module.scss';

function Detail() {
  const { themeId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getDetail(themeId).then(json => setData(json.data));
  }, []);

  return (
    <div className={styles.detail_container}>
      <DetailInfo data={data} />
      <Emoticons />
    </div>
  );
}

export default Detail;
