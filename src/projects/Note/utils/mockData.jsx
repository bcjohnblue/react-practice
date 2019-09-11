const mockData = [
  {
    title: '新增筆記',
    isFirstData: true
  },
  {
    title: '永遠的小馬哥-周潤發',
    text: '如果您心目中的周潤發',
    isStar: false,
    cover: 'Watercolor'
  },
  {
    title: '生活雜記',
    text: '今天是 9/11 又是一天無聊的上班日',
    isStar: false,
    cover: 'Triangle'
  },
  {
    title: '美式動態設計',
    text: 'Welcome to the american design show. We will teach you amazing design pattern in next two month.',
    isStar: true,
    cover: 'Watercolor'
  },
  {
    title: 'HTML/CSS',
    text: '<div>HTML/CSS<div>',
    isStar: true,
    cover: 'Gradient'
  },
  {
    title: 'JavaScript',
    text: 'window.alert("JS!")',
    isStar: true,
    cover: 'Gradient'
  },
  {
    title: '歌單',
    text: '推薦大家一個我很愛的歌手陳雪凝[綠色] https://www.youtube.com/watch?v=ryP_nQYYaYY',
    isStar: true,
    cover: 'Gradient'
  }
];

const setMockData = () => {
  localStorage.setItem('data', JSON.stringify(mockData));
};

export const initMockData = () => {
  if (!localStorage.getItem('data')) setMockData();
};
