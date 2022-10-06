import styles from './Emoticon.module.scss';

function Emoticon(props) {
  return (
    <div className={styles.emoticon_container}>
      {props.imageUrl && <img src={props.imageUrl} alt="none" />}
    </div>
  );
}

export default Emoticon;
