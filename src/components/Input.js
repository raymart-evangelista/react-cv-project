import React, { Component } from "react";
import uniqid from "uniqid"

class Input extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   inputLabel: this.props.label,
    //   inputInfo: {
    //     text: '',
    //     id: uniqid()
    //   }
    // }
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
        />
      </div>
    )
  }
}

export default Input