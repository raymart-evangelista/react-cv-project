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
      inputList: [],
      generalInfo: {
        name: 'some name',
        email: '',
        phone: '',
      },
      education: {
        school: '',
        study: '',
        date: '',
      },
      experience: {
        company: '',
        position: '',
        tasks: '',
        from: '',
        to: '',
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
        name: this.state.generalInfo.name = childInput,
        email: this.state.generalInfo.email,
        phone: this.state.generalInfo.phone
      }
    })
  }

  handleEmailInput = childInput => {
    this.setState({
      generalInfo: {
        name: this.state.generalInfo.name,
        email: this.state.generalInfo.email = childInput,
        phone: this.state.generalInfo.phone
      }
    })
  }

  handlePhoneInput = childInput => {
    this.setState({
      generalInfo: {
        name: this.state.generalInfo.name,
        email: this.state.generalInfo.email,
        phone: this.state.generalInfo.phone = childInput,
      }
    })
  }

  handleSubmit = e => {
    // this.setState({
    //   inputList: this.state.inputList.concat()
    // })
    console.log(`the name is: ${this.state.generalInfo.name}`)
    console.log(`the email is: ${this.state.generalInfo.email}`)
    console.log(`the phone is: ${this.state.generalInfo.phone}`)
  }

  render() {
    return (
      <div className='App'>
        <Section section='general' sectionTitle='General Information'>
          <Input handleChildInput={this.handleNameInput} labelText='Full Name' label='fullName' />
          <Input handleChildInput={this.handleEmailInput} labelText='Email' label='email' />
          <Input handleChildInput={this.handlePhoneInput} labelText='Phone Number' label='phoneNumber'/>
        </Section>
{/* 
        <Section section='educational' sectionTitle='Educational Experience'>
          <Input handleChildInput={handleChildInput} labelText='School Name' label='school'/>
          <Input handleChildInput={handleChildInput} labelText='Title of Study' label='study'/>
          <Input handleChildInput={handleChildInput} labelText='Date of Study' label='studyDate'/>
        </Section>

        <Section section='practical' sectionTitle='Practical Experience'>
          <Input handleChildInput={handleChildInput} labelText='Company Name' label='company'/>
          <Input handleChildInput={handleChildInput} labelText='Position Title' label='position'/>
          <Input handleChildInput={handleChildInput} labelText='Main Tasks of Job' label='tasks'/>
          <Input handleChildInput={handleChildInput} labelText='Date from:' label='dateFrom'/>
          <Input handleChildInput={handleChildInput} labelText='Date until:' label='dateUntil'/>
        </Section> */}

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
