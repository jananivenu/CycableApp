import NavLogout from './NavLogout'
import { DropdownMenuContainer, DropdownMenuItem } from './styles'
import { TbUserSquareRounded } from 'react-icons/tb'

const DropdownMenu = ({ isVisible, toggleMenu }) => {
  if (!isVisible) return null

  return (
    <DropdownMenuContainer>
      <DropdownMenuItem to="/profile/me" onClick={toggleMenu}>
        <TbUserSquareRounded />
        Profile
      </DropdownMenuItem>
      <NavLogout />
    </DropdownMenuContainer>
  )
}

export default DropdownMenu
