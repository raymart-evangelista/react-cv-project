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

  // const handleSchoolInput = childInput => {
  //   this.setState({
  //     education: {
  //       school: this.state.education.school = childInput,
  //       study: this.state.education.study,
  //       startDate: this.state.education.startDate,
  //       endDate: this.state.education.endDate,
  //     }
  //   })
  // }

  // const handleStudyInput = childInput => {
  //   this.setState({
  //     education: {
  //       school: this.state.education.school,
  //       study: this.state.education.study = childInput,
  //       startDate: this.state.education.startDate,
  //       endDate: this.state.education.endDate,
  //     }
  //   })
  // }

  // const handleStudyStartInput = childInput => {
  //   this.setState({
  //     education: {
  //       school: this.state.education.school,
  //       study: this.state.education.study,
  //       startDate: this.state.education.startDate = childInput,
  //       endDate: this.state.education.endDate,
  //     }
  //   })
  // }

  // const handleStudyEndInput = childInput => {
  //   this.setState({
  //     education: {
  //       school: this.state.education.school,
  //       study: this.state.education.study,
  //       startDate: this.state.education.startDate,
  //       endDate: this.state.education.endDate = childInput,
  //     }
  //   })
  // }

  // const handleCompanyInput = childInput => {
  //   this.setState({
  //     experience: {
  //       company: this.state.experience.company = childInput,
  //       position: this.state.experience.position,
  //       tasks: this.state.experience.tasks,
  //       startDate: this.state.experience.startDate,
  //       endDate: this.state.experience.endDate,
  //     }
  //   })
  // }

  // const handlePositionInput = childInput => {
  //   this.setState({
  //     experience: {
  //       company: this.state.experience.company,
  //       position: this.state.experience.position = childInput,
  //       tasks: this.state.experience.tasks,
  //       startDate: this.state.experience.startDate,
  //       endDate: this.state.experience.endDate,
  //     }
  //   })
  // }

  // const handleTaskInput = childInput => {
  //   this.setState({
  //     experience: {
  //       company: this.state.experience.company,
  //       position: this.state.experience.position,
  //       tasks: this.state.experience.tasks = childInput,
  //       startDate: this.state.experience.startDate,
  //       endDate: this.state.experience.endDate,
  //     }
  //   })
  // }

  // const handleWorkStartInput = childInput => {
  //   this.setState({
  //     experience: {
  //       company: this.state.experience.company,
  //       position: this.state.experience.position,
  //       tasks: this.state.experience.tasks,
  //       startDate: this.state.experience.startDate = childInput,
  //       endDate: this.state.experience.endDate,
  //     }
  //   })
  // }

  // const handleWorkEndInput = childInput => {
  //   this.setState({
  //     experience: {
  //       company: this.state.experience.company,
  //       position: this.state.experience.position,
  //       tasks: this.state.experience.tasks,
  //       startDate: this.state.experience.startDate,
  //       endDate: this.state.experience.endDate = childInput,
  //     }
  //   })
  // }

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
        {/* <Section section='educational' sectionTitle='Education'>
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
        </Section> */}

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

// class App extends Component {

//   constructor() {
//     super()

//     this.state = {
//       showSubmission: false,
//       showInputs: true,
//       generalInfo: {
//         name: '',
//         email: '',
//         phone: '',
//       },
//       education: {
//         school: '',
//         study: '',
//         startDate: '',
//         endDate: '',
//       },
//       experience: {
//         company: '',
//         position: '',
//         tasks: '',
//         startDate: '',
//         endDate: '',
//       }
//     }

//     this.handleNameInput = this.handleNameInput.bind(this)
//     this.handleEmailInput = this.handleEmailInput.bind(this)
//     this.handlePhoneInput = this.handlePhoneInput.bind(this)

//     this.handleButtonClick = this.handleButtonClick.bind(this)
//   }

//   handleNameInput = childInput => {
//     this.setState({
//       generalInfo: {
//         name: this.state.generalInfo.name = childInput,
//         email: this.state.generalInfo.email,
//         phone: this.state.generalInfo.phone
//       }
//     })
//   }

//   handleEmailInput = childInput => {
//     this.setState({
//       generalInfo: {
//         name: this.state.generalInfo.name,
//         email: this.state.generalInfo.email = childInput,
//         phone: this.state.generalInfo.phone
//       }
//     })
//   }

//   handlePhoneInput = childInput => {
//     this.setState({
//       generalInfo: {
//         name: this.state.generalInfo.name,
//         email: this.state.generalInfo.email,
//         phone: this.state.generalInfo.phone = childInput,
//       }
//     })
//   }

//   handleSchoolInput = childInput => {
//     this.setState({
//       education: {
//         school: this.state.education.school = childInput,
//         study: this.state.education.study,
//         startDate: this.state.education.startDate,
//         endDate: this.state.education.endDate,
//       }
//     })
//   }

