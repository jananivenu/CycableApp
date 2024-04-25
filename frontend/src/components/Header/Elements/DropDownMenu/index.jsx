import NavLogout from './NavLogout'
import { DropdownMenuContainer, DropdownMenuItem, IconWrapper } from './styles'
import { TbUserSquareRounded } from 'react-icons/tb'


const DropdownMenu = ({ isVisible, toggleMenu }) => {
  if (!isVisible) return null

  return (
    <DropdownMenuContainer>
      <DropdownMenuItem to="/profile/me" onClick={toggleMenu}>
        <IconWrapper>
          <TbUserSquareRounded />
        </IconWrapper>
        Profile
      </DropdownMenuItem>
      <NavLogout />
    </DropdownMenuContainer>
  )
}

export default DropdownMenu
