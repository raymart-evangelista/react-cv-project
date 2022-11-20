import React, { Component } from "react";

class Section extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id={this.props.section}>
        <h1>{this.props.sectionTitle}</h1>
        {this.props.children}
      </div>
    )
  }
}

export default Section