import React from 'react';
import styled from 'styled-components';

import ThemeCard from './ThemeCard';

const ThemeCardList = ({ data }) => {
  return (
    <StyledCardList>
      <div className="card_list_container">
        {data.map(item => (
          <ThemeCard key={item['_id']} id={item.themeId} item={item} />
        ))}
      </div>
    </StyledCardList>
  );
};

const StyledCardList = styled.div`
  padding: 0px 16px;
  margin: 16px auto 0;

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
