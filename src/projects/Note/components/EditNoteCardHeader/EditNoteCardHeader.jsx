import React from 'react';
import styles from './EditNoteCardHeader.module.sass';

import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/modules/note/actionTypes';

import StarIcon from '../StarIcon/StarIcon';

const EditNoteCardHeader = props => {
  const { note, setNote } = props;
  const onChange = event => {
    setNote({ ...note, title: event.target.value });
  };

  return (
    <div className={styles.edit_note_card_header}>
      <input type="text" value={note.title} onChange={onChange} />
      <StarIcon
        style={{ marginLeft: 'auto' }}
        isStar={note.isStar}
        onClick={() => {
          setNote({ ...note, isStar: !note.isStar });
        }}
      ></StarIcon>
    </div>
  );
};

const mapStateToProps = ({ note }, props) => {
  return {
    note: note.note
  };
};
const mapDispatchToProps = dispatch => ({
  setNote: value => {
    dispatch({
      type: actionTypes.SET,
      params: {
        field: 'note',
        value
      }
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNoteCardHeader);
