import React, { Component } from "react";

const Input = ({handleChildInput, label, labelText, value}) => {
  return (
    <div>
      <input 
        onChange={event => handleChildInput(event.target.value)}
        type="text" 
        id={label}
        placeholder={labelText}
        value={value}
      />
    </div>
  )
}

export default Input