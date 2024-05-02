import { StyledH2 } from '../../../../styles/elements/typography'

const ReportType = ({ type }) => {
  let title = ''
  if (type === 'bicycle_accident') {
    title = 'Bicycle Accident'
  } else if (type === 'bicycle_theft') {
    title = 'Bicycle Theft'
  } else if (type === 'near_miss') {
    title = 'Dangerous Location'
  } else if (type === 'violations') {
    title = 'Legalize "Violation"'
  }
  return <StyledH2>{title}</StyledH2>
}

export default ReportType
