import React from 'react';
import styled from 'styled-components';
import icondia from '../../Assets/Svgs/icon_dia.svg';
import like from '../../Assets/Svgs/like.svg';
import heart from '../../Assets/Svgs/heart.svg';
import cheer from '../../Assets/Svgs/cheer.svg';
import have from '../../Assets/Svgs/have.svg';

const StyledDetailFooter = styled.div`
  .detail_footer_box {
    min-width: 343px;
    min-height: 264px;
    /* max-width: 720px; */
    /* max-height: 555px; */
    .emoji_inner_box {
      /* width: 100%; */
      width: 375px;
      display: flex;
      justify-content: space-around;
      margin: 0 10px 18px 10px;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 30px;
          height: 24px;
          margin-bottom: 8px;
        }
        span {
          color: rgba(145, 146, 153, 1);
        }
        .emoji-text {
          width: 56px;
          height: 18px;
          font-size: 14px;
        }
        .emoji-number {
          width: 6px;
          height: 14px;
          font-size: 10px;
          margin-bottom: 18px;
        }
      }
    }
    .line {
      width: 375px;
      border: 1px solid #f2f3f7;
    }
    .inquiry_btn {
      /* width: 100%; */
      width: 375px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 330px;
      height: 40px;
      margin: 24px 22px;
      border: 3px solid #ff417d;
      border-radius: 20px;
      background-color: #ffffff;
      .inquiry_text {
        color: #ff417d;
        font-size: 14px;
        font-weight: 700;
      }
    }
    .purchase_inner_box {
      /* width: 100%; */
      width: 375px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 9px 10px;
      box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.15);
      .purchase_btn {
        width: 100%;
        width: 354px;
        height: 46px;
        border: none;
        border-radius: 30px;
        background-color: #ff417d;
        .purchase_mainbox {
          span {
            color: #ffffff;
            font-size: 14px;
            font-weight: 700;
          }
          img {
            width: 14px;
            height: 14px;
            margin: 0 5px;
            vertical-align: middle;
          }
        }
        .purchase_subtext {
          color: rgba(255, 255, 255, 1);
          font-size: 12px;
          font-weight: 400;
        }
      }
    }
  }
`;

const DetailFooter = () => {
  return (
    <StyledDetailFooter>
      <div className="detail_footer_box">
        <div className="emoji_inner_box">
          <div className="emoji_like">
            <img alt="맘에들어요" src={like} />
            <span className="emoji_text">맘에들어요</span>
            <span className="emoji_number">0</span>
          </div>
          <div className="emoji_heart">
            <img alt="심쿵했어요" src={heart} />
            <span className="emoji_text">심쿵했어요</span>
            <span className="emoji_number">0</span>
          </div>
          <div className="emoji_cheer">
            <img alt="응원해요" src={cheer} />
            <span className="emoji_text">응원해요</span>
            <span className="emoji_number">0</span>
          </div>
          <div className="emoji_have">
            <img alt="갖고싶어요" src={have} />
            <span className="emoji_text">갖고싶어요</span>
            <span className="emoji_number">0</span>
          </div>
        </div>
        <div className="line"></div>
        <button className="inquiry_btn">
          <span className="inquiry_text">상품 문의</span>
        </button>
        <div className="purchase_inner_box">
          <button className="purchase_btn">
            <div className="purchase_mainbox">
              <span className="purchase_text">구매</span>
              <img alt="아이콘다이아" src={icondia} />
              <span className="purchase_number">7</span>
            </div>
            <span className="purchase_subtext">광고제거 * 무제한 사용</span>
          </button>
        </div>
      </div>
    </StyledDetailFooter>
  );
};

export default DetailFooter;
