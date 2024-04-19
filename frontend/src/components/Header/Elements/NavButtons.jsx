import { LinkLikeAccentButton, LinkLikeSimpleButton, NavButtonsContainer } from '../styles'

function NavButtons() {
  return (
    <NavButtonsContainer>
      <LinkLikeSimpleButton to='/login'>Log In</LinkLikeSimpleButton>
      <LinkLikeAccentButton hide to='/report'>Report</LinkLikeAccentButton>
    </NavButtonsContainer>
  )
}

export default NavButtons
