import React from 'react';
import styled from 'styled-components';
import icondia from '../../Assets/Svgs/icon_dia.svg';

const DetailButton = () => {
  return (
    <StyledButton>
      <div className="button_container">
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
    </StyledButton>
  );
};

const StyledButton = styled.div`
  .button_container {
    margin: 0 auto;
    min-width: 248px;
    max-width: 650px;
    .line {
      width: 100%;
      border: 0.0625em solid #f2f3f7; // 1px
    }
    .inquiry_btn {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      /* width: 330px; */
      height: 2.5em; // 40px
      padding: 0 10px;
      margin: 1.5em 1.375em; // 24px 22px
      border: 0.1875em solid #ff417d; // 3px
      border-radius: 1.25em; // 20px
      background-color: #ffffff;
      .inquiry_text {
        color: #ff417d;
        font-size: 0.875em; // 14px
        font-weight: 700;
      }
    }
    .purchase_inner_box {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5625em 0.625em; // 9px 10px
      box-shadow: 0px -0.1875em 0.25em 0.125em rgba(0, 0, 0, 0.15); // 0px -3px 4px 2px
      .purchase_btn {
        width: 100%;
        width: 22.125em; // 354px
        height: 2.875em; // 46px
        border: none;
        border-radius: 1.875em; // 30px
        background-color: #ff417d;
        .purchase_mainbox {
          span {
            color: #ffffff;
            font-size: 0.875em; // 14px
            font-weight: 700;
          }
          img {
            width: 0.875em; // 14px
            height: 0.875em; // 14px
            margin: 0 0.3125em; // 0 5px
            vertical-align: middle;
          }
        }
        .purchase_subtext {
          color: rgba(255, 255, 255, 1);
          font-size: 0.75em; // 12px
          font-weight: 400;
        }
      }
    }
  }
`;

export default DetailButton;
