import React from 'react';
import styles from './Main.module.sass';
import clsx from 'clsx';

import { connect } from 'react-redux';

import Header from '../../layout/Header/Header';
import Body from '../../layout/Body/Body';

const Main = props => {
  document.title = '筆記軟體';

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

export default connect(mapStateToProps)(Main);
