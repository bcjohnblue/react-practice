import React from 'react';
import styles from './CardItem.module.sass';

import TriangleImage from '../../assets/cover/三角.jpg';
// import TrapezoidImage from '../../assets/cover/梯形.jpg';
import WatercolorImage from '../../assets/cover/水彩.jpg';
import GradientImage from '../../assets/cover/漸層.jpg';
// import KraftImage from '../../assets/cover/牛皮紙.jpg';

const CardItem = props => {
  const {
    item: { title, isStar, cover }
  } = props;

  const mapCoverToImage = {
    Triangle: TriangleImage,
    // Trapezoid: TrapezoidImage,
    Watercolor: WatercolorImage,
    Gradient: GradientImage
    // Kraft: KraftImage
  };

  const style = {
    backgroundImage: `url(${mapCoverToImage[cover]})`
  };

  return (
    <div className={styles.card_item} style={style}>
      <div>{title}</div>
    </div>
  );
};

export default CardItem;
