import * as actionTypes from './actionTypes';
// import store from '../../index';

const initState = {
  isBright: true, // 是否日間模式
  displayMode: 'card', // ['card', 'row'] 筆記呈現模式
  dialogVisible: false,
  note: {
    name: '',
    cover: ''
  },
  displayCard: 'edit' // ['list', 'edit'] [列表, 編輯]
};

const reducer = (state = initState, action) => {
  const { type, params } = action;

  switch (type) {
    case actionTypes.SET: {
      const { field, value } = params;

      return {
        ...state,
        [field]: value
      };
    }
    // case actionTypes.OPEN_FILE_CONTROL_LIST: {
    //   const { dataType, clientX, clientY, fullPath } = action;

    //   return {
    //     ...state,
    //     fileControlList: {
    //       ...state.fileControlList,
    //       isVisible: true,
    //       dataType,
    //       clientX,
    //       clientY,
    //       fullPath
    //     }
    //   };
    // }
    default:
      return state;
  }
};

export default reducer;
