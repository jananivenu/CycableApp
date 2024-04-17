import { NavLink } from 'react-router-dom'
import { NavLinksContainer } from '../styles'

function NavLinks() {
  return (
    <NavLinksContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
    </NavLinksContainer>
  )
}

export default NavLinks
