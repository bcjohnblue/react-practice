import nameList from '../mock/nameList';

export const getRandom = type => {
  switch (type) {
    case 'name':
      const length = nameList.length;
      const index = parseInt(Math.random() * length);

      return nameList[index];
    case 'id':
      const MAX_LIMIT = 1e3;

      return Math.round(Math.random() * MAX_LIMIT);
    default:
      break;
  }
};
