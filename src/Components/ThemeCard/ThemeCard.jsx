import React, { useState, useEffect } from 'react';

import preview from '../../Assets/Images/Theme-preview.png';
import downloadIcon from '../../Assets/Svgs/ic_all_download.svg';
import gemIcon from '../../Assets/Svgs/ic_all_zem.svg';
import styled from 'styled-components';

const ThemeCard = ({ item }) => {
  const { imageUrl, name, hashtag, downloads, price } = item;

  return (
    <StyledThemeCard>
      <img className="card_img" src={imageUrl} />
      <h3>{name}</h3>
      <div className="tag_box">
        {hashtag.map(tag => (
          <h6>#{tag}</h6>
        ))}
      </div>
      <div className="info_container">
        <div className="download_box">
          <img src={downloadIcon} />
          <p>{downloads}</p>
        </div>
        <div className="price_box">
          <img src={gemIcon} />
          <p>{price}</p>
        </div>
      </div>
    </StyledThemeCard>
  );
};

const StyledThemeCard = styled.div`
  margin-bottom: 16px;
  margin-right: 15px;

  width: 164px;

  .card_img {
    margin-bottom: 8px;
    margin-right: 15px;
    width: 164px;
    height: 130px;
  }

  h3 {
    margin-bottom: 2px;

    width: 164px;
    height: 20px;

    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    display: flex;
    align-items: center;

    color: #42444c;

    text-overflow: ellipsis;
  }

  .tag_box {
    width: 164px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;

    h6 {
      display: inline;
      text-overflow: ellipsis;
      margin: 0 3px 3px 0;

      height: 18px;

      font-weight: 400;
      font-size: 12px;
      line-height: 18px;

      color: #aaabb3;

      opacity: 1;
    }
  }

  .info_container {
    display: flex;
    justify-content: space-between;
    width: 164px;

    .download_box {
      display: flex;
      align-items: center;

      img {
        margin-right: 3px;
        width: 12px;
        height: 12px;
      }

      p {
        width: 14px;
        height: 18px;

        font-weight: 500;
        font-size: 12px;
        line-height: 18px;

        display: flex;
        align-items: center;

        color: #aaabb3;
      }
    }

    .price_box {
      display: flex;
      align-items: center;

      img {
        margin-right: 4px;
        width: 12px;
        height: 12px;
      }

      p {
        width: 14px;
        height: 18px;

        font-weight: 500;
        font-size: 12px;
        line-height: 18px;

        color: #7dc9fc;
      }
    }
  }
`;
export default ThemeCard;
