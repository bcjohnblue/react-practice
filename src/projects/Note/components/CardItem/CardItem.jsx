import React from 'react';
import styles from './CardItem.module.sass';
import clsx from 'clsx';

import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/modules/note/actionTypes';

import coverImages from '../../utils/coverImages';

import { ReactComponent as PlusIcon } from '../../assets/icon/plus-solid.svg';
import StarIcon from '../StarIcon/StarIcon';

const CardItem = props => {
  const { isBright, setDialogVisible } = props;
  const {
    item: { title, text, cover, isStar, isFirstData }
  } = props;

  const style = {
    backgroundImage: `url(${coverImages[cover]})`
  };

  const {setNote, gotoEdit} = props
  const onClick = () => {
    if (isFirstData) {
      setDialogVisible(true);
      return;
    }
    setNote({name: title, text, cover})
    gotoEdit()
  };

  return (
    <div
      className={clsx({
        [styles.card_item]: true,
        [styles.is_first_data]: isFirstData,
        [styles.dark]: !isBright
      })}
      style={style}
      onClick={onClick}
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
const mapDispatchToProps = dispatch => ({
  setDialogVisible: value => {
    dispatch({
      type: actionTypes.SET,
      params: {
        field: 'dialogVisible',
        value
      }
    });
  },
  setNote: value => {
    dispatch({
      type: actionTypes.SET,
      params: {
        field: 'note',
        value
      }
    });
  },
  gotoEdit: () => {
    dispatch({
      type: actionTypes.SET,
      params: {
        field: 'displayCard',
        value: 'edit'
      }
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardItem);
