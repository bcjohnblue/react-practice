import React from 'react';
import styles from './EditNoteCardContent.module.sass';

import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/modules/note/actionTypes';

import CKEditor from '../CKEditor/CKEditor';

const EditNoteCardContent = props => {
  const { note, setNote } = props;

  // const onChange = useCallback(
  //   (event, editor) => {
  //     if (note.id === undefined) return;
  //     const text = editor.getData();
  //     // console.log({ event, editor, text });

  //     setNote({ ...note, text });
  //   },
  //   [note]
  // );

  return (
    <div className={styles.edit_note_card_content}>
      <CKEditor
        data={note.text}
        onInit={editor => {
          // You can store the "editor" and use when it is needed.
          // editor.plugins.get('FileRepository').createUploadAdapter = loader => {
          //   return new Base64UploadAdapter(loader);
          // };
          // console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const text = editor.getData();
          // console.log({ event, editor, text });
          console.log(note, text);

          setNote({ ...note, text });
        }}
        // onChange={onChange}
        onBlur={(event, editor) => {
          // console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          // console.log('Focus.', editor);
        }}
      ></CKEditor>
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
)(EditNoteCardContent);
