import React from 'react';
import styles from './ChatRegion.module.sass';
import clsx from 'clsx';

import colorStyle from '../../utils/colorStyle';

const ChatRegion = props => {
  const { data } = props;

  const linkDOM = ({ name }) => {
    return (
      <>
        <span>&lt;</span>
        <span style={colorStyle.blue}>link</span>
        <span style={colorStyle.lightblue}>&nbsp;rel</span>
        <span>=</span>
        <span style={colorStyle.orange}>"random"</span>
        <span style={colorStyle.lightblue}>&nbsp;href</span>
        <span>=</span>
        <span style={colorStyle.orange}>"{name}已進入聊天室"</span>
        <span>&gt;</span>
      </>
    );
  };
  const messageDOM = ({ name, text }) => {
    return (
      <>
        <div className={styles.line}>
          <span>&lt;</span>
          <span style={colorStyle.blue}>{name}</span>
          <span>&gt;</span>
        </div>
        <div className={clsx(styles.line, styles.text)}>{text}</div>
        <div className={styles.line}>
          <span>&lt;/</span>
          <span style={colorStyle.blue}>{name}</span>
          <span>&gt;</span>
        </div>
      </>
    );
  };
  const DOM = data.map((item, index) => {
    const { type, message } = item;

    const mapTypeToDOM = {
      link: linkDOM(message),
      message: messageDOM(message)
    };

    return (
      <div className={styles.item} key={index}>
        <span className={styles.time} style={colorStyle.time}>
          10：11
        </span>
        <div className={styles.message_item}>{mapTypeToDOM[type]}</div>
      </div>
    );
  });

  return <div className={styles.chat_region}>{DOM}</div>;
};

export default ChatRegion;
