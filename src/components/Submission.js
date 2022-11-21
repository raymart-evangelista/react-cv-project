import React, { Component } from "react"

class Submission extends Component {
  constructor(props) {
    super(props)
    this.generalInfo = this.props.generalInfo
    this.education = this.props.education
    this.experience = this.props.experience
  }

  render() {
    return (
      <div>
        <h1>General Information</h1>
        <p>{this.generalInfo.name}</p>
        <p>{this.generalInfo.email}</p>
        <p>{this.generalInfo.phone}</p>

        <h1>Education</h1>
        <p>{this.education.school}</p>
        <p>{this.education.study}</p>
        <p>{this.education.startDate}</p>
        <p>{this.education.endDate}</p>

        <h1>Work Experience</h1>
        <p>{this.experience.company}</p>
        <p>{this.experience.position}</p>
        <p>{this.experience.tasks}</p>
        <p>{this.experience.startDate}</p>
        <p>{this.experience.endDate}</p>
      </div>
    )
  }
}

export default Submission