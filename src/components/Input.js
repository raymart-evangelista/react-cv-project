import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props)
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