//   handleStudyInput = childInput => {
//     this.setState({
//       education: {
//         school: this.state.education.school,
//         study: this.state.education.study = childInput,
//         startDate: this.state.education.startDate,
//         endDate: this.state.education.endDate,
//       }
//     })
//   }

//   handleStudyStartInput = childInput => {
//     this.setState({
//       education: {
//         school: this.state.education.school,
//         study: this.state.education.study,
//         startDate: this.state.education.startDate = childInput,
//         endDate: this.state.education.endDate,
//       }
//     })
//   }

//   handleStudyEndInput = childInput => {
//     this.setState({
//       education: {
//         school: this.state.education.school,
//         study: this.state.education.study,
//         startDate: this.state.education.startDate,
//         endDate: this.state.education.endDate = childInput,
//       }
//     })
//   }

//   handleCompanyInput = childInput => {
//     this.setState({
//       experience: {
//         company: this.state.experience.company = childInput,
//         position: this.state.experience.position,
//         tasks: this.state.experience.tasks,
//         startDate: this.state.experience.startDate,
//         endDate: this.state.experience.endDate,
//       }
//     })
//   }

//   handlePositionInput = childInput => {
//     this.setState({
//       experience: {
//         company: this.state.experience.company,
//         position: this.state.experience.position = childInput,
//         tasks: this.state.experience.tasks,
//         startDate: this.state.experience.startDate,
//         endDate: this.state.experience.endDate,
//       }
//     })
//   }

//   handleTaskInput = childInput => {
//     this.setState({
//       experience: {
//         company: this.state.experience.company,
//         position: this.state.experience.position,
//         tasks: this.state.experience.tasks = childInput,
//         startDate: this.state.experience.startDate,
//         endDate: this.state.experience.endDate,
//       }
//     })
//   }

//   handleWorkStartInput = childInput => {
//     this.setState({
//       experience: {
//         company: this.state.experience.company,
//         position: this.state.experience.position,
//         tasks: this.state.experience.tasks,
//         startDate: this.state.experience.startDate = childInput,
//         endDate: this.state.experience.endDate,
//       }
//     })
//   }

//   handleWorkEndInput = childInput => {
//     this.setState({
//       experience: {
//         company: this.state.experience.company,
//         position: this.state.experience.position,
//         tasks: this.state.experience.tasks,
//         startDate: this.state.experience.startDate,
//         endDate: this.state.experience.endDate = childInput,
//       }
//     })
//   }

//   handleButtonClick = e => {
//     this.setState({
//       showSubmission: !this.state.showSubmission,
//       showInputs: !this.state.showInputs,
//     })
//   }

//   render() {
//     return (
//       <div className='App'>
//         {this.state.showInputs && (
//           <div>
//             <Section section='general' sectionTitle='General Information'>
//               <Input handleChildInput={this.handleNameInput} labelText='Full Name' label='fullName' value={this.state.generalInfo.name}/>
//               <Input handleChildInput={this.handleEmailInput} labelText='Email' label='email' value={this.state.generalInfo.email}/>
//               <Input handleChildInput={this.handlePhoneInput} labelText='Phone Number' label='phoneNumber' value={this.state.generalInfo.phone}/>
//             </Section>
//             <Section section='educational' sectionTitle='Education'>
//               <Input handleChildInput={this.handleSchoolInput} labelText='School Name' label='school' value={this.state.education.school}/>
//               <Input handleChildInput={this.handleStudyInput} labelText='Title of Study' label='study' value={this.state.education.study}/>
//               <Input handleChildInput={this.handleStudyStartInput} labelText='Start Date' label='studyStartDate' value={this.state.education.startDate}/>
//               <Input handleChildInput={this.handleStudyEndInput} labelText='End Date' label='studyEndDate' value={this.state.education.endDate}/>
//             </Section>

//             <Section section='practical' sectionTitle='Work Experience'>
//               <Input handleChildInput={this.handleCompanyInput} labelText='Company Name' label='company' value={this.state.experience.company}/>
//               <Input handleChildInput={this.handlePositionInput} labelText='Position Title' label='position' value={this.state.experience.position}/>
//               <Input handleChildInput={this.handleTaskInput} labelText='Main Tasks of Job' label='tasks' value={this.state.experience.tasks}/>
//               <Input handleChildInput={this.handleWorkStartInput} labelText='Start Date' label='workStartDate' value={this.state.experience.startDate}/>
//               <Input handleChildInput={this.handleWorkEndInput} labelText='End Date' label='workEndDate' value={this.state.experience.endDate}/>
//             </Section>

//             <Section section='submission' sectionTitle='Submission'>
//               <Button name='Submit' handleButton={this.handleButtonClick}/>
//             </Section>
//           </div>
//         )}

//         {this.state.showSubmission && (
//           <div>
//             <Submission generalInfo={this.state.generalInfo} education={this.state.education} experience={this.state.experience} />
//             <Button name='Edit' handleButton={this.handleButtonClick}/>
//           </div>
//         )}

//       </div>
//     )
//   }
// }

export default App;
