import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { useEffect, useState } from 'react';
import { getCategories, getThemes } from './Api';
import Category from './Category';

import styles from './Main.module.scss';

function Main() {
  const [category, setCategory] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    getCategories().then(json => setCategory(json.data));
    getThemes(name).then(
      // json => console.log(json.data) //data consol로 확인
      json => setName(json.data)
    );
  }, [name]);

  const handleName = el => {
    setName(el);
  };

  return (
    <div className={styles.main_container}>
      <Header />
      <Category handleName={handleName} category={category} />
      <Footer />
    </div>
  );
}

export default Main;
