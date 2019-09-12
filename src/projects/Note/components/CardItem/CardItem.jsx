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
    item: { id, title, text, cover, isStar, isFirstData }
  } = props;

  const style = {
    backgroundImage: `url(${coverImages[cover]})`
  };

  const { setNote, gotoEdit } = props;
  const onItemClick = () => {
    if (isFirstData) {
      setDialogVisible(true);
      return;
    }
    setNote({ id, title, text, cover, isStar });
    gotoEdit();
  };

  const { saveStarData, showMessange, closeMessange } = props;
  const onStarIconClick = event => {
    event.stopPropagation();

    saveStarData({ id });
    showMessange({
      status: 'success',
      title: `${isStar ? '移除' : '添加'}星號成功`
    });
    setTimeout(() => {
      closeMessange();
    }, 3000);
  };

  return (
    <div
      className={clsx({
        [styles.card_item]: true,
        [styles.is_first_data]: isFirstData,
        [styles.dark]: !isBright
      })}
      style={style}
      onClick={onItemClick}
    >
      <div className={styles.title}>{title}</div>
      {isFirstData ? (
        <PlusIcon className={styles.plus_icon}></PlusIcon>
      ) : (
        <StarIcon
          isStar={isStar}
          className={styles.star_icon}
          onClick={onStarIconClick}
        ></StarIcon>
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
  },
  saveStarData: ({ id }) => {
    dispatch({
      type: actionTypes.SAVE_STAR_DATA,
      params: {
        id
      }
    });
  },
  showMessange: ({ status, title }) => {
    dispatch({
      type: actionTypes.SHOW_NOTE_MESSANGE,
      params: {
        status,
        title
      }
    });
  },
  closeMessange: () => {
    dispatch({
      type: actionTypes.CLOSE_NOTE_MESSANGE
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardItem);
