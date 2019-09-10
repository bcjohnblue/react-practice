import React from 'react';
import styles from './Main.module.sass';

import { Suspense, lazy } from 'react';
import { Route, Redirect } from 'react-router-dom';

import ProgressBarDialogContainer from '../../container/ProgressBarDialogContainer/ProgressBarDialogContainer';
import MessageContainer from '../../container/MessageContainer/MessageContainer';

const MyDrive = lazy(() => import('../../pages/MyDrive/MyDrive'));

const Main = props => {
  document.title = '雲端硬碟';

  return (
    <div className={styles.main}>
      <Suspense fallback={<div></div>}>
        <Route path="/hard-drive/my-drive" component={MyDrive} />
        <Redirect from="hard-drive" to="/hard-drive/my-drive"></Redirect>
      </Suspense>
      <ProgressBarDialogContainer></ProgressBarDialogContainer>
      <MessageContainer></MessageContainer>
    </div>
  );
};

export default Main;
