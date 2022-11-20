import React, { Component } from "react";
import uniqid from "uniqid"

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputLabel: this.props.label,
      input: {
        text: '',
        id: uniqid()
      }
    }
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.label}>{this.props.labelText}</label>
        <input type="text" name="" id={this.props.label} />
      </div>
    )
  }
}

export default Input