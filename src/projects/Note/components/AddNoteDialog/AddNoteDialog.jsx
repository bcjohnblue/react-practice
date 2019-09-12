import React from 'react';
import { useState, useMemo } from 'react';
import styles from './AddNoteDialog.module.sass';

import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/modules/note/actionTypes';

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import coverImages from '../../utils/coverImages';

const dialogStyles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(dialogStyles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

const AddNoteDialog = props => {
  const [noteName, setNoteName] = useState('');

  const { dialogVisible, setDialogVisible } = props;

  const [coverImg, setCoverImg] = useState(null);
  const coverDOM = useMemo(() => {
    const DOM = Object.entries(coverImages).map(([key, value]) => {
      const coverImgClick = () => {
        setCoverImg(key);
      };
      const style = {};
      if (key === coverImg) style.border = '1px dashed blue';

      return (
        <img
          src={value}
          alt="cover"
          style={style}
          key={key}
          onClick={coverImgClick}
        />
      );
    });
    return <div className={styles.cover_image_container}>{DOM}</div>;
  }, [coverImages, coverImg]);

  const [formValidate, setFormValidate] = useState({
    name: true,
    cover: true
  });
  const { setNote, setDisplayCard } = props;
  const saveClick = () => {
    let isValid = true;

    (() => {
      setFormValidate({
        name: noteName !== '',
        cover: coverImg !== null
      });
      if (noteName === '' || coverImg === null) {
        isValid = false;
      }
    })();
    if (!isValid) return;

    setDialogVisible(false);
    setNote({
      title: noteName,
      cover: coverImg
    });
    setDisplayCard('edit');

    (() => {
      // reset data
      setNoteName('');
      setCoverImg(null);
    })();
  };

  return (
    <div className={styles.add_note_dialog}>
      <Dialog
        onClose={() => {
          setDialogVisible(false);
        }}
        aria-labelledby="customized-dialog-title"
        open={dialogVisible}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => {
            setDialogVisible(false);
          }}
        >
          新增筆記
        </DialogTitle>
        <DialogContent dividers>
          <div className={styles.form}>
            <div>
              <div className={styles.title}>筆記名稱</div>
              <div>
                <input
                  type="text"
                  value={noteName}
                  onChange={event => {
                    setNoteName(event.target.value);
                  }}
                />
                {formValidate.name ? null : (
                  <div className={styles.error}>請填寫筆記名稱</div>
                )}
              </div>
            </div>
            <div>
              <div className={styles.title}>選擇封面</div>
              <div>
                {coverDOM}
                {formValidate.cover ? null : (
                  <div className={styles.error}>請選擇封面</div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <div className={styles.save_button} onClick={saveClick}>
            確定
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = ({ note }, props) => {
  const { dialogVisible } = note;

  return {
    dialogVisible,
    note: note.note
  };
};
const mapDispatchToProps = dispatch => ({
  setDialogVisible: value => {
    dispatch({
      type: actionTypes.SET,
      params: {
        field: 'dialogVisible',
        value
      }
    });
  },
  setNote: value => {
    dispatch({
      type: actionTypes.SET,
      params: {
        field: 'note',
        value
      }
    });
  },
  setDisplayCard: value => {
    dispatch({
      type: actionTypes.SET,
      params: {
        field: 'displayCard',
        value
      }
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNoteDialog);
