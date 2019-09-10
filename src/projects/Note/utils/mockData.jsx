const mockData = [
  {
    title: '新增筆記',
    isFirstData: true
  },
  {
    title: '生活雜記',
    isStar: false,
    cover: 'Triangle'
  },
  {
    title: '美式動態設計',
    isStar: true,
    cover: 'Watercolor'
  },
  {
    title: 'HTML/CSS',
    isStar: true,
    cover: 'Gradient'
  },
  {
    title: 'HTML/CSS',
    isStar: true,
    cover: 'Gradient'
  },
  {
    title: 'HTML/CSS',
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
