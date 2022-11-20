import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  onSubmit() {
    this.setState({

    })
  }

  render() {
    return (
      <button onSubmit={this.onSubmit}>
        Submit
      </button>
    )
  }
}

export default Button