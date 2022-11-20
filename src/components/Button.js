import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button onClick={event => this.props.handleSubmit('hello')}>
        Submit
      </button>
    )
  }
}

export default Button