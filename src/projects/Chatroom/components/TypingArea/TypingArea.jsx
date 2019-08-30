import React from 'react';
import styles from './TypingArea.module.sass';

import { useState } from 'react';

import { useContext } from 'react';
import ContextStore from '../../store/context';

import Emoji from '../Emoji/Emoji';

import colorStyle from '../../utils/colorStyle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';

const TypingArea = props => {
  const { selfName, dispatch } = useContext(ContextStore);
  const [text, setText] = useState('');
  const [file] = useState('');
  const [image] = useState('');

  const dispatchMockMessange = () => {
    setTimeout(() => {
      dispatch({
        type: 'ADDMOCKMESSANGE',
        field: 'activeChatroomList'
      });
    }, 1000);
  };

  const emojiClick = emoji => {
    setText(text + emoji);
  };
  const sendClick = () => {
    if (!text.length) return;
    dispatch({
      type: 'SENDMESSANGE',
      field: 'activeChatroomList',
      text
    });
    dispatchMockMessange();
    setText('');
  };

  const fileChangeHandler = event => {
    const fileName = event.target.files[0].name;

    dispatch({
      type: 'SENDMESSANGE',
      field: 'activeChatroomList',
      fileName: fileName
    });
    dispatchMockMessange();
  };
  const imageChangeHandler = event => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = function(e) {
      dispatch({
        type: 'SENDMESSANGE',
        field: 'activeChatroomList',
        imageUrl: e.target.result
      });
      dispatchMockMessange();
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.typing_area}>
      <div className={styles.typing_main}>
        <span style={colorStyle.self}>{selfName}</span>
        <span>&nbsp;&gt;</span>
        <textarea
          className={styles.text_area}
          value={text}
          onChange={event => {
            setText(event.target.value);
          }}
        ></textarea>
      </div>
      <div className={styles.toolbar}>
        <label htmlFor="upload_attachment">
          <FontAwesomeIcon
            icon={faPaperclip}
            className={styles.icon_paperclip}
          />
        </label>
        <input
          type="file"
          id="upload_attachment"
          style={{ display: 'none' }}
          value={file}
          onChange={fileChangeHandler}
        />
        <label htmlFor="upload_image">
          <FontAwesomeIcon icon={faImage} />
        </label>
        <input
          type="file"
          id="upload_image"
          accept="image/*"
          style={{ display: 'none' }}
          value={image}
          onChange={imageChangeHandler}
        />
        <Emoji emojiClick={emojiClick}></Emoji>
        <span className={styles.send_button} onClick={sendClick}>
          傳送&nbsp;&gt;
        </span>
      </div>
    </div>
  );
};

export default TypingArea;
