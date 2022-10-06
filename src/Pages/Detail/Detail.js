import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetail } from './Api';

import Emoticons from '../../Components/page2/Emoticons';
import DetailEmoji from '../../Components/DetailFooter/DetailEmoji';
import DetailButton from '../../Components/DetailFooter/DetailButton';
import EmoticonInfo from '../../Components/EmoticonInfo/EmoticonInfo';
import EmoticonList from '../../Components/Examples/EmoticonList/EmoticonList';
import EmoticonReviews from '../../Components/Examples/EmoticonReviews/EmoticonReviews';
import EmoticonFeatures from '../../Components/Examples/EmoticonFeatures/EmoticonFeatures';

import styles from './Detail.module.scss';

function Detail() {
  const { themeId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getDetail(themeId).then(json => setData(json.data));
  }, []);

  return (
    <>
      <div className={styles.detail_container_top}>
        <EmoticonInfo data={data} />
        <Emoticons data={data} />
        {/* <EmoticonList data={data} /> */}
        {/* <DetailEmoji /> */}
      </div>
      {/* <DetailButton /> */}
      <div className={styles.detail_container_bottom}>
        <EmoticonReviews />
        <EmoticonFeatures />
      </div>
    </>
  );
}

export default Detail;
