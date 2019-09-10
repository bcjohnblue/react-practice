import React from 'react';
import styles from './RowItem.module.sass';
import clsx from 'clsx';

import { connect } from 'react-redux';

import Button from '../Button/Button';
import StarIcon from '../StarIcon/StarIcon';
import { ReactComponent as PlusIcon } from '../../assets/icon/plus-solid.svg';

const RowItem = props => {
  const { isBright } = props;
  const {
    item: { title, isStar, cover, isFirstData }
  } = props;

  return (
    <Button
      className={clsx({
        [styles.row_item]: true,
        [styles.is_first_data]: isFirstData,
        [styles.dark]: !isBright
      })}
    >
      <span
        className={clsx({ [styles.title]: true, [styles.dark]: !isBright })}
      >
        {title}
      </span>
      {isFirstData ? (
        <PlusIcon
          className={clsx({ [styles.icon]: true, [styles.dark]: !isBright })}
        ></PlusIcon>
      ) : (
        <StarIcon
          className={clsx({ [styles.icon]: true, [styles.dark]: !isBright })}
          isStar={isStar}
        ></StarIcon>
      )}
    </Button>
  );
};

const mapStateToProps = ({ note }, props) => {
  const { isBright } = note;

  return {
    isBright
  };
};

export default connect(mapStateToProps)(RowItem);
