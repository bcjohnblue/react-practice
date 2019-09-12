import React from 'react';
import styles from './RowItem.module.sass';
import clsx from 'clsx';

import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/modules/note/actionTypes';

import Button from '../Button/Button';
import StarIcon from '../StarIcon/StarIcon';
import { ReactComponent as PlusIcon } from '../../assets/icon/plus-solid.svg';

const RowItem = props => {
  const { isBright, setDialogVisible } = props;
  const {
    item: { id, title, text, cover, isStar, isFirstData }
  } = props;

  const { setNote, gotoEdit } = props;
  const onItemClick = () => {
    if (isFirstData) {
      setDialogVisible(true);
      return;
    }
    setNote({ id, title, text, cover, isStar });
    gotoEdit();
  };

  const { saveStarData } = props;
  const onStarIconClick = event => {
    event.stopPropagation();
    saveStarData({ id });
  };

  return (
    <Button
      className={clsx({
        [styles.row_item]: true,
        [styles.is_first_data]: isFirstData,
        [styles.dark]: !isBright
      })}
      onClick={onItemClick}
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
          onClick={onStarIconClick}
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RowItem);
