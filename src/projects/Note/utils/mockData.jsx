const mockData = [
  {
    id: 0,
    title: '新增筆記',
    isFirstData: true
  },
  {
    id: 1,
    title: '永遠的小馬哥-周潤發',
    text: '如果您心目中的周潤發',
    isStar: false,
    cover: 'Watercolor'
  },
  {
    id: 2,
    title: '生活雜記',
    text: '今天是 9/11 又是一天無聊的上班日',
    isStar: false,
    cover: 'Triangle'
  },
  {
    id: 3,
    title: '美式動態設計',
    text:
      'Welcome to the american design show. We will teach you amazing design pattern in next two month.',
    isStar: true,
    cover: 'Watercolor'
  },
  {
    id: 4,
    title: 'HTML/CSS',
    text: '<div>HTML/CSS<div>',
    isStar: true,
    cover: 'Gradient'
  },
  {
    id: 5,
    title: 'JavaScript',
    text: 'window.alert("JS!")',
    isStar: true,
    cover: 'Gradient'
  },
  {
    id: 6,
    title: '歌單',
    text:
      '推薦大家一個我很愛的歌手陳雪凝[綠色] https://www.youtube.com/watch?v=ryP_nQYYaYY',
    isStar: true,
    cover: 'Gradient'
  }
];

export const initMockData = () => {
  const needSetMockData = (() => {
    if (!localStorage.getItem('data')) return true;

    const storageData = JSON.parse(localStorage.getItem('data'));
    if (Array.isArray(storageData) && !storageData.some(item => item.id === 0))
      return true;

    return false;
  })();

  if (needSetMockData) localStorage.setItem('data', JSON.stringify(mockData));
};
