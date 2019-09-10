import React from 'react';
import { useMemo } from 'react';
import styles from './Body.module.sass';

import { connect } from 'react-redux';

import CardList from '../../components/CardList/CardList';
import RowList from '../../components/RowList/RowList';
import EditNoteCard from '../../components/EditNoteCard/EditNoteCard';

import AddNoteDialog from '../../components/AddNoteDialog/AddNoteDialog';

const Body = props => {
  const data = [
    {
      title: '新增筆記',
      isFirstData: true
    },
    {
      title: '生活雜記',
      isStar: false,
      cover: 'Triangle'
    },
    {
      title: '美式動態設計',
      isStar: true,
      cover: 'Watercolor'
    },
    {
      title: 'HTML/CSS',
      isStar: true,
      cover: 'Gradient'
    },
    {
      title: 'HTML/CSS',
      isStar: true,
      cover: 'Gradient'
    },
    {
      title: 'HTML/CSS',
      isStar: true,
      cover: 'Gradient'
    }
  ];

  // const [open, setOpen] = React.useState(false);

  // const addNoteDialogDOM = (() => {
  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };
  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  //   return <AddNoteDialog open={open} setOpen={setOpen}></AddNoteDialog>
  // })()

  const { displayMode } = props;
  const dataListDOM = useMemo(() => {
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
  }, [data, displayMode]);

  return (
    <main className={styles.body}>
      {dataListDOM}
      {/* <EditNoteCard></EditNoteCard> */}
      {/* <AddNoteDialog></AddNoteDialog> */}
    </main>
  );
};

const mapStateToProps = ({ note }, props) => {
  const { displayMode } = note;

  return {
    displayMode
  };
};

export default connect(mapStateToProps)(Body);
