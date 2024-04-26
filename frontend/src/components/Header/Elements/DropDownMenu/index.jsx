import NavLogout from './NavLogout'
import { DropdownMenuContainer, DropdownMenuItem, IconWrapper } from './styles'


const DropdownMenu = ({ isVisible, toggleMenu }) => {
  if (!isVisible) return null

  return (
    <DropdownMenuContainer>
      <DropdownMenuItem to="/profile/me" onClick={toggleMenu}>
        <IconWrapper>
        </IconWrapper>
        Profile
      </DropdownMenuItem>
      <NavLogout />
    </DropdownMenuContainer>
  )
}

export default DropdownMenu
