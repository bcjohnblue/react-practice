import React from 'react';
import styles from './Main.module.sass';

import { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

import SideBar from '../../components/SideBar/SideBar';
import ProgressBarDialogContainer from '../../container/ProgressBarDialogContainer/ProgressBarDialogContainer';

const MyDrive = lazy(() => import('../../pages/MyDrive/MyDrive'));

const Main = props => {
  document.title = '雲端硬碟';

  return (
    <div className={styles.main}>
      <SideBar></SideBar>
      <Suspense fallback={<div></div>}>
        <Route path="/hard-drive/my-drive" component={MyDrive} />
      </Suspense>
      <ProgressBarDialogContainer></ProgressBarDialogContainer>
    </div>
  );
};

export default Main;
