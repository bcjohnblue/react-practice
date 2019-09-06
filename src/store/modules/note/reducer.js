import * as actionTypes from './actionTypes';
// import store from '../../index';

const initState = {
  isBright: true, // 是否日間模式
  fileControlList: {
    isVisible: false,
    dataType: '', // ['file', 'folder']
    clientX: 0,
    clientY: 0,
    fullPath: ''
  },
  progressBarDialog: {
    isVisible: false,
    size: 0,
    totalSize: 1,
    title: ''
  },
  message: {
    isVisible: false,
    status: '',
    title: ''
  }
};

const reducer = (state = initState, action) => {
  const { type } = action;

  switch (type) {
    case actionTypes.OPEN_FILE_CONTROL_LIST: {
      const { dataType, clientX, clientY, fullPath } = action;

      return {
        ...state,
        fileControlList: {
          ...state.fileControlList,
          isVisible: true,
          dataType,
          clientX,
          clientY,
          fullPath
        }
      };
    }
    default:
      return state;
  }
};

export default reducer;
