import React from 'react';
import styles from './Body.module.sass';

import CardList from '../../components/CardList/CardList';
import RowList from '../../components/RowList/RowList';
import EditNoteCard from '../../components/EditNoteCard/EditNoteCard';

import AddNoteDialog from '../../components/AddNoteDialog/AddNoteDialog';

const Body = props => {
  const data = [
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

  return (
    <main className={styles.body}>
      {/* <CardList data={data}></CardList> */}
      {/* <RowList data={data}></RowList> */}
      <EditNoteCard></EditNoteCard>
      {/* <AddNoteDialog></AddNoteDialog> */}
    </main>
  );
};

export default Body;
