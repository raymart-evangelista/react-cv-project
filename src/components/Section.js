const Section = ({section, sectionTitle, children}) => {
  return (
    <div id={section}>
      <h1>{sectionTitle}</h1>
      {children}
    </div>
  )
}

export default Section