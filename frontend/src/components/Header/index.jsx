import { useSelector } from 'react-redux'
import Logo from './Elements/Logo'
import NavButtons from './Elements/NavButtons'
import NavLinks from './Elements/NavLinks'
import { HeaderContainer } from './styles'
import useLogout from '../../utils/useLogout'
import { SimpleButton } from '../../styles/elements/buttons'

const Header = () => {
  const logout = useLogout()
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

  const handleLogout = () => {
    logout()
  }

  return (
    <HeaderContainer>
      <Logo />
      <NavLinks />
      {isLoggedIn ? (
        <SimpleButton
          role="button"
          tabIndex="0"
          onClick={handleLogout}
          onKeyPress={(e) => e.key === 'Enter' && handleLogout()}
        >
          Logout
        </SimpleButton>
      ) : (
        <NavButtons />
      )}
    </HeaderContainer>
  )
}

export default Header
