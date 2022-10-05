import { getCategories, getThemes } from './Api';

import ThemeCardList from '../../Components/ThemeCard/ThemeCardList';

import styles from './Main.module.scss';

function Main() {
  return (
    <div className={styles.main_container}>
      Main
      <ThemeCardList />
    </div>
  );
}

export default Main;
