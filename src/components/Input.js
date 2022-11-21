import React, { Component } from "react";
import uniqid from "uniqid"

class Input extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input
          onChange={event => this.props.handleChildInput(event.target.value)}
          type="text" 
          name="" 
          id={this.props.label} 
          placeholder={this.props.labelText}
          value={this.props.value}
        />
      </div>
    )
  }
}

export default Input