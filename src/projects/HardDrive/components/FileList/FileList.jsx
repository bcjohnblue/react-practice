import React from 'react';
import styles from './FileList.module.sass';

import { useMemo } from 'react';

import FileItem from '../FileItem/FileItem';
import FileControlList from '../FileControlList/FileControlList';

const FileList = props => {
  const { title, data } = props;

  // const colDOM = useMemo(() => {
  //   const widthList = ['400px', '120px', '120px', '120px'];
  //   const DOM = widthList.map((width, index) => (
  //     <col width={width} key={index} />
  //   ));

  //   return <colgroup>{DOM}</colgroup>;
  // }, []);
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
        {/* {colDOM} */}
        {theadDOM}
        {tbodyDOM}
      </table>
      <FileControlList></FileControlList>
    </div>
  );
};

export default FileList;
