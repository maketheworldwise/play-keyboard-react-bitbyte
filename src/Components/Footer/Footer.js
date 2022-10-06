import { useState } from 'react';
import Admin from '../../Assets/Svgs/navbar/admin.svg';
import Admin_p from '../../Assets/Svgs/navbar/admin_p.svg';
import Store from '../../Assets/Svgs/navbar/store.svg';
import Store_p from '../../Assets/Svgs/navbar/store_p.svg';
import Heart from '../../Assets/Svgs/navbar/heart.svg';
import Heart_p from '../../Assets/Svgs/navbar/heart_p.svg';
import Dia from '../../Assets/Svgs/navbar/dia.svg';
import Dia_p from '../../Assets/Svgs/navbar/dia_p.svg';
import styled from 'styled-components';

function Footer() {
  const [store, setStore] = useState(false);
  const [dia, setDia] = useState(false);
  const [heart, setHeart] = useState(false);
  const [admin, setAdmin] = useState(false);

  const handleStore = () => {
    setStore(true);
    setDia(false);
    setHeart(false);
    setAdmin(false);
  };

  const handleDia = () => {
    setDia(true);
    setStore(false);
    setHeart(false);
    setAdmin(false);
  };
  const handleHeart = () => {
    setHeart(true);
    setStore(false);
    setDia(false);
    setAdmin(false);
  };
  const handleAdmin = () => {
    setAdmin(true);
    setStore(false);
    setDia(false);
    setHeart(false);
  };

  return (
    <>
      <StyledFooter>
        <div className="footer-wrap">
          <div className="nav">
            <div className="icons " onClick={handleStore}>
              <img src={store ? Store_p : Store} alt="icon" />
              <p style={store ? { color: '#FF417D' } : { color: '#919299' }}>
                스토어
              </p>
            </div>
            <div className="icons " onClick={handleDia}>
              <img src={dia ? Dia_p : Dia} alt="icon" />
              <p style={dia ? { color: '#FF417D' } : { color: '#919299' }}>
                충전소
              </p>
            </div>
            <div className="icons " onClick={handleHeart}>
              <img src={heart ? Heart_p : Heart} alt="icon" />
              <p style={heart ? { color: '#FF417D' } : { color: '#919299' }}>
                MY테마
              </p>
            </div>
            <div className="icons" onClick={handleAdmin}>
              <img src={admin ? Admin_p : Admin} alt="icon" />
              <p style={admin ? { color: '#FF417D' } : { color: '#919299' }}>
                설정
              </p>
            </div>
          </div>
        </div>
      </StyledFooter>
    </>
  );
}

export default Footer;

const StyledFooter = styled.div`
  display: inline-block;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: white;
  margin: 0 auto;
  left: 0;
  right: 0;

  div.footer-wrap {
    display: flex;
    width: 100%;
    max-width: 720px;
    height: 3.5em; //56px;
    box-shadow: 4px 4px 4px 4px lightgray;
    margin: 0 auto;
    position: relative;

    div.nav {
      display: flex;
      width: 100%;
      height: 3.5em; //56px;
      justify-content: space-between;

      div.icons {
        display: inline-block;
        width: 11vw;
        height: 6vh;
        vertical-align: middle;
        margin: auto;
        padding: 5px 15px 5px 15px;
        align-items: center;
        text-align: center;

        img {
          display: inline-block;
          width: 1.503rem;
          height: 1.333rem;
          margin-bottom: 3px;
        }
        p {
          font-size: 0.6rem;
        }
      }
    }
  }
  @media screen and (min-width: 600px) {
    .div.footer-wrap {
      font-size: 1.25em; //20px;
    }
  }
`;
