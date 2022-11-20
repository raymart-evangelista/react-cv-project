import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Input from './components/Input'
import Section from './components/Section'
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Section section='general' sectionTitle='General Information'>
          <Input labelText='Full Name' label='fullName' />
          <Input labelText='Email' label='email' />
          <Input labelText='Phone Number' label='phoneNumber' />
        </Section>

        <Section section='educational' sectionTitle='Educational Experience'>
          <Input labelText='School Name' label='school'/>
          <Input labelText='Title of Study' label='study'/>
          <Input labelText='Date of Study' label='studyDate'/>
        </Section>

        <Section section='practical' sectionTitle='Practical Experience'>
          <Input labelText='Company Name' label='company'/>
          <Input labelText='Position Title' label='position'/>
          <Input labelText='Main Tasks of Job' label='tasks'/>
          <Input labelText='Date from:' label='dateFrom'/>
          <Input labelText='Date until:' label='dateUntil'/>
        </Section>

        <Section section='submission' sectionTitle='Submission'>
          <Button/>
        </Section>
      </div>
    )
  }
}

export default App;
