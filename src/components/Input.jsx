import React from 'react'

const Input = () => {


  return (
    <div>
      <label htmlFor={id}></label>
      <input 
      id={id}
      type="text"
      {...props} />
    </div>
  )
}

export default Input
