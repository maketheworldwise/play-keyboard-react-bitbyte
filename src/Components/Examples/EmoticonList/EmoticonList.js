import Emoticon from './Emoticon';

import styles from './EmoticonList.module.scss';

function EmoticonList(props) {
  const data = props.data;

  return (
    <div className={styles.emoticon_list_container}>
      <div className={styles.emoticon_list}>
        {data.figure &&
          data.figure.map((e, idx) => {
            return <Emoticon key={idx} imageUrl={e.imageUrl} />;
          })}
      </div>
      <div className={styles.emoticon_info}>
        <span>{data.reviewNoticeContent}</span>
        <span>{data.reviewNoticeTitle}</span>
      </div>
    </div>
  );
}

export default EmoticonList;
