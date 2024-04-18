import { NavLinksContainer, StyledNavLink } from '../styles'

function NavLinks() {
  return (
    <NavLinksContainer>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/about">About</StyledNavLink>
      <StyledNavLink to="/statistics">Statistics</StyledNavLink>
    </NavLinksContainer>
  )
}

export default NavLinks
