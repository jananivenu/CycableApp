import { NavLink } from 'react-router-dom'
import { StyledNavLink } from '../styles'
import { LogoLink } from './styles'

function Logo() {
  return (
    <h1>
      <LogoLink to="/">Cycable</LogoLink>
    </h1>
  )
}

export default Logo
