import React from 'react';
import styles from './AddNoteDialog.module.sass';

import { useState, useMemo } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    // if()
    setOpen(false);
  };

  const [formValidate, setFormValidate] = useState(true);
  const saveClick = () => {
    // if(!formValidate)
    setOpen(false);
  };

  const [coverImgSelectIndex, setCoverImgSelectIndex] = useState(null);

  const coverDOM = useMemo(() => {
    // const { Triangle, Watercolor, Gradient } = coverImages;
    const DOM = Object.values(coverImages).map((image, index) => {
      const coverImgClick = () => {
        setCoverImgSelectIndex(index);
      };
      const style = {};
      if (index === coverImgSelectIndex) style.border = '1px dashed blue';

      return (
        <img
          src={image}
          alt="cover image"
          style={style}
          key={index}
          onClick={coverImgClick}
        />
      );
    });
    return <div className={styles.cover_image_container}>{DOM}</div>;
  }, [coverImages, coverImgSelectIndex]);

  return (
    <div className={styles.add_note_dialog}>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          新增筆記
        </DialogTitle>
        <DialogContent dividers>
          <div className={styles.form}>
            <div>
              <div className={styles.title}>筆記名稱</div>
              <div>
                <input type="text" />
                {formValidate ? null : (
                  <div className={styles.error}>請填寫筆記名稱</div>
                )}
              </div>
            </div>
            <div>
              <div className={styles.title}>選擇封面</div>
              <div>
                {coverDOM}
                {formValidate ? null : (
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
          {/* <Button onClick={handleClose} color="primary">
            確定
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddNoteDialog;
