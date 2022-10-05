import HashTag from './HashTag/HashTag';
import HashTagContainer from './HashTag/HashTagContainer';

import styles from './DetailInfo.module.scss';
import IcAllShare from '../../Assets/Svgs/ic_all_share.svg';

function DetailInfo(props) {
  const data = props.data;

  return (
    <div className={styles.detail_info_container}>
      <div className={styles.detail_image}>
        <img src={data.imageUrl} alt="none" />
      </div>
      <div className={styles.detail_info}>
        <div className={styles.detail_info_left}>
          <span>{data.name}</span>
          <span>{data.creator}</span>
        </div>
        <div className={styles.detail_info_right}>
          <div>
            <img src={IcAllShare} alt="none" />
          </div>
        </div>
      </div>
      <HashTagContainer>
        {data.hashtag &&
          data.hashtag.map((tag, idx) => {
            return <HashTag key={idx} name={tag} />;
          })}
      </HashTagContainer>
      <div className={styles.detail_info_ad}>
        <span>AD</span>
      </div>
    </div>
  );
}

export default DetailInfo;
