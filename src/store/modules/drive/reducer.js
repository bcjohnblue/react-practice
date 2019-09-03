import * as actionTypes from './actionTypes';

const initState = {
  fileControlList: {
    isVisible: false,
    clientX: 0,
    clientY: 0
  }
};

const reducer = (state = initState, action) => {
  const { type, field, value } = action;

  switch (type) {
    // case actionTypes.SET_VALUE: {
    //   console.log(state[field]);

    //   return {
    //     ...state,
    //     [field]: value
    //   };
    // }
    case actionTypes.OPEN_FILE_CONTROL_LIST: {
      const { clientX, clientY } = action;
      return {
        ...state,
        fileControlList: {
          ...state.fileControlList,
          isVisible: true,
          clientX,
          clientY
        }
      };
    }
    case actionTypes.CLOSE_FILE_CONTROL_LIST: {
      return {
        ...state,
        fileControlList: {
          ...state.fileControlList,
          isVisible: false
        }
      };
    }
    default:
      return state;
  }
};

export default reducer;
