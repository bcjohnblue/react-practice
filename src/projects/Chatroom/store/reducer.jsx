import { getRandom } from '../utils';
import roomList from '../mock/roomList';

const activeChatroomListReducer = (chatroom, action) => {
  const { activeChatroomList, selfName } = chatroom;
  const { type } = action;
  console.log(activeChatroomList);

  const addMessage = messange => {
    const { activeTab } = chatroom;
    const copyActiveChatroomList = JSON.parse(
      JSON.stringify(activeChatroomList)
    );
    const activeChatroom = copyActiveChatroomList.find(
      item => item.id === activeTab
    );

    activeChatroom.data.push(messange);

    return {
      ...chatroom,
      activeChatroomList: copyActiveChatroomList
    };
  };

  const addNewChatroomById = id => {
    const hasExistChatroom = ~activeChatroomList.findIndex(
      item => item.id === id
    );
    if (hasExistChatroom) return { ...chatroom, activeTab: id };

    const newChatroom = roomList.find(item => item.id === id);
    newChatroom.data.push({
      type: 'link',
      message: { name: selfName }
    });

    return {
      ...chatroom,
      activeTab: id,
      activeChatroomList: [...activeChatroomList, newChatroom]
    };
  };

  switch (type) {
    case 'ONETOONE': {
      const id = getRandom('id');
      const newActiveChatroomList = {
        id,
        name: `隨機聊天室 ${id}`,
        total: 2,
        data: [
          {
            type: 'link',
            message: {
              name: getRandom('name')
            }
          },
          {
            type: 'link',
            message: {
              name: selfName
            }
          }
        ]
      };

      return {
        ...chatroom,
        activeTab: id,
        activeChatroomList: [...activeChatroomList, newActiveChatroomList]
      };
    }
    case 'ENTERGROUP': {
      const length = roomList.length;
      const index = parseInt(Math.random() * length);
      const id = roomList[index].id;

      return addNewChatroomById(id);
    }
    case 'REMOVE': {
      let { activeTab } = chatroom;
      const { removeIndex } = action;
      const updateActiveChatroomList = activeChatroomList.filter(
        (_, index) => index !== removeIndex
      );

      const isRemoveActiveTab =
        activeTab === activeChatroomList[removeIndex].id;
      if (isRemoveActiveTab) {
        const newTab =
          activeChatroomList[removeIndex + 1] ||
          activeChatroomList[removeIndex - 1];

        if (newTab) {
          activeTab = newTab.id;
        }
      }

      return {
        ...chatroom,
        activeTab,
        activeChatroomList: updateActiveChatroomList
      };
    }
    case 'ADD': {
      const { id } = action;

      return addNewChatroomById(id);
    }
    case 'SENDMESSANGE': {
      const { text, fileName, imageUrl } = action;

      const message = {
        type: 'message',
        message: {
          name: selfName,
          text,
          fileName,
          imageUrl
        }
      };

      return addMessage(message);
    }
    case 'ADDMOCKMESSANGE': {
      const mockMessange = {
        type: 'message',
        message: {
          name: getRandom('name'),
          text: getRandom('message')
        }
      };

      return addMessage(mockMessange);
    }
    default:
      return chatroom;
  }
};

const defaultReducer = (chatroom, action) => {
  const { type, field, value } = action;

  switch (type) {
    case 'SET':
      const updateObj = {
        [field]: value
      };

      return { ...chatroom, ...updateObj };
    default:
      return chatroom;
  }
};

const reducer = (chatroom, action) => {
  const { field } = action;

  const mapFieldToReducer = {
    activeChatroomList: activeChatroomListReducer
  };

  return mapFieldToReducer[field]
    ? mapFieldToReducer[field](chatroom, action)
    : defaultReducer(chatroom, action);
};

export default reducer;
