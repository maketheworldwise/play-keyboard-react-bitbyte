import styles from './EmoticonFeatures.module.scss';
import icondia from '../../../Assets/Svgs/icon_dia.svg';

function EmoticonFeatures() {
  return (
    <div className={styles.detail_features_container}>
      <div className={styles.detail_inquiry}>
        <div className={styles.detail_inquiry_btn}>
          <span>상품 문의</span>
        </div>
      </div>
      <div className={styles.detail_purchase}>
        <div className={styles.detail_purchase_btn}>
          <div className={styles.detail_purchase_btn_top}>
            <span>구매</span>
            <span>
              &nbsp;
              <img src={icondia} alt="none" />
              &nbsp;
            </span>
            <span>7</span>
          </div>
          <div className={styles.detail_purchase_btn_bottom}>
            <span>광고제거 &#183; 무제한 사용</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmoticonFeatures;
