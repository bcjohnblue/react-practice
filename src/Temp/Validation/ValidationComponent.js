import React from 'react'

const validationComponent = (props) => {
  let DOM = null;
  
  if(props.userLength < 5) {
    DOM = (<div>Text too short</div>)
  } else {
    DOM = (<div>Text long enough</div>)
  }

  return (
    DOM
  )
}

export default validationComponent