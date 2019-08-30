import React from 'react';
import { useState } from 'react';
import styles from './PreSelect.module.sass';

import { useContext } from 'react';
import ContextStore from '../../store/context';

import BracketText from '../../components/BracketText/BracketText';

import { CHAT_TYPE_LIST, CHAT_ROOM_TYPE_LIST } from '../../utils/constant';

const PreSelect = props => {
  const { chatType, setChatType } = props;
  const { setRenderComponent } = props;
  const { selfName, dispatch } = useContext(ContextStore);
  const [step, setStep] = useState(1);

  const firstStepDOM = (() => {
    const onClick = chatType => {
      console.log(chatType);

      setChatType(chatType);
    };
    return CHAT_TYPE_LIST.map((item, index) => {
      const { type, text } = item;
      return (
        <BracketText
          onClick={() => {
            onClick(type);
            setStep(2);
          }}
          key={index}
        >
          {text}
        </BracketText>
      );
    });
  })();
  const secondStepDOM = (() => {
    const onChange = event => {
      dispatch({ type: 'SET', field: 'selfName', value: event.target.value });
    };
    const chatTypeItem = CHAT_TYPE_LIST.find(item => item.type === chatType);
    const chatTypeText = chatTypeItem ? chatTypeItem.text : '';

    return (
      <>
        <div className={styles.chat_type_text}>{chatTypeText}</div>
        <input
          type="text"
          value={selfName}
          onChange={onChange}
          className={styles.input}
          placeholder="請輸入"
        />
        <BracketText
          onClick={() => {
            if (!selfName.length) {
              window.alert('請輸入名稱');
              return;
            }
            setStep(3);
          }}
        >
          確定
        </BracketText>
      </>
    );
  })();
  const thirdStepDOM = (() => {
    const onClick = chatRoomType => {
      if (chatRoomType === '1to1')
        dispatch({ type: 'ONETOONE', field: 'activeChatroomList' });

      setRenderComponent('Lobby');
    };
    return CHAT_ROOM_TYPE_LIST.map((item, index) => {
      let { type, text } = item;
      if (type === 'all') text = `進入${text}`;

      return (
        <BracketText
          onClick={() => {
            onClick(type);
          }}
          key={index}
        >
          {text}
        </BracketText>
      );
    });
  })();

  const mapStepToStepDOM = {
    1: firstStepDOM,
    2: secondStepDOM,
    3: thirdStepDOM
  };

  return <div className={styles.pre_select}>{mapStepToStepDOM[step]}</div>;
};

export default PreSelect;
