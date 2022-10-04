import Category from './Category';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header_container}>
      <Category />
    </div>
  );
}

export default Header;
