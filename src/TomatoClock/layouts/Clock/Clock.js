import React, { useState } from 'react';
import styles from './Clock.module.sass';
import PlayButton from '../../components/PlayButton/PlayButton';
import ClockBackground from '../../components/ClockBackground/ClockBackground';
import PlayAnimation from '../../components/PlayAnimation/PlayAnimation';

const Clock = props => {
  const [playState, setPlayState] = useState(false);
  const playClick = () => {
    setPlayState(!playState);
  };

  return (
    <div className={props.className} onClick={playClick}>
      <PlayButton />
      <ClockBackground />
      <PlayAnimation className={styles.play_animation} playState={playState} />
    </div>
  );
};

export default Clock;
