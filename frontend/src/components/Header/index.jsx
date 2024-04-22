import { useSelector } from 'react-redux'
import { HeaderContainer } from './styles'

import Logo from './Elements/Logo'
import NavButtons from './Elements/NavButtons'
import NavLogout from './Elements/NavLogout'
import NavLinks from './Elements/NavLinks'
import NavSelectReportType from './CreateReport'

const Header = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const avatar = useSelector((state) => state.user.user)
  console.log(avatar)

  return (
    <HeaderContainer>
      <Logo />
      <NavLinks />
      {isLoggedIn ? <NavLogout /> : <NavButtons />}
      <NavSelectReportType />
    </HeaderContainer>
  )
}

export default Header
