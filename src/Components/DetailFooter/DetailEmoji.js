import React from 'react';
import styled from 'styled-components';
import like from '../../Assets/Svgs/like.svg';
import heart from '../../Assets/Svgs/heart.svg';
import cheer from '../../Assets/Svgs/cheer.svg';
import have from '../../Assets/Svgs/have.svg';

const DetailEmoji = () => {
  return (
    <StyledDetailEmoji>
      <div className="emoji_inner_box">
        <div className="emoji_like">
          <img alt="맘에들어요" src={like} className="emoji_img" />
          <span className="emoji_text">맘에들어요</span>
          <span className="emoji_number">0</span>
        </div>
        <div className="emoji_heart">
          <img alt="심쿵했어요" src={heart} className="emoji_img" />
          <span className="emoji_text">심쿵했어요</span>
          <span className="emoji_number">0</span>
        </div>
        <div className="emoji_cheer">
          <img alt="응원해요" src={cheer} className="emoji_img" />
          <span className="emoji_text">응원해요</span>
          <span className="emoji_number">0</span>
        </div>
        <div className="emoji_have">
          <img alt="갖고싶어요" src={have} className="emoji_img" />
          <span className="emoji_text">갖고싶어요</span>
          <span className="emoji_number">0</span>
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

      span {
        color: rgba(145, 146, 153, 1);
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
