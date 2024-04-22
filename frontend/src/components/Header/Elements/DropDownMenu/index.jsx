import NavLogout from './NavLogout'
import { DropdownMenuContainer, DropdownMenuItem, IconWrapper } from './styles'
import { FaRegCircleUser } from "react-icons/fa6";


const DropdownMenu = ({ isVisible, toggleMenu }) => {
  if (!isVisible) return null

  return (
    <DropdownMenuContainer>
      <DropdownMenuItem to="/profile/me" onClick={toggleMenu}>
        <IconWrapper>
          <FaRegCircleUser />
        </IconWrapper>
        Profile
      </DropdownMenuItem>
      <NavLogout />
    </DropdownMenuContainer>
  )
}

export default DropdownMenu
