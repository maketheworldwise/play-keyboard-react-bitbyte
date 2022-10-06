import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import logo from '../../Assets/logo.png';

function Header() {
  return (
    <>
      <StyledHeader>
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

  div.titleContainer {
    display: flex;
    position: absolute;
    width: 100%;
    max-width: 720px;
    height: 56px;
    top: 22px;
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
    top: 80px;
    left: 16px;
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
