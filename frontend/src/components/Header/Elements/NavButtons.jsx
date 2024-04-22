import { useSelector } from 'react-redux'

import {
  LinkLikeAccentButton,
  LinkLikeSimpleButton,
  NavButtonsContainer,
} from '../styles'
import { AvatarContainer, AvatarImage, DropdownButton } from './styles'
import NavLogout from './NavLogout'

function NavButtons() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const avatar = useSelector((state) => state.user.user.avatar)

  return (
    <NavButtonsContainer>
      {isLoggedIn ? (
        <>
          <AvatarContainer>
            <AvatarImage src={avatar} alt="Avatar" />
            <DropdownButton />
          </AvatarContainer>
          <NavLogout />
        </>
      ) : (
        <LinkLikeSimpleButton to="/login">Sign In</LinkLikeSimpleButton>
      )}

      <LinkLikeAccentButton hide to="/report">
        Add Report
      </LinkLikeAccentButton>
    </NavButtonsContainer>
  )
}

export default NavButtons
