import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';

function Header() {
  return (
    <>
      <StyledHeader>
        <div className="timeContainer">
          <p className="time">9:41</p>
          <div className="배터리"></div>
        </div>
        <div className="titleContainer">
          <div className="title"></div>
          <img src={logo}></img>
          <BiSearch className="search" />
        </div>
        <div className="h3box">
          <h3> 취향대로 골라보기 </h3>
        </div>
      </StyledHeader>
    </>
  );
}

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  height: 123px;
  border: 1px solid black;

  p.time {
    position: absolute;
    width: 54px;
    height: 18px;
    top: 14px;
    left: 21px;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
  }

  div.titleContainer {
    display: flex;
    position: absolute;
    /* width: 375px; */
    width: 100%;
    height: 56px;
    top: 44px;
    align-items: center;

    img {
      display: inline-block;
      position: absolute;
      width: 136px;
      height: 18px;
      left: 5%;
    }
  }

  svg.search {
    display: flex;
    position: absolute;
    right: 5%;
    width: 1.125rem;
    height: 1.125rem;
  }
  div.h3box {
    display: flex;
    position: absolute;
    width: 122px;
    height: 24px;
    left: 16px;
    top: 99px;

    h3 {
      display: inline-block;
      position: relative;
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
      color: #42444c;
      text-align: center;
    }
  }
`;
