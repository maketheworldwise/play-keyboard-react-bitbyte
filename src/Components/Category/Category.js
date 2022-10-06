import { useState } from 'react';
import styled from 'styled-components';

function Category({ category, handleName }) {
  const [active, setActive] = useState('');

  return (
    <>
      <Wrap>
        {category.map(list => {
          return (
            <li key={list}>
              <span
                className={active === list ? 'active' : ''}
                onClick={e => {
                  e.preventDefault();
                  setActive(e.target.textContent);
                  handleName(list);
                }}
              >
                {list}
              </span>
            </li>
          );
        })}
      </Wrap>
    </>
  );
}
export default Category;

const Wrap = styled.ul`
  width: 100%;
  height: 48px;
  display: flex;
  overflow-x: scroll;
  /* border: 1px solid blue; */
  -ms-overflow-style: none;

  li {
    margin-right: 16px;
    padding-top: 14px;

    span {
      margin-right: 12px;
      margin-left: 12px;
      width: 100%;
      display: block;
      text-align: center;
      height: 32px;
      color: #aaabb3;
      
      &.active {
        /* width: 100%; */
        font-weight: 700;
        color: #ff417d;
        border-bottom: 2px solid #ff417d;
        box-sizing: content-box;
      }
    }
  }

  ::-webkit-scrollbar {
    display: none;
    width: 0 !important;
    scrollbar-width: none;
  }
`;