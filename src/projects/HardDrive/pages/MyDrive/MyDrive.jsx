import React from 'react';
import styles from './MyDrive.module.sass';

import { useState, useEffect } from 'react';

import { withRouter } from 'react-router-dom';

import firebase from '../../../../plugins/firebase';

import SideBar from '../../components/SideBar/SideBar';
import SearchInput from '../../components/SearchInput/SearchInput';
import FileList from '../../components/FileList/FileList';
import FileControlList from '../../components/FileControlList/FileControlList';

const MyDrive = props => {
  const {
    location: { pathname }
  } = props;

  const [data, setData] = useState([]);

  const getFileList = () => {
    const storageRef = firebase.storage().ref();

    const getFileData = async fileList => {
      const promiseList = fileList.map(item => {
        const fileRef = storageRef.child(item.fullPath);
        return fileRef.getMetadata();
      });

      const fileArray = [];
      for await (let fileData of promiseList) {
        const { name, size, updated, fullPath, contentType } = fileData;
        fileArray.push({ name, size, updated, fullPath, contentType });
        console.log(fileData);
      }
      return fileArray;
    };

    const transformData = (fileList, folderList) => {
      const fileArray = fileList.map(fileData => {
        const { name, size, updated, fullPath, contentType } = fileData;
        // console.log(fileData);

        const fileSize = (size / 1024 ** 2).toFixed(2);
        const lastModified = (() => {
          const d = new Date(updated);
          const year = d.getFullYear();
          const month = d.getMonth() + 1;
          const date = d.getDate();

          return `${year}/${month}/${date}`;
        })();

        return {
          type: 'file',
          name,
          fileSize,
          lastModified,
          owner: 'Jennifer',
          fullPath,
          contentType
        };
      });
      const folderArray = folderList.map(item => {
        const { name, fullPath } = item;

        return {
          type: 'folder',
          name,
          fullPath,
          owner: 'Jennifer'
        };
      });

      return [...fileArray, ...folderArray];
    };

    (async () => {
      const folderPath = pathname.slice(pathname.indexOf('/', 1));
      const folderRef = storageRef.child(folderPath);
      const folderList = await folderRef.listAll();
      console.log(folderList);

      const fileList = await getFileData(folderList.items);
      setData(transformData(fileList, folderList.prefixes));
    })();
  };

  useEffect(() => {
    getFileList();
  }, [pathname]);

  return (
    <>
      <SideBar getFileList={getFileList}></SideBar>
      <div className={styles.my_drive}>
        <div style={{ textAlign: 'right' }}>
          <SearchInput></SearchInput>
        </div>
        <FileList title="我的檔案" data={data}></FileList>
        <FileControlList getFileList={getFileList}></FileControlList>
      </div>
    </>
  );
};

export default withRouter(MyDrive);
