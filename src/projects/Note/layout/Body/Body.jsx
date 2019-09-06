import React from 'react';
import styles from './Body.module.sass';

import CardList from '../../components/CardList/CardList';
import RowList from '../../components/RowList/RowList';

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

  return (
    <main className={styles.body}>
      <CardList data={data}></CardList>
    </main>
  );
};

export default Body;
