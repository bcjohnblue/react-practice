import React from 'react';
import { useState } from 'react';
import styles from './Emoji.module.sass';

import emojiList from '../../utils/emojiList';

const Emoji = props => {
  const [isShow, setIsShow] = useState(false);
  const [page, setPage] = useState(1);

  const emojiDOM = (() => {
    const EMOJI_NUMBER_PER_PAGE = 12;
    const showEmojiList = emojiList.slice(
      EMOJI_NUMBER_PER_PAGE * (page - 1),
      EMOJI_NUMBER_PER_PAGE * page
    );
    const emojiClick = () => {
      setIsShow(false);
    };
    const DOM = showEmojiList.map((emoji, index) => {
      return (
        <div key={index} onClick={emojiClick}>
          {emoji}
        </div>
      );
    });

    const totalPage = Math.ceil(emojiList.length / EMOJI_NUMBER_PER_PAGE);
    const pageDOM = (
      <div key="page" className={styles.pagination}>
        {page}/{totalPage}
      </div>
    );

    return [...DOM, pageDOM];
  })();

  const iconClick = () => {
    setIsShow(!isShow);
  };
  const directionClick = pageNumber => {
    setPage(page + pageNumber);
  };

  return (
    <div className={styles.emoji}>
      <span className={styles.icon} onClick={iconClick}>
        (｀◕‸◕´+)
      </span>
      {isShow ? (
        <>
          <div className={styles.dialog}>
            <div
              className={styles.direction}
              onClick={() => {
                directionClick(-1);
              }}
            >
              &lt;
            </div>
            <div className={styles.emoji_container}>{emojiDOM}</div>
            <div
              className={styles.direction}
              onClick={() => {
                directionClick(1);
              }}
            >
              &gt;
            </div>
          </div>
          <div className={styles.bubble}></div>{' '}
        </>
      ) : null}
    </div>
  );
};

export default Emoji;
