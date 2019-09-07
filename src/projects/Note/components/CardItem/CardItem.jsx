import React from 'react';
import styles from './CardItem.module.sass';
import clsx from 'clsx';

import TriangleImage from '../../assets/cover/三角.jpg';
// import TrapezoidImage from '../../assets/cover/梯形.jpg';
import WatercolorImage from '../../assets/cover/水彩.jpg';
import GradientImage from '../../assets/cover/漸層.jpg';
// import KraftImage from '../../assets/cover/牛皮紙.jpg';

import Star from '../Star/Star';

const CardItem = props => {
  const {
    item: { title, isStar, cover },
    className
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
    <div className={clsx(styles.card_item, className)} style={style}>
      <div className={styles.title}>{title}</div>
      <Star isStar={isStar} className={styles.star}></Star>
    </div>
  );
};

export default CardItem;
