import React, { useMemo } from 'react';
import styles from './FirstRow.module.sass';
import clsx from 'clsx';

import { connect } from 'react-redux';
import * as actionTypes from '../../../../../../store/modules/note/actionTypes';

import sticker from '../../../../assets/sticker.jpg';
import { ReactComponent as SwitchBrightIcon } from '../../../../assets/icon/style-01.svg';
import { ReactComponent as SearchIcon } from '../../../../assets/icon/magnifying-glass.svg';

const FirstRow = props => {
  const { isBright, setIsBright } = props;
  const SwitchBrightIconDOM = useMemo(() => {
    return (
      <div className={styles.switch_bright_icon_container}>
        <SwitchBrightIcon
          className={clsx({
            [styles.switch_bright_icon]: true,
            [styles.dark]: !isBright
          })}
          onClick={() => {
            setIsBright(!isBright);
          }}
        ></SwitchBrightIcon>
      </div>
    );
  }, [isBright]);

  return (
    <div className={styles.first_row}>
      <div className={styles.sticker_container}>
        <img src={sticker} alt="sticker" className={styles.sticker} />
        <span
          className={clsx({ [styles.name]: true, [styles.dark]: !isBright })}
        >
          bcjohn
        </span>
      </div>
      <div className={styles.search_container}>
        <input type="text" />
        <SearchIcon className={styles.search_icon}></SearchIcon>
      </div>
      {SwitchBrightIconDOM}
      {/* <div className={styles.switch_bright_icon_container}>
        <SwitchBrightIcon
          className={styles.switch_bright_icon}
          onClick={() => {
            setIsBright(!isBright);
          }}
        ></SwitchBrightIcon>
      </div> */}
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
  setIsBright: value => {
    dispatch({
      type: actionTypes.SET,
      params: {
        field: 'isBright',
        value
      }
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstRow);
