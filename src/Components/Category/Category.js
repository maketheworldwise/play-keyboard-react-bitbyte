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
  /* width: 100%; */
  min-width: 343px;
  max-width: 720px;
  padding-left: 16px;
  padding-right: 16px;
  height: 48px;
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none;

  li {
    padding-top: 14px;
    cursor: pointer;
    span {
      width: 148px;
      display: block;
      text-align: center;
      height: 32px;
      color: #aaabb3;
      &.active {
        font-weight: 700;
        color: #ff417d;
        border-bottom: 2px solid #ff417d;
      }
    }
  }

  ::-webkit-scrollbar {
    display: none;
    width: 0 !important;
    scrollbar-width: none;
  }
`;
