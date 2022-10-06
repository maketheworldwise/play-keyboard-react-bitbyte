import React from 'react';
import styled from 'styled-components';
import icondia from '../../Assets/Svgs/icon_dia.svg';

const DetailButton = () => {
  return (
    <StyledButton>
      <div className="button_container">
        <div className="line"></div>
        <div className="inquiry_container">
          <button className="inquiry_btn">
            <span className="inquiry_text">상품 문의</span>
          </button>
        </div>
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
    .line {
      width: 100%;
      border: 0.0625em solid #f2f3f7; // 1px
    }

    .inquiry_container {
      padding: 0 0.313em; // 0 5px
      margin: 1.5em 1.375em; // 24px 22px

      .inquiry_btn {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5em 0; // 8px 0
        border: 0.25em solid #ff417d; // 4px
        border-radius: 1.313em; // 21px
        background-color: #ffffff;

        .inquiry_text {
          width: 100%;
          color: #ff417d;
          font-size: 1.1em; // 17px
          font-weight: 700;
          line-height: 1.5em; // 24px
        }
      }
    }

    .purchase_inner_box {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.56em 0; // 9px 0
      border: none;
      box-shadow: 0em 0.063em 0.25em 0.125em rgba(0, 0, 0, 0.15); // 0px 1px 4px 2px

      .purchase_btn {
        width: 100%;
        border: none;
        border-radius: 1.88em; // 30px
        background-color: #ff417d;
        margin: 0 0.75em; // 0 12px
        padding: 0.438em 0; // 7px 0

        .purchase_mainbox {
          span {
            color: #ffffff;
            font-size: 1.125em; // 18px
            font-weight: 700;
          }

          img {
            width: 1.125em; // 18px
            height: 1.125em; // 18px
            margin: 0 0.3125em; // 0 5px
            vertical-align: middle;
          }
        }

        .purchase_subtext {
          color: rgba(255, 255, 255, 1);
          font-size: 0.875em; // 14px
          font-weight: 400;
          line-height: 1.13em; // 18px
          margin-top: 2px;
        }
      }
    }
  }

  @media screen and (min-width: 600px) {
    .button_container {
      font-size: 20px;
    }
  }
`;

export default DetailButton;
