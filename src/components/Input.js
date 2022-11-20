import React, { Component } from "react";
import uniqid from "uniqid"

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputLabel: this.props.label,
      inputInfo: {
        text: '',
        id: uniqid()
      }
    }
  }
  
  handleInputChange = (e) => {
    // console.log(`${this.props.label}: ${e.target.value}`)
    this.setState({
      inputInfo: {
        text: e.target.value,
        id: this.state.inputInfo.id
      }
    })

    this.props.handleChildInput(this.state)
  }

  render() {
    return (
      <div>
        {/* <label htmlFor={this.props.label}>{this.props.labelText}</label> */}
        <input
          onChange={this.handleInputChange}
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