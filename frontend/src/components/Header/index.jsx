import { useSelector } from 'react-redux'
import { HeaderContainer } from './styles'

import Logo from './Elements/Logo'
import NavButtons from './Elements/NavButtons'
import NavLogout from './Elements/NavLogout'
import NavLinks from './Elements/NavLinks'

const Header = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

  return (
    <HeaderContainer>
      <Logo />
      <NavLinks />
      {isLoggedIn ? <NavLogout /> : <NavButtons />}
    </HeaderContainer>
  )
}

export default Header
