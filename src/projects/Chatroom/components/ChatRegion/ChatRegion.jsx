import React, { Suspense } from 'react';
import styles from './ChatRegion.module.sass';
import clsx from 'clsx';

import { useContext } from 'react';
import ContextStore from '../../store/context';

import colorStyle from '../../utils/colorStyle';
import { resolve } from 'path';

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
  const messageDOM = ({ name, text }) => {
    const selfNameDOM = (
      <>
        <div className={styles.self_name_message} style={colorStyle.green}>
          <div className={styles.line}>
            <span>&lt;!--{name}</span>
          </div>
          <div className={clsx(styles.line, styles.text)}>{text}</div>
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
  const imageDOM = ({ name, image }) => {
    // var reader = new FileReader();

    // let text = '';
    // reader.onload = function(e) {
    //   text = e.target.result;
    //   console.log(text);
    // };

    // reader.readAsDataURL(image);
    return <div>image</div>;
  };

  const DOM = data.map((item, index) => {
    const { type, message } = item;

    const mapTypeToDOM = {
      link: linkDOM(message),
      message: messageDOM(message),
      image: imageDOM(message)
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
