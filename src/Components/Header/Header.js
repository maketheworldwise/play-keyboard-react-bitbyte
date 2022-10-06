import { BiSearch } from 'react-icons/bi';
import logo from '../../Assets/Svgs/logo.svg';
import styled from 'styled-components';

function Header() {
  return (
    <>
      <StyledHeader>
        <div className="titleContainer">
          <div className="title">
            <img src={logo} alt="logo" />
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
  min-width: 375px;
  height: 123px;

  div.titleContainer {
    display: flex;
    position: relative;
    width: 100%;
    max-width: 720px;
    height: 56px;
    top: 22px;
    align-items: center;
    margin: 0 auto;

    div.title {
      display: flex;
      position: relative;
      width: 100%;
      justify-content: space-between;
      padding: 10px;

      svg.search {
        display: flex;
        /* position: relative; */
        width: 1.125rem;
        height: 1.125rem;
      }
      img {
        display: flex;
        position: relative;
        width: 8.5em; //136px;
        height: 1.25em; //20px;
        padding: 0;
      }
    }
  }
  div.h3box {
    display: flex;
    position: relative;
    height: 30px;
    top: 25px;
    /* padding: 0 10px 0 10px; */

    h3 {
      display: flex;
      position: relative;
      width: 100%;
      font-size: 1rem;
      line-height: 24px;
      font-weight: 700;
      color: #42444c;
      padding: 0 15px 0 15px;
    }
  }
`;
