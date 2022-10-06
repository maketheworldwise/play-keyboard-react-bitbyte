import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetail } from './Api';
import Emoticons from '../../Components/page2/Emoticons';
import DetailInfo from '../../Components/DetailInfo/DetailInfo';
import DetailEmoji from '../../Components/DetailFooter/DetailEmoji';
import DetailButton from '../../Components/DetailFooter/DetailButton';
import EmoticonList from '../../Components/Examples/EmoticonList/EmoticonList';
import EmoticonReviews from '../../Components/Examples/EmoticonReviews/EmoticonReviews';

import styles from './Detail.module.scss';
import DetailFeatures from '../../Components/Examples/DetailFeatures/DetailFeatures';

function Detail() {
  const { themeId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getDetail(themeId).then(json => setData(json.data));
  }, []);

  return (
    <>
      <div className={styles.detail_container_top}>
        <DetailInfo data={data} />
        {/* <Emoticons /> */}
        <EmoticonList data={data} />
        {/* <DetailEmoji /> */}
      </div>
      {/* <DetailButton /> */}
      <div className={styles.detail_container_bottom}>
        <EmoticonReviews />
        <DetailFeatures />
      </div>
    </>
  );
}

export default Detail;
