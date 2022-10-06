import styled from 'styled-components';
import { useState } from 'react';
import Admin from '../../Assets/Svgs/bottom_nav/admin.png';
import Admin_p from '../../Assets/Svgs/bottom_nav/admin_p.png';
import Store from '../../Assets/Svgs/bottom_nav/store.png';
import Store_p from '../../Assets/Svgs/bottom_nav/store_p.png';
import Heart from '../../Assets/Svgs/bottom_nav/heart.png';
import Heart_p from '../../Assets/Svgs/bottom_nav/heart_p.png';
import Dia from '../../Assets/Svgs/bottom_nav/dia.png';
import Dia_p from '../../Assets/Svgs/bottom_nav/dia_p.png';

function Footer() {
  const [store, setStore] = useState(true);
  const [dia, setDia] = useState(true);
  const [heart, setHeart] = useState(false);
  const [admin, setAdmin] = useState(true);

  const handleStore = () => {
    setStore(!store);
  };

  const handleDia = () => {
    setDia(!dia);
  };
  const handleHeart = () => {
    setHeart(!heart);
  };
  const handleAdmin = () => {
    setAdmin(!admin);
  };

  return (
    <>
      <StyledFooter>
        <div className="footer-wrap">
          <div className="nav">
            <div className="icons" onClick={handleStore}>
              <img src={store ? Store : Store_p} alt="icon" />
              <p style={store ? { color: '#919299' } : { color: '#FF417D' }}>
                스토어
              </p>
            </div>
            <div className="icons" onClick={handleDia}>
              <img src={dia ? Dia : Dia_p} alt="icon" />
              <p style={dia ? { color: '#919299' } : { color: '#FF417D' }}>
                충전소
              </p>
            </div>
            <div className="icons" onClick={handleHeart}>
              <img src={heart ? Heart : Heart_p} alt="icon" />
              <p style={heart ? { color: '#919299' } : { color: '#FF417D' }}>
                MY테마
              </p>
            </div>
            <div className="icons" onClick={handleAdmin}>
              <img src={admin ? Admin : Admin_p} alt="icon" />
              <p style={admin ? { color: '#919299' } : { color: '#FF417D' }}>
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
  width: 100%;
  position: fixed;
  bottom: 0;

  div.footer-wrap {
    display: flex;
    width: 100%;
    max-width: 720px;
    bottom: 0;
    left: 0;
    right: 0;
    height: 56px;
    border-top: 1px solid gray;
    margin: 0 auto;
    position: absolute;

    div.nav {
      display: flex;
      width: 100%;
      height: 56px;
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
`;
