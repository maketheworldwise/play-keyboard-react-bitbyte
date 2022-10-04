import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.ul`
  width: 360px;
  height: 48px;
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  overflow-x: scroll;
  border: 1px solid blue;
  -ms-overflow-style: none;

  li {
    width: 100%;
    display: flex;
    padding-left: 16px;
    color: #aaabb3;
  }
  ::-webkit-scrollbar {
    display: none;
    width: 0 !important;
    scrollbar-width: none;
  }
`;

function Category() {
  const [category, setCategory] = useState([]);
  const params = useParams();
  const cateId = params.cateId;

  useEffect(() => {
    fetch('https://api.plkey.app/theme/category', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        // console.log(result);
        setCategory(result.data);
      });
  }, []);

  return (
    <>
      <Wrap>
        {category.map(list => {
          return <li key={list.id}>{list}</li>;
        })}
      </Wrap>
    </>
  );
}
export default Category;
