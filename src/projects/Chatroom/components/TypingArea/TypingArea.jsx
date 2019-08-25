import React from 'react';
import styles from './TypingArea.module.sass';

import Emoji from '../Emoji/Emoji';

import colorStyle from '../../utils/colorStyle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';

const TypingArea = props => {
  const { selfName } = props;
  return (
    <div className={styles.typing_area}>
      <div className={styles.typing_main}>
        <span style={colorStyle.self}>{selfName}</span>
        <span>&nbsp;&gt;</span>
        {/* cols="30" rows="10" */}
        <textarea className={styles.text_area}></textarea>
      </div>
      <div className={styles.toolbar}>
        <label htmlFor="upload_attachment">
          <FontAwesomeIcon
            icon={faPaperclip}
            className={styles.icon_paperclip}
          />
        </label>
        <input type="file" id="upload_attachment" style={{ display: 'none' }} />
        <label htmlFor="upload_image">
          <FontAwesomeIcon icon={faImage} />
        </label>
        <input type="file" id="upload_image" style={{ display: 'none' }} />
        <Emoji></Emoji>
        <span className={styles.send_button}>傳送&nbsp;&gt;</span>
      </div>
    </div>
  );
};

export default TypingArea;
