import React, { useState, useMemo } from 'react';
import styles from './SecondRow.module.sass';
import clsx from 'clsx';

import { connect } from 'react-redux';
import * as actionTypes from '../../../../../../store/modules/note/actionTypes';

import Button from '../../../../components/Button/Button';
import StarIcon from '../../../../components/StarIcon/StarIcon';
import { ReactComponent as RowIcon } from '../../../../assets/icon/list-01.svg';
import { ReactComponent as CardIcon } from '../../../../assets/icon/card-01.svg';

const SecondRow = props => {
  const { isBright } = props;

  const { displayMode } = props;

  const [isStar, setIsStar] = useState(false);

  const listDOM = useMemo(() => {
    const iconDOM = (() => {
      const iconList = [
        {
          Component: RowIcon,
          mode: 'row'
        },
        {
          Component: CardIcon,
          mode: 'card'
        }
      ];
      const DOM = iconList.map(item => {
        const { setDisplayMode } = props;
        const onClick = () => {
          setDisplayMode(mode);
        };

        const { Component, mode } = item;

        return (
          <Component
            className={clsx({
              [styles.active]: mode === displayMode,
              [styles.dark]: !isBright
            })}
            key={mode}
            onClick={onClick}
          ></Component>
        );
      });

      return <div className={styles.icon_container}>{DOM}</div>;
    })();

    const { filterData } = props;
    const onClick = () => {
      const mode = isStar ? 'all' : 'star';

      filterData(mode);
      setIsStar(!isStar);
    };

    return (
      <>
        <Button
          className={clsx({
            [styles.button]: true,
            [styles.dark]: !isBright
          })}
          onClick={onClick}
        >
          <StarIcon
            className={clsx({
              [styles.star_icon]: true,
              [styles.dark]: !isBright
            })}
            isStar={isStar}
          ></StarIcon>
          <span
            className={clsx({ [styles.text]: true, [styles.dark]: !isBright })}
          >
            顯示星號筆記
          </span>
        </Button>
        {iconDOM}
      </>
    );
  }, [displayMode, isBright, isStar]);

  const { setDisplayCard, saveData } = props;
  const { showMessange, closeMessange } = props;
  const editDOM = useMemo(() => {
    return (
      <>
        <Button
          className={clsx({
            [styles.button]: true,
            [styles.dark]: !isBright
          })}
          onClick={() => {
            setDisplayCard('list');
          }}
        >
          <span
            className={clsx({ [styles.text]: true, [styles.dark]: !isBright })}
          >
            返回列表
          </span>
        </Button>
        <Button
          className={clsx({
            [styles.save_button]: true,
            [styles.dark]: !isBright
          })}
          onClick={() => {
            saveData();
            setDisplayCard('list');
            showMessange({ status: 'success', title: '修改成功' });
            setTimeout(() => {
              closeMessange();
            }, 3000);
          }}
        >
          <span
            className={clsx({ [styles.text]: true, [styles.dark]: !isBright })}
          >
            儲存進度
          </span>
        </Button>
      </>
    );
  }, [isBright]);

  const { displayCard } = props;
  const mapDisplayCardToDOM = {
    list: listDOM,
    edit: editDOM
  };

  return (
    <div className={styles.second_row}>{mapDisplayCardToDOM[displayCard]}</div>
  );
};

const mapStateToProps = ({ note }, props) => {
  const { displayMode, isBright, displayCard } = note;

  return {
    displayMode,
    isBright,
    displayCard
  };
};
const mapDispatchToProps = dispatch => ({
  setDisplayMode: mode =>
    dispatch({
      type: actionTypes.SET,
      params: {
        field: 'displayMode',
        value: mode
      }
    }),
  setDisplayCard: value =>
    dispatch({
      type: actionTypes.SET,
      params: {
        field: 'displayCard',
        value
      }
    }),
  filterData: method =>
    dispatch({
      type: actionTypes.FILTER_DATA,
      params: {
        method
      }
    }),
  saveData: () =>
    dispatch({
      type: actionTypes.SAVE_DATA
    }),
  showMessange: ({ status, title }) =>
    dispatch({
      type: actionTypes.SHOW_NOTE_MESSANGE,
      params: {
        status,
        title
      }
    }),
  closeMessange: () =>
    dispatch({
      type: actionTypes.CLOSE_NOTE_MESSANGE
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondRow);
