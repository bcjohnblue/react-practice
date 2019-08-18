import { obstacles } from '../components/Obstacles/Obstacles';

export const isCollide = (roleRef, obstacleRef) => {
  // console.log(obstacleRef);
  // debugger;

  const role = roleRef.current && roleRef.current.getBoundingClientRect();
  const obstacle =
    obstacleRef.current && obstacleRef.current.getBoundingClientRect();
  if (!role || !obstacle) return false;
  // console.log('主角', role.x, role.y);
  console.log('障礙物', obstacle.x, obstacle.y);
  return !(
    role.y + role.height < obstacle.y ||
    role.y > obstacle.y + obstacle.height ||
    role.x + role.width < obstacle.x ||
    role.x > obstacle.x + obstacle.width
  );
};

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
