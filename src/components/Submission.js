const Submission = ({generalInfo, education, experience}) => {
  return (
    <div>
        <h1>General Information</h1>
        <p>{generalInfo.name}</p>
        <p>{generalInfo.email}</p>
        <p>{generalInfo.phone}</p>

        <h1>Education</h1>
        <p>{education.school}</p>
        <p>{education.study}</p>
        <p>{education.startDate}</p>
        <p>{education.endDate}</p>

        <h1>Work Experience</h1>
        <p>{experience.company}</p>
        <p>{experience.position}</p>
        <p>{experience.tasks}</p>
        <p>{experience.startDate}</p>
        <p>{experience.endDate}</p> 
    </div>
  )
}

export default Submission