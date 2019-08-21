import React from 'react';
import styles from './CustomDialog.module.sass';

import { ReactComponent as CheckCircle } from '../../assets/ant-design_check-circle-outline.svg';
import { ReactComponent as ErrorOutline } from '../../assets/ic-baseline-error-outline.svg';

import { withStyles } from '@material-ui/core/styles';
import MuiDialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const CustomDialog = props => {
  const { open, setOpen, confirmClick } = props;
  const dialogStyles = theme => ({
    root: {
      '& .MuiPaper-root': {
        width: '600px'
      }
    }
  });
  const dialogTitleStyles = theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      height: theme.spacing(8)
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  });

  const Dialog = withStyles(dialogStyles)(props => {
    const { children, classes, onClose } = props;
    return (
      <MuiDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className={classes.root}
        maxWidth={'lg'}
        disableBackdropClick={true}
      >
        {children}
      </MuiDialog>
    );
  });

  const DialogTitle = withStyles(dialogTitleStyles)(props => {
    const { children, classes, onClose } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root}>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const DialogContent = withStyles(theme => ({
    root: {
      textAlign: 'center',
      '& .title': {
        fontFamily: 'AndaleMono',
        fontSize: '30px',
        color: '#4C5356',
        lineHeight: '34px',
        marginBottom: '20px',
        letterSpacing: '2px'
      },
      '& .sub_title': {
        fontFamily: 'AndaleMono',
        fontSize: '20px',
        color: '#4C5356',
        letterSpacing: '2px',
        marginBottom: '20px'
      }
    }
  }))(MuiDialogContent);

  const DialogActions = withStyles(theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(1)
    }
  }))(MuiDialogActions);

  // const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Modal title
      </DialogTitle>
      <DialogContent>
        <div className="title">Success!</div>
        <div className="sub_title">Have a nice trip :)</div>
        <CheckCircle style={{ zoom: 0.8 }} />
      </DialogContent>
      <DialogActions>
        <div className={styles.button} onClick={confirmClick}>
          Check out the order
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
