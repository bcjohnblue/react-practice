import React from 'react';
import { useState } from 'react';
import styles from './Main.module.sass';

// import 'emoji-mart/css/emoji-mart.css';
// import { Picker } from 'emoji-mart';

import PreSelect from '../../layout/PreSelect/PreSelect';
import Lobby from '../../layout/Lobby/Lobby';

const Main = () => {
  const [chatType, setChatType] = useState('');
  const [chatRoomType, setChatRoomType] = useState('');
  const [selfName, setSelfName] = useState('');

  return (
    <div className={styles.main}>
      {chatRoomType ? (
        <Lobby />
      ) : (
        <PreSelect
          chatType={chatType}
          setChatType={setChatType}
          chatRoomType={chatRoomType}
          setChatRoomType={setChatRoomType}
          selfName={selfName}
          setSelfName={setSelfName}
        />
      )}
    </div>
  );
};

export default Main;
