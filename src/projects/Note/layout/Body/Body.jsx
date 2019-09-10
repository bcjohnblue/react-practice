import React from 'react';
import styles from './Body.module.sass';

import { connect } from 'react-redux';

import CardList from '../../components/CardList/CardList';
import RowList from '../../components/RowList/RowList';
import EditNoteCard from '../../components/EditNoteCard/EditNoteCard';

import AddNoteDialog from '../../components/AddNoteDialog/AddNoteDialog';

const Body = props => {
  const { data, displayMode } = props;

  const dataListDOM = (() => {
    const dataList = [
      {
        Component: CardList,
        mode: 'card'
      },
      {
        Component: RowList,
        mode: 'row'
      }
    ];

    return dataList.map(item => {
      const { Component, mode } = item;
      const style = {};
      if (mode !== displayMode) style.display = 'none';

      return <Component data={data} key={mode} style={style}></Component>;
    });
  })();

  const { displayCard } = props;
  const mapDisplayCardToDOM = {
    list: dataListDOM,
    edit: <EditNoteCard></EditNoteCard>
  };

  return (
    <main className={styles.body}>
      {mapDisplayCardToDOM[displayCard]}
      <AddNoteDialog></AddNoteDialog>
    </main>
  );
};

const mapStateToProps = ({ note }, props) => {
  const { displayMode, displayCard, data } = note;

  return {
    displayMode,
    displayCard,
    data
  };
};

export default connect(mapStateToProps)(Body);
