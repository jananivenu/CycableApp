import { AccentButton } from '../../styles/elements/buttons'

const NavSelectReportType = () => {
  const handleCreateReport = () => {
    // we should agree on how to display the menu
  }
  return (
    <AccentButton
      tabIndex="0"
      onClick={handleCreateReport}
      onKeyDown={(e) => e.key === 'Enter' && handleCreateReport}
    >
      Add Report
    </AccentButton>
  )
}

export default NavSelectReportType
// we dont need this component??
