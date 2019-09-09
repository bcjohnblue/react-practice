import React from 'react';
import styles from './OnSelectPrompt.module.sass';

import { useEffect } from 'react';

import { ReactComponent as Line } from '../../assets/icon/line.svg';
import { ReactComponent as Italic } from '../../assets/icon/italic.svg';
import { ReactComponent as Medium } from '../../assets/icon/medium.svg';
import { ReactComponent as Bold } from '../../assets/icon/bold.svg';

const OnSelectPrompt = props => {
  const { visible, setVisible } = props;
  const {
    position: { x, y }
  } = props;

  const { value, setValue } = props;
  const {
    selected: { text, startIndex, endIndex }
  } = props;

  useEffect(() => {
    const fn = () => {
      setVisible(false);
    };
    if (visible) window.addEventListener('click', fn);

    return () => {
      window.removeEventListener('click', fn);
    };
  }, [visible]);

  const style = {
    left: x + 'px',
    top: y + 20 + 'px'
  };

  const iconList = [
    {
      Component: Bold,
      onClick: event => {
        event.stopPropagation();
        const replaceValue = `<span style="font-weight: bold">${text}</span>`;
        const newValue =
          value.slice(0, startIndex) + replaceValue + value.slice(endIndex);
        setValue(newValue);
      }
    },
    {
      Component: Medium,
      onClick: event => {
        event.stopPropagation();
      }
    },
    {
      Component: Line,
      onClick: event => {
        event.stopPropagation();
      }
    },
    {
      Component: Italic,
      onClick: event => {
        event.stopPropagation();
      }
    }
  ];

  return visible ? (
    <div className={styles.on_select_prompt} style={style}>
      {iconList.map((icon, index) => {
        const { Component, onClick } = icon;

        return <Component onClick={onClick} key={index}></Component>;
      })}
    </div>
  ) : null;
};

export default OnSelectPrompt;
