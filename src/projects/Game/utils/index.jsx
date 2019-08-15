import { obstacles } from '../components/Obstacles/Obstacles';

const generateRandomPosition = () => {
  const positionList = ['top', 'middle', 'bottom'];
  const randomIndex = parseInt(Math.random() * positionList.length);

  return positionList[randomIndex];
};

const generateRandomComponent = () => {
  const length = obstacles.buff.length;
  const selectIndex = parseInt(Math.random() * length);
  const Component = obstacles.buff[selectIndex];

  return Component;
};

const generateRandom = action => {
  switch (action) {
    case 'position':
      return generateRandomPosition();
    case 'component':
      return generateRandomComponent();
    default:
      break;
  }
};

export { generateRandom };
