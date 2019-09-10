import React, { useMemo, useState } from 'react';
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

  const [searchName, setSearchName] = useState('');
  const searchDOM = useMemo(() => {
    const { filterData } = props;

    const onKeyUp = event => {
      if (event.key === 'Enter') filterData('name', searchName);
    };
    const onClick = () => {
      filterData('name', searchName);
    };

    return (
      <div className={styles.search_container}>
        <input
          type="text"
          value={searchName}
          onChange={event => {
            setSearchName(event.target.value);
          }}
          onKeyUp={onKeyUp}
        />
        <SearchIcon
          className={styles.search_icon}
          onClick={onClick}
        ></SearchIcon>
      </div>
    );
  }, [searchName]);

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
      {searchDOM}
      {SwitchBrightIconDOM}
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
  setIsBright: value =>
    dispatch({
      type: actionTypes.SET,
      params: {
        field: 'isBright',
        value
      }
    }),
  filterData: (method, name) =>
    dispatch({
      type: actionTypes.FILTER_DATA,
      params: {
        method,
        name
      }
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstRow);
