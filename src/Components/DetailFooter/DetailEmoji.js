import React, { useState } from 'react';
import styled from 'styled-components';
import like from '../../Assets/Svgs/like.svg';
import heart from '../../Assets/Svgs/heart.svg';
import cheer from '../../Assets/Svgs/cheer.svg';
import have from '../../Assets/Svgs/have.svg';

const DetailEmoji = () => {
  // 클릭 시 숫자 변화
  const [isLikeCount, setIsLikeCount] = useState(0);
  const [isHeartCount, setIsHeartCount] = useState(0);
  const [isCheerCount, setIsCheerCount] = useState(0);
  const [isHaveCount, setIsHaveCount] = useState(0);
  // 클릭시 색깔 변화
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isCheerClicked, setIsCheerClicked] = useState(false);
  const [isHaveClicked, setIsHaveClicked] = useState(false);

  return (
    <StyledDetailEmoji>
      <div className="emoji_inner_box">
        <div className="emoji_like">
          <img
            alt="맘에들어요"
            src={like}
            className="emoji_img"
            onClick={() => {
              setIsLikeCount(isLikeCount + 1);
              setIsLikeClicked(true);
              setIsHeartClicked(false);
              setIsCheerClicked(false);
              setIsHaveClicked(false);
            }}
          />
          <span
            className={
              'emoji_text' +
              ' ' +
              (isLikeClicked ? 'emoji_selected' : 'emoji_primary')
            }
            onClick={() => {
              setIsLikeCount(isLikeCount + 1);
              setIsLikeClicked(true);
              setIsHeartClicked(false);
              setIsCheerClicked(false);
              setIsHaveClicked(false);
            }}
          >
            맘에들어요
          </span>
          <span
            className={
              'emoji_number' +
              ' ' +
              (isLikeClicked ? 'emoji_selected' : 'emoji_primary')
            }
            onClick={() => {
              setIsLikeCount(isLikeCount + 1);
              setIsLikeClicked(true);
              setIsHeartClicked(false);
              setIsCheerClicked(false);
              setIsHaveClicked(false);
            }}
          >
            {isLikeCount}
          </span>
        </div>
        <div className="emoji_heart">
          <img
            alt="심쿵했어요"
            src={heart}
            className="emoji_img"
            onClick={() => {
              setIsHeartCount(isHeartCount + 1);
              setIsLikeClicked(false);
              setIsHeartClicked(true);
              setIsCheerClicked(false);
              setIsHaveClicked(false);
            }}
          />
          <span
            className={
              'emoji_text' +
              ' ' +
              (isHeartClicked ? 'emoji_selected' : 'emoji_primary')
            }
            onClick={() => {
              setIsHeartCount(isHeartCount + 1);
              setIsLikeClicked(false);
              setIsHeartClicked(true);
              setIsCheerClicked(false);
              setIsHaveClicked(false);
            }}
          >
            심쿵했어요
          </span>
          <span
            className={
              'emoji_number' +
              ' ' +
              (isHeartClicked ? 'emoji_selected' : 'emoji_primary')
            }
            onClick={() => {
              setIsHeartCount(isHeartCount + 1);
              setIsLikeClicked(false);
              setIsHeartClicked(true);
              setIsCheerClicked(false);
              setIsHaveClicked(false);
            }}
          >
            {isHeartCount}
          </span>
        </div>
        <div className="emoji_cheer">
          <img
            alt="응원해요"
            src={cheer}
            className="emoji_img"
            onClick={() => {
              setIsCheerCount(isCheerCount + 1);
              setIsLikeClicked(false);
              setIsHeartClicked(false);
              setIsCheerClicked(true);
              setIsHaveClicked(false);
            }}
          />
          <span
            className={
              'emoji_text' +
              ' ' +
              (isCheerClicked ? 'emoji_selected' : 'emoji_primary')
            }
            onClick={() => {
              setIsCheerCount(isCheerCount + 1);
              setIsLikeClicked(false);
              setIsHeartClicked(false);
              setIsCheerClicked(true);
              setIsHaveClicked(false);
            }}
          >
            응원해요
          </span>
          <span
            className={
              'emoji_number' +
              ' ' +
              (isCheerClicked ? 'emoji_selected' : 'emoji_primary')
            }
            onClick={() => {
              setIsCheerCount(isCheerCount + 1);
              setIsLikeClicked(false);
              setIsHeartClicked(false);
              setIsCheerClicked(true);
              setIsHaveClicked(false);
            }}
          >
            {isCheerCount}
          </span>
        </div>
        <div className="emoji_have">
          <img
            alt="갖고싶어요"
            src={have}
            className="emoji_img"
            onClick={() => {
              setIsHaveCount(isHaveCount + 1);
              setIsLikeClicked(false);
              setIsHeartClicked(false);
              setIsCheerClicked(false);
              setIsHaveClicked(true);
            }}
          />
          <span
            className={
              'emoji_text' +
              ' ' +
              (isHaveClicked ? 'emoji_selected' : 'emoji_primary')
            }
            onClick={() => {
              setIsHaveCount(isHaveCount + 1);
              setIsLikeClicked(false);
              setIsHeartClicked(false);
              setIsCheerClicked(false);
              setIsHaveClicked(true);
            }}
          >
            갖고싶어요
          </span>
          <span
            className={
              'emoji_number' +
              ' ' +
              (isHaveClicked ? 'emoji_selected' : 'emoji_primary')
            }
            onClick={() => {
              setIsHaveCount(isHaveCount + 1);
              setIsLikeClicked(false);
              setIsHeartClicked(false);
              setIsCheerClicked(false);
              setIsHaveClicked(true);
            }}
          >
            {isHaveCount}
          </span>
        </div>
      </div>
    </StyledDetailEmoji>
  );
};

const StyledDetailEmoji = styled.div`
  .emoji_inner_box {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 0 0.625em 1.125em 0.625em; // 0 10px 18px 10px

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .emoji_img {
        width: 2em;
        margin-bottom: 0.5em; // 8px
      }

      .emoji_primary {
        color: rgba(145, 146, 153, 1);
      }

      .emoji_selected {
        color: #ff417d;
      }

      .emoji_text {
        display: block;
        font-size: 0.875em; // 14px
        margin-bottom: 0.3125em; // 5px
      }

      .emoji_number {
        display: block;
        font-size: 0.625em; // 10px
        margin-bottom: 1.125em; // 18px
      }
    }
  }

  @media screen and (min-width: 600px) {
    .emoji_inner_box {
      font-size: 20px;
    }
  }
`;

export default DetailEmoji;
