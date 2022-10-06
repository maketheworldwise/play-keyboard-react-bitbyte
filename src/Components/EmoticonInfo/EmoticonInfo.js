import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { keyboardConfig } from './Keyboard/keyboardConfig';
import { HangulImeInputWrapper } from 'mole-virtual-keyboard';
import KeyboardReact from 'react-simple-keyboard';
import Sheet from 'react-modal-sheet';

import HashTag from './HashTag/HashTag';
import HashTagContainer from './HashTag/HashTagContainer';

import styles from './EmoticonInfo.module.scss';
import styled from 'styled-components';
import 'react-simple-keyboard/build/css/index.css';

import IcAllBack from '../../Assets/Svgs/ic_all_back.svg';
import IcAllShare from '../../Assets/Svgs/ic_all_share.svg';

let inputWrapper = HangulImeInputWrapper;

function EmoticonInfo(props) {
  const data = props.data;

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/main');
  };

  const [activateKeyboard, setActivateKeyboard] = useState(false);
  const handleActivateKeyboard = () => {
    setActivateKeyboard(!activateKeyboard);
  };

  const inputRef = useRef(null);
  useEffect(() => {
    if (!inputRef.current) return;
    inputWrapper = new HangulImeInputWrapper(inputRef.current);
  }, [activateKeyboard]);

  const [isShiftPressed, setIsShiftPressed] = useState(false);

  const onChange = input => {
    // console.log('Input changed', input);
  };

  const onKeyPress = button => {
    if (button === '{shift}') {
      setIsShiftPressed(!isShiftPressed);
      return;
    }

    if (button === '{bksp}') {
      inputWrapper?.backspace();
    } else if (button === '{space}') {
      inputWrapper?.insert(' ');
    } else {
      inputWrapper?.insert(button);
    }
  };

  return (
    <div className={styles.detail_info_container}>
      <div className={styles.detail_back_btn} onClick={handleBackClick}>
        <img src={IcAllBack} alt="none" />
      </div>
      <div className={styles.detail_image} onClick={handleActivateKeyboard}>
        <img src={data.imageUrl} alt="none" />
      </div>
      <div className={styles.detail_info}>
        <div className={styles.detail_info_left}>
          <span>{data.name}</span>
          <span>{data.creator}</span>
        </div>
        <div className={styles.detail_info_right}>
          <div>
            <img src={IcAllShare} alt="none" />
          </div>
        </div>
      </div>
      <CustomSheet
        isOpen={activateKeyboard}
        disableDrag={true}
        snapPoints={[-500, 50, 10, 0]}
      >
        <CustomSheet.Container>
          <CustomSheet.Header />
          <CustomSheet.Content>
            <div className={styles.keyboard_container}>
              <input
                ref={inputRef}
                type="text"
                onSelect={() => {
                  inputWrapper?.checkChangedSelect();
                }}
              />
              <KeyboardReact
                layout={keyboardConfig.layout}
                layoutName={isShiftPressed ? 'shift' : 'default'}
                display={keyboardConfig.display}
                onChange={onChange}
                onKeyPress={onKeyPress}
              />
            </div>
          </CustomSheet.Content>
        </CustomSheet.Container>
        <CustomSheet.Backdrop />
      </CustomSheet>
      <HashTagContainer>
        {data.hashtag &&
          data.hashtag.map((tag, idx) => {
            return <HashTag key={idx} name={tag} />;
          })}
      </HashTagContainer>
      <div className={styles.detail_info_ad}>
        <span>AD</span>
      </div>
    </div>
  );
}

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    /* custom styles */
  }
  .react-modal-sheet-container {
    /* custom styles */
  }
  .react-modal-sheet-header {
    /* custom styles */
  }
  .react-modal-sheet-drag-indicator {
    /* custom styles */
  }
  .react-modal-sheet-content {
    /* custom styles */
    background-color: #cecece;

    input {
      width: 100%;
      height: 50px;
      border: 1px solid #cecece;
      border-radius: 5px;
      box-sizing: border-box;
      text-align: center;
    }
  }
`;

export default EmoticonInfo;
