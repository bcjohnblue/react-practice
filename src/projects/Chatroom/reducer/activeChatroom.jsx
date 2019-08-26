const initState = [];
const reducer = (activeChatroom, action) => {
  const clockState = action.clockState;

  switch (action.type) {
    case 'DECREMENT':
      return {
        ...activeChatroom,
        [clockState]: {
          second: activeChatroom[clockState].second - 1,
          count: activeChatroom[clockState].count + 1
        }
      };
    case 'RESET':
      return {
        ...activeChatroom,
        [clockState]: {
          second: initState[clockState].second,
          count: initState[clockState].count
        }
      };
    default:
      return initState;
  }
};

export default {
  initState,
  reducer
};
