import React, { useMemo } from 'react';
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

  const { displayMode, setDisplayMode } = props;
  const iconDOM = useMemo(() => {
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
      const { Component, mode } = item;
      const onClick = () => {
        setDisplayMode(mode);
      };

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
  }, [displayMode, isBright]);

  return (
    <div className={styles.second_row}>
      <Button
        className={clsx({
          [styles.button]: true,
          [styles.dark]: !isBright
        })}
      >
        <StarIcon
          className={clsx({
            [styles.star_icon]: true,
            [styles.dark]: !isBright
          })}
        ></StarIcon>
        <span
          className={clsx({ [styles.text]: true, [styles.dark]: !isBright })}
        >
          顯示星號筆記
        </span>
      </Button>
      {iconDOM}
    </div>
  );
};

const mapStateToProps = ({ note }, props) => {
  const { displayMode, isBright } = note;

  return {
    displayMode,
    isBright
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
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondRow);
