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
        {data.map(item => (
          <ThemeCard key={item.themeId} id={item.themeId} item={item} />
        ))}
      </StyledCardList>
    </>
  );
};

const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;

  min-width: 343px;
  max-width: 650px;

  margin: 0 auto;
`;

export default ThemeCardList;
