import useLogout from '../../../../utils/useLogout'
import { IconWrapper, LogoutButton } from './styles'
import { LuDoorOpen } from "react-icons/lu";

function NavLogout() {
  const logout = useLogout()
  const handleLogout = () => {
    logout()
  }

  return (
    <LogoutButton
      tabIndex="0"
      onClick={handleLogout}
      onKeyDown={(e) => e.key === 'Enter' && handleLogout()}
    >
      <IconWrapper>
        <LuDoorOpen />
      </IconWrapper>
      Logout
    </LogoutButton>
  )
}

export default NavLogout
