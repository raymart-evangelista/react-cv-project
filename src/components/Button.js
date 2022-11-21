import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button onClick={this.props.handleButton}>
        {this.props.name}
      </button>
    )
  }
}

export default Button