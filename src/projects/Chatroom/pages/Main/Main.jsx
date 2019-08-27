import React from 'react';
import { useState, useReducer } from 'react';
import styles from './Main.module.sass';

import ContextStore from '../../store/context';
import ReducerStore from '../../store/reducer';
import StateStore from '../../store/state';

import PreSelect from '../../layout/PreSelect/PreSelect';
import Lobby from '../../layout/Lobby/Lobby';

// const activeChatroom = [
//   {
//     type: 'login',
//     message: {
//       name: 'id22222'
//     }
//   },
//   {
//     type: 'message',
//     message: {
//       name: 'love5566',
//       text: '安安 今天要聊什麼'
//     }
//   }
// ];

const Main = () => {
  document.title = 'VS Code 聊天室';
  const [chatType, setChatType] = useState('');
  const [renderComponent, setRenderComponent] = useState('Lobby');

  const value = (() => {
    const [chatroom, dispatchChatroom] = useReducer(ReducerStore, StateStore);

    return {
      ...chatroom,
      dispatch: dispatchChatroom
    };
  })();

  const renderDOM = (() => {
    switch (renderComponent) {
      case 'PreSelect':
        return (
          <PreSelect
            chatType={chatType}
            setChatType={setChatType}
            setRenderComponent={setRenderComponent}
          />
        );
      case 'Lobby':
        return <Lobby />;
    }
  })();

  return (
    <ContextStore.Provider value={value}>
      <div className={styles.main}>{renderDOM}</div>
    </ContextStore.Provider>
  );
};

export default Main;
