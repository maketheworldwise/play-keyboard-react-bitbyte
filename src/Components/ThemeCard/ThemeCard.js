import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

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
      <img className="card_img" src={imageUrl} alt="none" />
      <h3 className="card_name">{name}</h3>
      <div className="tag_box">
        {hashtag.map((tag, idx) => (
          <h6 key={idx}>#{tag}</h6>
        ))}
      </div>
      <div className="info_container">
        <div className="download box">
          <img src={downloadIcon} alt="none" />
          <p>{downloads}</p>
        </div>
        <div className="price box">
          <img src={gemIcon} alt="none" />
          <p>{price}</p>
        </div>
      </div>
    </StyledThemeCard>
  );
};

const Ellipsis = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

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
    ${Ellipsis}
  }

  .tag_box {
    width: 100%;
    margin-bottom: 0.2em; // 3px
    color: #aaabb3;
    ${Ellipsis}

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

    .box {
      display: flex;
      align-items: center;

      img {
        width: 12px;
        height: 12px;
        margin-right: 3px;
      }

      p {
        font-weight: 500;
        font-size: 0.75em; // 12px
        line-height: 18px;
      }
    }

    .download {
      color: #aaabb3;
    }

    .price p {
      padding-right: 3px;
      color: #7dc9fc;
    }
  }
`;
export default ThemeCard;
