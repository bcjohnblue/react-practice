import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import TomatoClockMain from './TomatoClock/pages/Main/Main';

import './App.css';

import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import ValidationComponent from './Validation/ValidationComponent';
import CharComponent from './Char/CharComponent';

const app = props => {
  const [userState, setUserstate] = useState({
    username: '',
    userLength: 0
  });

  const userNameHandler = event => {
    setUserstate({
      username: event.target.value,
      userLength: event.target.value.length
    });
  };

  const deleteChar = charIndex => {
    let user = { ...userState };
    const username =
      user.username.slice(0, charIndex) + user.username.slice(charIndex + 1);

    setUserstate({
      username,
      userLength: user.userLength - 1
    });
  };

  const charList = userState.username.split('').map((char, index) => {
    return (
      <CharComponent char={char} click={() => deleteChar(index)} key={index} />
    );
  });

  const comp = (
    <React.Fragment>
      <UserInput change={userNameHandler} value={userState.username} />
      <UserOutput
        username={userState.username}
        userLength={userState.userLength}
      />
      <ValidationComponent userLength={userState.userLength} />
      {charList}
    </React.Fragment>
  );

  return (
    <div className="App">
      <Route path="/test" render={() => comp} />
      <Route path="/" component={TomatoClockMain} />
      {/* <Route path="/tomato-clock/main" component={TomatoClockMain} /> */}
    </div>
  );
};

export default app;
