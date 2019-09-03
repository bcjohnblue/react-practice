import React from 'react';
import styles from './FileItem.module.sass';
import clsx from 'clsx';

import { useState, useMemo } from 'react';

import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/modules/drive/actionTypes';

import Mp4Image from '../../assets/pdf-1@2x.png';
import PDFImage from '../../assets/pdf-2@2x.png';
import DOCImage from '../../assets/pdf@2x.png';
import ImgImage from '../../assets/img-icon@2x.png';
import FolderImage from '../../assets/folder2@2x.png';

const FileItem = props => {
  const { openFileControlList } = props;
  const {
    item: { type, name, lastModified, fileSize, owner, fullPath }
  } = props;
  const [isActive, setIsActive] = useState(false);

  const image = useMemo(() => {
    const imageTypes = ['png', 'jpeg', 'jpg'];
    const docTypes = ['doc', 'docx'];
    const mapNameToImage = {
      ...imageTypes.reduce((accu, curr) => ({ ...accu, [curr]: ImgImage }), {}),
      ...docTypes.reduce((accu, curr) => ({ ...accu, [curr]: DOCImage }), {}),
      mp4: Mp4Image,
      pdf: PDFImage
    };

    switch (type) {
      case 'folder':
        return FolderImage;
      case 'file':
        for (const fileType of Object.keys(mapNameToImage)) {
          const regex = new RegExp(`\.${fileType}$`);
          // console.log(name, fileType, regex.test(name.toLowerCase()));

          if (regex.test(name.toLowerCase())) {
            return mapNameToImage[fileType];
          }
        }
        return null;
      default:
        return null;
    }
  }, [name]);

  return (
    <tr
      className={clsx({ [styles.file_item]: true, [styles.active]: isActive })}
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <td>
        {image ? (
          <img
            src={image}
            alt="file-type-icon"
            className={styles.file_type_icon}
          />
        ) : null}
        <span>{name}</span>
      </td>
      <td>{lastModified || '--'}</td>
      <td>{fileSize ? `${fileSize} MB` : '--'}</td>
      <td>{owner}</td>
      <td
        onClick={event => {
          event.stopPropagation();
          const { clientX, clientY } = event;
          openFileControlList(clientX, clientY, fullPath);
        }}
      >
        ...
      </td>
    </tr>
  );
};

const mapStateToProps = ({ drive }, props) => {
  const { isFileControlListVisible } = drive;

  return {
    isFileControlListVisible
  };
};
const mapDispatchToProps = dispatch => {
  return {
    openFileControlList: (clientX, clientY, fullPath) =>
      dispatch({
        type: actionTypes.OPEN_FILE_CONTROL_LIST,
        clientX,
        clientY,
        fullPath
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileItem);
