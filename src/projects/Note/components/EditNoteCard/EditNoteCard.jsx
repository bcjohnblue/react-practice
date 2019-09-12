import React from 'react';
import styles from './EditNoteCard.module.sass';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import EditNoteCardBackground from '../EditNoteCardBackground/EditNoteCardBackground';
import EditNoteCardHeader from '../EditNoteCardHeader/EditNoteCardHeader';
import EditNoteCardContent from '../EditNoteCardContent/EditNoteCardContent';

const useStyles = makeStyles({
  card: {
    padding: '15px 40px'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const EditNoteCard = props => {
  const { style } = props;
  const classes = useStyles();

  return (
    <div className={styles.edit_note_card} style={style}>
      <EditNoteCardBackground></EditNoteCardBackground>
      <Card className={classes.card}>
        <CardHeader component={EditNoteCardHeader} />
        <CardContent>
          <EditNoteCardContent></EditNoteCardContent>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditNoteCard;
