import React from 'react'

const userOutput = (props) => {
  return (
   <div>
     <p>{props.username}</p>
     <p>{props.userLength}</p>
   </div> 
  )
}

export default userOutput