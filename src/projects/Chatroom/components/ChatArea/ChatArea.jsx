import React from 'react';
import styles from './ChatArea.module.sass';

import { useContext } from 'react';
import ContextStore from '../../store/context';

import Tabs from '../Tabs/Tabs';
import TabPane from '../TabPane/TabPane';

import ChatRegion from '../../components/ChatRegion/ChatRegion';

const ChatArea = props => {
  const { activeChatroomList, activeTab, dispatch } = useContext(ContextStore);

  const DOM = activeChatroomList.map(chatList => {
    const { id, name, data } = chatList;

    return (
      <TabPane label={name} name={id} key={id}>
        <ChatRegion data={data} />
      </TabPane>
    );
  });

  return (
    <div className={styles.chat_area}>
      <Tabs
        activeTab={activeTab}
        setActiveTab={value => {
          dispatch({ type: 'SET', field: 'activeTab', value });
        }}
        onRemoveTab={removeIndex => {
          dispatch({
            type: 'REMOVE',
            field: 'activeChatroomList',
            removeIndex
          });
        }}
        closable
      >
        {DOM}
      </Tabs>
    </div>
  );
};

export default ChatArea;
