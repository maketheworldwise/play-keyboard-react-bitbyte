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
  height: 123px;
  margin: 0 auto;
  padding-right: 10px;

  div.titleContainer {
    display: flex;
    position: relative;
    width: 100%;
    max-width: 720px;
    height: 56px;
    top: 22px;
    align-items: center;
    padding: 0 10px 0 10px;

    div.title {
      display: flex;
      position: relative;
      width: 100%;
      justify-content: space-between;
      margin-right: 10px;

      svg.search {
        display: flex;
        position: relative;
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
    width: 100%;
    height: 24px;
    top: 25px;
    left: 16px;
    /* margin-left: 10px; */

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
