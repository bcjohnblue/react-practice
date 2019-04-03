import React, {Component} from 'react'
import './UserInput.css';

const userInput = (props) => {
  const style = {
    border: '1px solid red'
  }

  return (
   <div>
     <input type="text" className="text" onChange={props.change} value={props.value} style={style}/>
   </div> 
  )
}

export default userInput