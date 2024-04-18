import { AccentButton, SimpleButton } from '../../../styles/elements'
import { NavButtonsContainer } from '../styles'

function NavButtons() {
  return (
    <NavButtonsContainer>
      <SimpleButton>Log In</SimpleButton>
      <AccentButton hide>Report</AccentButton>
    </NavButtonsContainer>
  )
}

export default NavButtons
