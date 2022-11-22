import React, { Component } from 'react'

const Button = ({name, handleButton}) => {
  return (
    <button onClick={handleButton}>{name}</button>
  )
}

export default Button