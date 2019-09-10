import React from 'react';
import styles from './EditNoteCardBackground.module.sass';

import coverImages from '../../utils/coverImages';

const EditNoteCardBackground = props => {
  const { Watercolor } = coverImages;
  // const { Triangle, Watercolor, Gradient } = coverImages;

  return (
    <div className={styles.edit_note_card_background}>
      <img src={Watercolor} alt="cover" />
    </div>
  );
};

export default EditNoteCardBackground;
