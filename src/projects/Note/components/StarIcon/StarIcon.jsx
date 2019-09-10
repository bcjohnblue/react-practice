import React from 'react';
import styles from './StarIcon.module.sass';
import clsx from 'clsx';

import { useMemo } from 'react';

import { ReactComponent as FillStar } from '../../assets/icon/star-solid.svg';
import { ReactComponent as EmptyStar } from '../../assets/icon/star-regular.svg';

const Star = props => {
  const { isStar, style, className } = props;

  return isStar ? (
    <FillStar
      className={clsx([styles.star, className])}
      style={style}
    ></FillStar>
  ) : (
    <EmptyStar
      className={clsx([styles.star, className])}
      style={style}
    ></EmptyStar>
  );
};

export default Star;
