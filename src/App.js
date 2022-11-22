import './App.css';
import {useState} from 'react';
import Input from './components/Input'
import Section from './components/Section'
import Button from './components/Button'
import Submission from './components/Submission';


const App = () => {
  const [showSubmission, setShowSubmission] = useState(false)
  const [showInput, setShowInput] = useState(true)

  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const [education, setEducation] = useState({
    school: '',
    study: '',
    startDate: '',
    endDate: '',
  })

  const [experience, setExperience] = useState({
    company: '',
    position: '',
    tasks: '',
    startDate: '',
    endDate: '',
  })

  const handleNameInput = childInput => {
    setGeneralInfo({
      name: childInput,
      email: generalInfo.email,
      phone: generalInfo.phone,
    })
  }

  const handleEmailInput = childInput => {
    setGeneralInfo({
      name: generalInfo.name,
      email: childInput,
      phone: generalInfo.phone,
    })
  }

  const handlePhoneInput = childInput => {
    setGeneralInfo({
      name: generalInfo.name,
      email: generalInfo.email,
      phone: childInput,
    })
  }

  const handleSchoolInput = childInput => {
    setEducation({
      school: childInput,
      study: education.study,
      startDate: education.startDate,
      endDate: education.endDate,
    })
  }

  const handleStudyInput = childInput => {
    setEducation({
      school: education.school,
      study: childInput,
      startDate: education.startDate,
      endDate: education.endDate,
    })
  }

  const handleStudyStartInput = childInput => {
    setEducation({
      school: education.school,
      study: education.study,
      startDate: childInput,
      endDate: education.endDate,
    })
  }

  const handleStudyEndInput = childInput => {
    setEducation({
      school: education.school,
      study: education.study,
      startDate: education.startDate,
      endDate: childInput,
    })
  }

  const handleCompanyInput = childInput => {
    setExperience({
      company: childInput,
      position: experience.position,
      tasks: experience.tasks,
      startDate: experience.startDate,
      endDate: experience.endDate,
    })
  }

  const handlePositionInput = childInput => {
    setExperience({
      company: experience.company,
      position: childInput,
      tasks: experience.tasks,
      startDate: experience.startDate,
      endDate: experience.endDate,
    })
  }

  const handleTaskInput = childInput => {
    setExperience({
      company: experience.company,
      position: experience.position,
      tasks: childInput,
      startDate: experience.startDate,
      endDate: experience.endDate,
    })
  }

  const handleWorkStartInput = childInput => {
    setExperience({
      company: experience.company,
      position: experience.position,
      tasks: experience.tasks,
      startDate: childInput,
      endDate: experience.endDate,
    })
  }

  const handleWorkEndInput = childInput => {
    setExperience({
      company: experience.company,
      position: experience.position,
      tasks: experience.tasks,
      startDate: experience.startDate,
      endDate: childInput,
    })
  }

  const handleButtonClick = e => {
    setShowSubmission(!showSubmission)
    setShowInput(!showInput)
  }

  return (
    <div className='App'>
    {showInput && (
      <div>
        <Section section='general' sectionTitle='General Information'>
          <Input handleChildInput={handleNameInput} labelText='Full Name' label='fullName' value={generalInfo.name}/>
          <Input handleChildInput={handleEmailInput} labelText='Email' label='email' value={generalInfo.email}/>
          <Input handleChildInput={handlePhoneInput} labelText='Phone Number' label='phoneNumber' value={generalInfo.phone}/>
        </Section>
        <Section section='educational' sectionTitle='Education'>
          <Input handleChildInput={handleSchoolInput} labelText='School Name' label='school' value={education.school}/>
          <Input handleChildInput={handleStudyInput} labelText='Title of Study' label='study' value={education.study}/>
          <Input handleChildInput={handleStudyStartInput} labelText='Start Date' label='studyStartDate' value={education.startDate}/>
          <Input handleChildInput={handleStudyEndInput} labelText='End Date' label='studyEndDate' value={education.endDate}/>
        </Section>

        <Section section='practical' sectionTitle='Work Experience'>
          <Input handleChildInput={handleCompanyInput} labelText='Company Name' label='company' value={experience.company}/>
          <Input handleChildInput={handlePositionInput} labelText='Position Title' label='position' value={experience.position}/>
          <Input handleChildInput={handleTaskInput} labelText='Main Tasks of Job' label='tasks' value={experience.tasks}/>
          <Input handleChildInput={handleWorkStartInput} labelText='Start Date' label='workStartDate' value={experience.startDate}/>
          <Input handleChildInput={handleWorkEndInput} labelText='End Date' label='workEndDate' value={experience.endDate}/>
        </Section>

        <Section section='submission' sectionTitle='Submission'>
          <Button name='Submit' handleButton={handleButtonClick}/>
        </Section>
      </div>
    )}

    {showSubmission && (
      <div>
        <Submission generalInfo={generalInfo} education={education} experience={experience} />
        <Button name='Edit' handleButton={handleButtonClick}/>
      </div>
    )}

  </div>
  )
}

export default App;
