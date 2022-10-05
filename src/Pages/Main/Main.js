import { useEffect, useState } from 'react';
import { getCategories, getThemes } from './Api';
import Category from './Category';

import styles from './Main.module.scss';

function Main() {
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    getCategories().then(json => setCategory(json.data));
    getThemes(name).then(
      json => console.log(json.data)
      // setName(json.data)
    );
  }, [name]);

  const handleName = el => {
    setName(el);
  };

  return (
    <div className={styles.main_container}>
      <Category
        handleName={handleName}
        category={category}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}

export default Main;
