import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { getThemes } from '../../Pages/Main/Api';

import ThemeCard from './ThemeCard';

const ThemeCardList = () => {
  const [data, setData] = useState([]);

  const location = useLocation();
  const url = new URLSearchParams(location.search);
  const categoryName = url.get('category');

  useEffect(() => {
    getThemes('LIVE').then(json => {
      setData(json.data);
    });
  }, []);

  return (
    <>
      <StyledCardList>
        <div className="card_list_container">
          {data.map(item => (
            <ThemeCard key={item.themeId} id={item.themeId} item={item} />
          ))}
        </div>
      </StyledCardList>
    </>
  );
};

const StyledCardList = styled.div`
  padding: 0px 16px;
  margin: 0 auto;

  min-width: 343px;
  max-width: 720px;

  @media screen and (min-width: 600px) {
    font-size: 20px;
  }

  .card_list_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export default ThemeCardList;
