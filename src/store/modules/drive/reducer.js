import * as actionTypes from './actionTypes';
import store from '../../index';

const initState = {
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
    case actionTypes.CLOSE_FILE_CONTROL_LIST: {
      return {
        ...state,
        fileControlList: {
          ...state.fileControlList,
          isVisible: false
        }
      };
    }
    case actionTypes.OPEN_PROGRESS_BAR_DIALOG: {
      const { size = 0, totalSize = 1, title } = action;

      return {
        ...state,
        progressBarDialog: {
          isVisible: true,
          size,
          totalSize,
          title
        }
      };
    }
    case actionTypes.CLOSE_PROGRESS_BAR_DIALOG: {
      return {
        ...state,
        progressBarDialog: {
          isVisible: false
        }
      };
    }
    case actionTypes.SHOW_MESSANGE: {
      const { status, title } = action;

      // Is it ok?
      setTimeout(() => {
        store.dispatch({ type: actionTypes.CLOSE_MESSANGE });
      }, 3000);

      return {
        ...state,
        message: {
          isVisible: true,
          status,
          title
        }
      };
    }
    case actionTypes.CLOSE_MESSANGE: {
      return {
        ...state,
        message: {
          ...state.message,
          isVisible: false
        }
      };
    }
    default:
      return state;
  }
};

export default reducer;
