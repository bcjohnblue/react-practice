import React from 'react';
import { useEffect } from 'react';
import styles from './Main.module.sass';
import clsx from 'clsx';

import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/modules/note/actionTypes';

import Header from '../../layout/Header/Header';
import Body from '../../layout/Body/Body';

import { initMockData } from '../../utils/mockData';

const Main = props => {
  document.title = '筆記軟體';

  const { initData } = props;
  useEffect(() => {
    initMockData();
    initData();
  }, []);

  const { isBright } = props;
  return (
    <div className={clsx({ [styles.main]: true, [styles.dark]: !isBright })}>
      <div className={styles.container}>
        <Header></Header>
        <Body></Body>
      </div>
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
  initData: () => {
    dispatch({
      type: actionTypes.INIT_DATA
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
