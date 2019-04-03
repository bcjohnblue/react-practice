import React, { useState } from 'react';
import './App.css';

import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput';
import ValidationComponent from './Validation/ValidationComponent';
import CharComponent from './Char/CharComponent'

const app = props => {
  const [userState, setUserstate] = useState({
    username: '',
    userLength: 0
  })

  const userNameHandler = (event) => {
    setUserstate({
      username: event.target.value,
      userLength: event.target.value.length
    })
  }

  const deleteChar = (charIndex) => {
    let user = {...userState}
    const username = user.username.slice(0, charIndex) + user.username.slice(charIndex + 1)

    setUserstate({
      username,
      userLength: user.userLength -1
    })
  }

  const charList = userState.username.split('').map((char, index) => {
    return (
      <CharComponent char={char} click={() => deleteChar(index)} key={index}></CharComponent>
    )
  })

  return (
    <div className="App">
      <UserInput change={userNameHandler} value={userState.username}></UserInput>
      <UserOutput username={userState.username} userLength={userState.userLength}></UserOutput>
      <ValidationComponent userLength={userState.userLength}></ValidationComponent>
      {charList}
    </div>
  );
}

export default app;
