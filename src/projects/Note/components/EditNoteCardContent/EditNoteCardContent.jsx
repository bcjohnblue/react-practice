import React from 'react';
import styles from './EditNoteCardContent.module.sass';

import { useState } from 'react';

import OnSelectPrompt from '../OnSelectPrompt/OnSelectPrompt';

const EditNoteCardContent = props => {
  const [value, setValue] = useState('如果您心目中的周潤發');

  const onChange = event => {
    setValue(event.target.value);
  };

  const onKeyDown = event => {
    const self = event.target;

    self.style.height = '1px';
    self.style.height = 25 + self.scrollHeight + 'px';
  };

  const [selectPromptVisible, setSelectPromptVisible] = useState(false);
  const [promptPosition, setPromptPosition] = useState({ x: 0, y: 0 });
  const [selected, setSelected] = useState({
    text: '',
    startIndex: 0,
    endIndex: 0
  });

  const onSelect = event => {
    console.log('select');
    // console.log(event.target.value);

    if (document.getSelection !== undefined) {
      const selection = document.getSelection();
      console.log(selection);

      const startIndex = selection.baseOffset;
      const endIndex = selection.extentOffset;
      console.log(startIndex, endIndex);

      const selectedText = value.substring(startIndex, endIndex);
      console.log(selectedText);

      setSelected({
        text: selectedText,
        startIndex,
        endIndex
      });

      if (selectedText.length) {
        setSelectPromptVisible(true);
      }
    }
    // if (event.target.selectionStart !== undefined) {
    //   const startIndex = event.target.selectionStart;
    //   const endIndex = event.target.selectionEnd;

    //   const selectedText = event.target.value.substring(startIndex, endIndex);
    //   setSelected({
    //     text: selectedText,
    //     startIndex,
    //     endIndex
    //   });

    //   if (selectedText.length) {
    //     setSelectPromptVisible(true);
    //   }
    // }
  };

  const onMouseUp = event => {
    const { clientX: x, clientY: y } = event;
    console.log(x, y);

    setPromptPosition({ x, y });
  };
  const createMarkup = value => ({ __html: value });

  return (
    <div className={styles.edit_note_card_content}>
      {/* <textarea
        // value={value}
        // dangerouslySetInnerHTML={createMarkup(value)}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onSelect={onSelect}
        onMouseUp={onMouseUp}
      >
        {value}
      </textarea> */}
      <div
        contentEditable="true"
        onChange={onChange}
        onKeyDown={onKeyDown}
        onSelect={onSelect}
        onMouseUp={onMouseUp}
        dangerouslySetInnerHTML={createMarkup(value)}
      ></div>
      <OnSelectPrompt
        visible={selectPromptVisible}
        setVisible={setSelectPromptVisible}
        position={promptPosition}
        value={value}
        setValue={setValue}
        selected={selected}
      ></OnSelectPrompt>
    </div>
  );
};

export default EditNoteCardContent;
