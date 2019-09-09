import React from 'react';
import styles from './EditNoteCardHeader.module.sass';

const EditNoteCardHeader = props => {
  console.log(props);

  return (
    <div className={styles.edit_note_card_header}>
      <div>永遠的小馬哥-周潤發</div>
    </div>
  );
};

export default EditNoteCardHeader;
