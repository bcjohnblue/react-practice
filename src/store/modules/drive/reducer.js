import * as actionTypes from './actionTypes';

const initState = {
  fileControlList: {
    isVisible: false,
    clientX: 0,
    clientY: 0,
    fullPath: ''
  },
  progressBarDialog: {
    isVisible: false,
    // dialogType: 'upload', // ['upload', 'download']
    size: 0,
    totalSize: 1,
    title: ''
  }
};

const reducer = (state = initState, action) => {
  const { type } = action;

  switch (type) {
    case actionTypes.OPEN_FILE_CONTROL_LIST: {
      const { clientX, clientY, fullPath } = action;

      return {
        ...state,
        fileControlList: {
          ...state.fileControlList,
          isVisible: true,
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
    default:
      return state;
  }
};

export default reducer;
