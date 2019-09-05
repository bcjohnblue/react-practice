import firebase from '../../../plugins/firebase';
import store from '../../../store';
import * as actionTypes from '../../../store/modules/drive/actionTypes';

const taskHandler = (task, callback) => {
  const event = 'state_changed';

  const stateChangeHandler = snapshot => {
    // console.log('snapshot', snapshot);

    const { bytesTransferred, totalBytes } = snapshot;
    store.dispatch({
      type: actionTypes.OPEN_PROGRESS_BAR_DIALOG,
      size: bytesTransferred,
      totalSize: totalBytes,
      title: '上傳檔案中...'
    });
  };

  const errorHandler = err => {
    setTimeout(() => {
      store.dispatch({ type: actionTypes.CLOSE_PROGRESS_BAR_DIALOG });
      store.dispatch({
        type: actionTypes.SHOW_MESSANGE,
        status: 'error',
        title: `上傳失敗 ${err}`
      });
    }, 1000);
  };

  const successHandler = () => {
    setTimeout(() => {
      store.dispatch({ type: actionTypes.CLOSE_PROGRESS_BAR_DIALOG });
      store.dispatch({
        type: actionTypes.SHOW_MESSANGE,
        status: 'success',
        title: '上傳成功'
      });
      callback();
      // getFileList();
    }, 1000);
  };
  store.dispatch({
    type: actionTypes.OPEN_PROGRESS_BAR_DIALOG
  });

  task.on(event, stateChangeHandler, errorHandler, successHandler);
};

const clickUploadHandler = (folderRef, fileList, callback) => {
  Array.from(fileList).map(file => {
    const fileFullPath = file.webkitRelativePath || file.name;
    const fileRef = folderRef.child(fileFullPath);
    const task = fileRef.put(file);

    taskHandler(task, callback);
  });
};

const dragUploadHandler = (folderRef, fileList, callback) => {
  const sortItemTree = (itemEntry, folderRef) => {
    if (itemEntry.isFile) {
      itemEntry.file(file => {
        const fileRef = folderRef.child(file.name);
        const task = fileRef.put(file);

        taskHandler(task, callback);
      });
    } else if (itemEntry.isDirectory) {
      // 透過 File API createReader 去創建這層資料夾物件已供我們後續讀取
      const dirReader = itemEntry.createReader();

      // 透過 readEntries 去讀取這個資料夾目錄裡頭的東西
      dirReader.readEntries(entries => {
        entries.map(entry => {
          // loop 讀到該檔案時，再呼叫一次 sortFileTree 並傳入該檔案與路徑
          sortItemTree(entry, folderRef.child(itemEntry.name));
        });
      });
    }
  };

  Array.from(fileList).map(item => {
    const itemEntry = item.webkitGetAsEntry();
    if (itemEntry) sortItemTree(itemEntry, folderRef);
  });
};

const upload = (method, { pathname, fileList, callback }) => {
  const storageRef = firebase.storage().ref();
  const folderPath = pathname.slice(pathname.indexOf('/', 1));
  // 目前 所在資料夾(所在路由) 的 reference
  const folderRef = storageRef.child(folderPath);

  switch (method) {
    case 'click':
      clickUploadHandler(folderRef, fileList, callback);
      break;
    case 'drag':
      dragUploadHandler(folderRef, fileList, callback);
      break;
    default:
      break;
  }
};

export default upload;
