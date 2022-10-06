import { useEffect, useState } from 'react';

import { getCategories, getThemes } from './Api';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Category from '../../Components/Category/Category';
import ThemeCardList from '../../Components/ThemeCard/ThemeCardList';

import styles from './Main.module.scss';

function Main() {
  const [category, setCategory] = useState([]);
  const [name, setName] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    getCategories().then(json => setCategory(json.data));
  }, []);

  useEffect(() => {
    getThemes(name).then(json => setData(json.data));
  }, [name]);

  const handleName = el => {
    setName(el);
  };

  return (
    <div className={styles.main_container}>
      <Header />
      <Category handleName={handleName} category={category} />
      <ThemeCardList data={data} />
      <Footer />
    </div>
  );
}

export default Main;
