import * as actionTypes from './actionTypes';

const initState = {
  isBright: true, // 是否日間模式
  displayMode: 'card', // ['card', 'row'] 筆記呈現模式
  dialogVisible: false,
  note: {
    id: undefined,
    title: '', // 標題
    text: '', // 內容
    isStar: false, // 是否星號
    cover: '' // 封面圖片 ['Triangle', 'Watercolor', 'Gradient']
  },
  displayCard: 'list', // ['list', 'edit'] [列表, 編輯]
  data: [],
  message: {
    isVisible: false,
    status: '',
    title: ''
  }
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
    case actionTypes.INIT_DATA: {
      const data = JSON.parse(localStorage.getItem('data'));

      return {
        ...state,
        data
      };
    }
    case actionTypes.FILTER_DATA: {
      const filterAll = () => {
        return JSON.parse(localStorage.getItem('data'));
      };
      const filterStar = () => {
        const newData = state.data.filter(item => item.isStar);
        return [state.data[0], ...newData];
      };
      const filterName = name => {
        if (name === '') return filterAll();

        const newData = state.data.slice(1).filter(item => {
          const { title } = item;
          return ~title.indexOf(name);
        });

        return [state.data[0], ...newData];
      };

      const { method, name } = params;
      const mapMethodToData = {
        all: filterAll(),
        star: filterStar(),
        name: filterName(name)
      };

      return {
        ...state,
        data: mapMethodToData[method]
      };
    }
    case actionTypes.SAVE_DATA: {
      console.log(state.note);

      const storageData = JSON.parse(localStorage.getItem('data'));
      const { id, title, text, cover, isStar } = state.note;
      const newData = {
        id,
        title,
        text,
        cover,
        isStar
      };

      const updateData = () => {
        const replaceIndex = storageData.findIndex(item => item.id === id);

        storageData.splice(replaceIndex, 1, newData);
        return storageData;
      };
      const insertData = () => {
        const newId = storageData.slice(-1)[0];
        newData.id = newId;

        storageData.push(newData);
        return storageData;
      };

      const isUpdate = storageData.some(item => item.id === id);
      const newStorageData = isUpdate ? updateData() : insertData();

      localStorage.setItem('data', JSON.stringify(newStorageData));
      return {
        ...state,
        data: newStorageData
      };
    }
    case actionTypes.SAVE_STAR_DATA: {
      const storageData = JSON.parse(localStorage.getItem('data'));
      const { id } = params;

      for (let index = 0; index < storageData.length; index++) {
        const item = storageData[index];

        if (item.id === id) {
          storageData[index].isStar = !item.isStar;
          break;
        }
      }

      localStorage.setItem('data', JSON.stringify(storageData));
      return {
        ...state,
        data: storageData
      };
    }
    case actionTypes.SHOW_NOTE_MESSANGE: {
      const { status, title } = params;

      return {
        ...state,
        message: {
          isVisible: true,
          status,
          title
        }
      };
    }
    case actionTypes.CLOSE_NOTE_MESSANGE: {
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
