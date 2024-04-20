import { SimpleButton } from '../../../styles/elements/buttons'
import useLogout from '../../../utils/useLogout'

function NavLogout() {
  const logout = useLogout()
  const handleLogout = () => {
    logout()
  }

  return (
    <SimpleButton
      tabIndex="0"
      onClick={handleLogout}
      onKeyDown={(e) => e.key === 'Enter' && handleLogout()}
    >
      Logout
    </SimpleButton>
  )
}

export default NavLogout
