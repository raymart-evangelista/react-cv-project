import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Input from './components/Input'
import Section from './components/Section'
import Button from './components/Button'

class App extends Component {

  constructor() {
    super()

    this.state = {
      generalInfo: {
        name: '',
        email: '',
        phone: '',
      },
      education: {
        school: '',
        study: '',
        startDate: '',
        endDate: '',
      },
      experience: {
        company: '',
        position: '',
        tasks: '',
        startDate: '',
        endDate: '',
      }
    }

    this.handleNameInput = this.handleNameInput.bind(this)
    this.handleEmailInput = this.handleEmailInput.bind(this)
    this.handlePhoneInput = this.handlePhoneInput.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameInput = childInput => {
    this.setState({
      generalInfo: {
        name: this.state.generalInfo.name,
        email: this.state.generalInfo.email,
        phone: this.state.generalInfo.phone
      }
    })
  }

  handleEmailInput = childInput => {
    this.setState({
      generalInfo: {
        name: this.state.generalInfo.name,
        email: this.state.generalInfo.email,
        phone: this.state.generalInfo.phone
      }
    })
  }

  handlePhoneInput = childInput => {
    this.setState({
      generalInfo: {
        name: this.state.generalInfo.name,
        email: this.state.generalInfo.email,
        phone: this.state.generalInfo.phone,
      }
    })
  }

  handleSchoolInput = childInput => {
    this.setState({
      education: {
        school: this.state.education.school,
        study: this.state.education.study,
        startDate: this.state.education.startDate,
        endDate: this.state.education.endDate,
      }
    })
  }

  handleStudyInput = childInput => {
    this.setState({
      education: {
        school: this.state.education.school,
        study: this.state.education.study,
        startDate: this.state.education.startDate,
        endDate: this.state.education.endDate,
      }
    })
  }

  handleStudyStartInput = childInput => {
    this.setState({
      education: {
        school: this.state.education.school,
        study: this.state.education.study,
        startDate: this.state.education.startDate,
        endDate: this.state.education.endDate,
      }
    })
  }

  handleStudyEndInput = childInput => {
    this.setState({
      education: {
        school: this.state.education.school,
        study: this.state.education.study,
        startDate: this.state.education.startDate,
        endDate: this.state.education.endDate,
      }
    })
  }

  handleCompanyInput = childInput => {
    this.setState({
      experience: {
        company: this.state.experience.company,
        position: this.state.experience.position,
        tasks: this.state.experience.tasks,
        startDate: this.state.experience.startDate,
        endDate: this.state.experience.endDate,
      }
    })
  }

  handlePositionInput = childInput => {
    this.setState({
      experience: {
        company: this.state.experience.company,
        position: this.state.experience.position,
        tasks: this.state.experience.tasks,
        startDate: this.state.experience.startDate,
        endDate: this.state.experience.endDate,
      }
    })
  }

  handleTaskInput = childInput => {
    this.setState({
      experience: {
        company: this.state.experience.company,
        position: this.state.experience.position,
        tasks: this.state.experience.tasks,
        startDate: this.state.experience.startDate,
        endDate: this.state.experience.endDate,
      }
    })
  }

  handleWorkStartInput = childInput => {
    this.setState({
      experience: {
        company: this.state.experience.company,
        position: this.state.experience.position,
        tasks: this.state.experience.tasks,
        startDate: this.state.experience.startDate,
        endDate: this.state.experience.endDate,
      }
    })
  }

  handleWorkEndInput = childInput => {
    this.setState({
      experience: {
        company: this.state.experience.company,
        position: this.state.experience.position,
        tasks: this.state.experience.tasks,
        startDate: this.state.experience.startDate,
        endDate: this.state.experience.endDate,
      }
    })
  }

  handleSubmit = e => {
    console.log(`the name is: ${this.state.generalInfo.name}`)
    console.log(`the email is: ${this.state.generalInfo.email}`)
    console.log(`the phone is: ${this.state.generalInfo.phone}`)


    console.log(this.state.education.school)

    console.log(this.state.experience.company)
  }

  render() {
    return (
      <div className='App'>
        <Section section='general' sectionTitle='General Information'>
          <Input handleChildInput={this.handleNameInput} labelText='Full Name' label='fullName' />
          <Input handleChildInput={this.handleEmailInput} labelText='Email' label='email' />
          <Input handleChildInput={this.handlePhoneInput} labelText='Phone Number' label='phoneNumber'/>
        </Section>

        <Section section='educational' sectionTitle='Educational Experience'>
          <Input handleChildInput={this.handleSchoolInput} labelText='School Name' label='school'/>
          <Input handleChildInput={this.handleStudyInput} labelText='Title of Study' label='study'/>
          <Input handleChildInput={this.handleStudyStartInput} labelText='Start Date' label='studyStartDate'/>
          <Input handleChildInput={this.handleStudyEndInput} labelText='End Date' label='studyEndDate'/>
        </Section>

        <Section section='practical' sectionTitle='Practical Experience'>
          <Input handleChildInput={this.handleCompanyInput} labelText='Company Name' label='company'/>
          <Input handleChildInput={this.handlePositionInput} labelText='Position Title' label='position'/>
          <Input handleChildInput={this.handleTaskInput} labelText='Main Tasks of Job' label='tasks'/>
          <Input handleChildInput={this.handleWorkStartInput} labelText='Start Date' label='workStartDate'/>
          <Input handleChildInput={this.handleWorkEndInput} labelText='End Date' label='workEndDate'/>
        </Section>

        <Section section='submission' sectionTitle='Submission'>
          {/* when button is clicked, take input values from
          inputs and store into state */}
          <Button handleSubmit={this.handleSubmit}/>
        </Section>
      </div>
    )
  }
}

export default App;
