import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import logo from '../../Assets/logo.png';
import Siganl from '../../Assets/Svgs/top_nav/signal.png';
import Wifi from '../../Assets/Svgs/top_nav/wifi.png';
import Battery from '../../Assets/Svgs/top_nav/battery.png';

function Header() {
  return (
    <>
      <StyledHeader>
        <div className="timeContainer">
          <p className="time">9:41</p>
          <div className="mobile_style">
            <img src={Siganl} alt="icon" />
            <img src={Wifi} alt="icon" />
            <img src={Battery} alt="icon" />
          </div>
        </div>
        <div className="titleContainer">
          <div className="title">
            <img src={logo} alt="logo"></img>
            <BiSearch className="search" />
          </div>
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
  max-width: 720px;
  height: 123px;
  margin: 0 auto;

  div.timeContainer {
    display: flex;
    justify-content: space-between;

    p.time {
      position: relative;
      width: 54px;
      height: 18px;
      top: 14px;
      left: 10px;
      font-weight: 600;
      font-size: 15px;
      line-height: 18px;
      text-align: center;
    }

    div.mobile_style {
      display: inline-block;
      position: relative;
      top: 14px;
      right: 10px;
      margin-right: 10px;

      img {
        margin-left: 4px;
      }
    }
  }

  div.titleContainer {
    display: flex;
    position: absolute;
    width: 100%;
    max-width: 720px;
    height: 56px;
    top: 44px;
    align-items: center;

    div.title {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin: 10px;

      svg.search {
        display: flex;
        position: relative;
        width: 1.125rem;
        height: 1.125rem;
        margin-right: 10px;
      }
      img {
        display: flex;
        position: relative;
        width: 136px;
        height: 18px;
        margin-left: 15px;
      }
    }
  }

  div.h3box {
    display: flex;
    position: relative;
    width: 100%;
    height: 24px;
    left: 16px;
    top: 80px;
    margin-left: 10px;

    h3 {
      display: inline-block;
      position: relative;
      font-size: 1rem;
      line-height: 24px;
      font-weight: 700;
      color: #42444c;
      text-align: center;
    }
  }
`;
