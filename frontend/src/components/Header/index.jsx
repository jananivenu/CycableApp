import { HeaderContainer } from './styles'

import Logo from './Elements/Logo'
import NavButtons from './Elements/NavButtons'
import NavLinks from './Elements/NavLinks'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <NavLinks />
      <NavButtons />
    </HeaderContainer>
  )
}

export default Header
