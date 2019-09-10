import React from 'react';
import styles from './CardItem.module.sass';
import clsx from 'clsx';

import { connect } from 'react-redux';

import coverImages from '../../utils/coverImages';

import { ReactComponent as PlusIcon } from '../../assets/icon/plus-solid.svg';
import StarIcon from '../StarIcon/StarIcon';

const CardItem = props => {
  const {
    isBright,
    item: { title, isStar, cover, isFirstData }
  } = props;

  const style = {
    backgroundImage: `url(${coverImages[cover]})`
  };

  return (
    <div
      className={clsx({
        [styles.card_item]: true,
        [styles.is_first_data]: isFirstData,
        [styles.dark]: !isBright
      })}
      style={style}
    >
      <div className={styles.title}>{title}</div>
      {isFirstData ? (
        <PlusIcon className={styles.plus_icon}></PlusIcon>
      ) : (
        <StarIcon isStar={isStar} className={styles.star_icon}></StarIcon>
      )}
    </div>
  );
};

const mapStateToProps = ({ note }, props) => {
  const { isBright } = note;

  return {
    isBright
  };
};

export default connect(mapStateToProps)(CardItem);
