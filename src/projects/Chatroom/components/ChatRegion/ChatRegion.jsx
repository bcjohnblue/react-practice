import React from 'react';
import styles from './ChatRegion.module.sass';
import clsx from 'clsx';

import { useContext } from 'react';
import ContextStore from '../../store/context';

import colorStyle from '../../utils/colorStyle';

const ChatRegion = props => {
  const { data } = props;
  const { selfName } = useContext(ContextStore);

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
  const messageDOM = ({ name, text, fileName, imageUrl }) => {
    const textDOM = (() => {
      if (imageUrl) {
        return (
          <img
            src={imageUrl}
            className={clsx(styles.line, styles.text)}
            alt=""
          />
        );
      } else {
        return (
          <div className={clsx(styles.line, styles.text)}>
            {fileName ? `您傳送了${fileName}檔案` : text}
          </div>
        );
      }
    })();
    const selfNameDOM = (
      <>
        <div className={styles.self_name_message} style={colorStyle.green}>
          <div className={styles.line}>
            <span>&lt;!--{name}</span>
          </div>
          {textDOM}
          <div className={styles.line}>
            <span>--&gt;</span>
          </div>
        </div>
      </>
    );
    const otherNameDOM = (
      <>
        <div className={styles.other_name_message}>
          <div className={styles.line}>
            <span>&lt;</span>
            <span style={colorStyle.orange}>{name}</span>
            <span>&gt;</span>
          </div>
          <div className={clsx(styles.line, styles.text)}>{text}</div>
          <div className={styles.line}>
            <span>&lt;/</span>
            <span style={colorStyle.orange}>{name}</span>
            <span>&gt;</span>
          </div>
        </div>
      </>
    );

    return name === selfName ? selfNameDOM : otherNameDOM;
  };

  const DOM = data.map((item, index) => {
    const { type, message } = item;

    const mapTypeToDOM = {
      link: linkDOM(message),
      message: messageDOM(message)
    };

    const time = (() => {
      const hours = new Date().getHours();
      const minutes = new Date()
        .getMinutes()
        .toString()
        .padStart(2, 0);

      return `${hours}：${minutes}`;
    })();

    return (
      <div className={styles.item} key={index}>
        <span className={styles.time} style={colorStyle.time}>
          {time}
        </span>
        <div className={styles.message_item}>{mapTypeToDOM[type]}</div>
      </div>
    );
  });

  return <div className={styles.chat_region}>{DOM}</div>;
};

export default ChatRegion;
