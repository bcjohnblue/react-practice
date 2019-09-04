import React from 'react';
import styles from './FileList.module.sass';

import { useMemo } from 'react';

import FileItem from '../FileItem/FileItem';

const FileList = props => {
  const { title, data } = props;

  const theadDOM = useMemo(() => {
    const theadList = [
      {
        prop: 'name',
        label: '名稱'
      },
      {
        prop: 'lastModified',
        label: '上次修改'
      },
      {
        prop: 'fileSize',
        label: '檔案大小'
      },
      {
        prop: 'owner',
        label: '擁有者'
      },
      {
        prop: 'control',
        label: ''
      }
    ];
    const DOM = theadList.map((item, index) => {
      const { label } = item;

      return <th key={index}>{label}</th>;
    });

    return (
      <thead>
        <tr>{DOM}</tr>
      </thead>
    );
  }, []);
  const tbodyDOM = useMemo(() => {
    const DOM = data.map((item, index) => {
      return <FileItem item={item} key={index}></FileItem>;
    });

    return <tbody>{DOM}</tbody>;
  }, [data]);

  return (
    <div className={styles.file_list}>
      {title !== undefined ? <div className={styles.title}>{title}</div> : null}
      <table>
        {theadDOM}
        {tbodyDOM}
      </table>
    </div>
  );
};

export default FileList;
