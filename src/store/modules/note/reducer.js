import * as actionTypes from './actionTypes';
// import store from '../../index';

const initState = {
  isBright: true, // 是否日間模式
  displayMode: 'card', // ['card', 'row'] 筆記呈現模式
  dialogVisible: false,
  note: {
    name: '',
    text: '',
    cover: ''
  },
  displayCard: 'list', // ['list', 'edit'] [列表, 編輯]
  data: []
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
    default:
      return state;
  }
};

export default reducer;
