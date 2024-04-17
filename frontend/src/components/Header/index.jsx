import Logo from './Elements/Logo'
import NavButtons from './Elements/NavButtons'
import NavLinks from './Elements/NavLinks'
import { HeaderContainer } from './styles'

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
