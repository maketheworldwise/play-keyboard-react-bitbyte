import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import downloadIcon from '../../Assets/Svgs/ic_all_download.svg';
import gemIcon from '../../Assets/Svgs/ic_all_zem.svg';

const ThemeCard = ({ item }) => {
  const { themeId, imageUrl, name, hashtag, downloads, price } = item;

  const navigate = useNavigate();

  return (
    <StyledThemeCard
      onClick={() => {
        navigate(`/detail/${themeId}`);
      }}
    >
      <img className="card_img" src={imageUrl} />
      <h3 className="card_name">{name}</h3>
      <div className="tag_box">
        {hashtag.map((tag, idx) => (
          <h6 key={idx}>#{tag}</h6>
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
  width: 48.5%;
  margin-bottom: 1em; // 16px

  .card_img {
    width: 100%;
    margin-bottom: 0.5em; // 8px
    border-radius: 10px;
  }

  .card_name {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 0.1em; // 2px
    font-weight: 500;
    font-size: 0.88em; //14px
    line-height: 20px;
    color: #42444c;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  .tag_box {
    width: 100%;
    margin-bottom: 0.2em; // 3px
    color: #aaabb3;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;

    h6 {
      display: inline;
      margin-right: 3px;
      font-weight: 400;
      font-size: 0.75em; //12px
      line-height: 18px;
      color: #aaabb3;
      opacity: 1;
    }
  }

  .info_container {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .download_box {
      display: flex;
      align-items: center;

      img {
        width: 12px;
        height: 12px;
        margin-right: 3px;
      }

      p {
        display: flex;
        align-items: center;
        width: 14px;
        font-weight: 500;
        font-size: 0.75em; // 12px
        line-height: 18px;
        color: #aaabb3;
      }
    }

    .price_box {
      display: flex;
      align-items: center;

      img {
        width: 12px;
        height: 12px;
        margin-right: 4px;
      }

      p {
        width: 14px;
        font-weight: 500;
        font-size: 0.75em; // 12px
        line-height: 18px;
        color: #7dc9fc;
      }
    }
  }
`;
export default ThemeCard;
