import React from 'react';
import styles from './MyDrive.module.sass';

import { useState, useEffect, useCallback } from 'react';

import { withRouter } from 'react-router-dom';

import firebase from '../../../../plugins/firebase';
import upload from '../../utils/upload';

import SideBar from '../../components/SideBar/SideBar';
import SearchInput from '../../components/SearchInput/SearchInput';
import FileList from '../../components/FileList/FileList';
import FileControlList from '../../components/FileControlList/FileControlList';

const MyDrive = props => {
  const {
    location: { pathname }
  } = props;

  const [data, setData] = useState([]); // 原始資料
  const [filterdata, setFilterData] = useState([]); // 搜尋後篩選出的資料
  const [search, setSearch] = useState({
    fileName: ''
  });

  const getFileList = useCallback(() => {
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
        // console.log(fileData);
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
      console.log('{資料夾, 檔案}', folderList);

      const fileList = await getFileData(folderList.items);
      const data = transformData(fileList, folderList.prefixes);
      setData(data);
      setFilterData(data);
    })();
  }, [pathname]);

  useEffect(() => {
    getFileList();
  }, [pathname]);

  const filterFileList = () => {
    if (search.fileName.length) {
      const filterData = data.filter(
        item => ~item.name.toLowerCase().indexOf(search.fileName.toLowerCase())
      );

      setFilterData(filterData);
    } else {
      setFilterData(data);
    }
  };

  useEffect(() => {
    filterFileList();
  }, [search]);

  const onDragOver = event => {
    event.preventDefault();
  };
  const onDrop = event => {
    event.preventDefault();
    const fileList = event.dataTransfer.items;

    upload('drag', { pathname, fileList, callback: getFileList });
  };

  return (
    <>
      <SideBar getFileList={getFileList}></SideBar>
      <div className={styles.my_drive} onDragOver={onDragOver} onDrop={onDrop}>
        <div style={{ textAlign: 'right' }}>
          <SearchInput
            value={search.fileName}
            onChange={event => {
              setSearch({
                ...search,
                fileName: event.target.value
              });
            }}
          ></SearchInput>
        </div>
        <FileList title="我的檔案" data={filterdata}></FileList>
        <FileControlList getFileList={getFileList}></FileControlList>
      </div>
    </>
  );
};

export default withRouter(MyDrive);
