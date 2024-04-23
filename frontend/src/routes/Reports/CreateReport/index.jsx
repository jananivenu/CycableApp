import { StyledH2, StyledH3 } from '../../../styles/elements/typography'

// main component to render different create_report_types
const CreateReport = () => {
  return (
    <div>
      {/* display list of types */}
      <StyledH3>Bicycle Accident</StyledH3>
      <StyledH3>Bicycle Theft</StyledH3>
      <StyledH3>Dangerous Locations</StyledH3>
      <StyledH3>Legal* Violations </StyledH3>
    </div>
  )
}

export default CreateReport
