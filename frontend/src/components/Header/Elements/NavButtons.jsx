import { useSelector } from 'react-redux'

import {
  LinkLikeAccentButton,
  LinkLikeSimpleButton,
  NavButtonsContainer,
} from '../styles'
import NavLogout from './DropDownMenu/NavLogout'
import Avatar from './Avatar'

function NavButtons() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const avatar = useSelector((state) => state.user.user.avatar)

  return (
    <NavButtonsContainer>
      {isLoggedIn ? (
        <>
          <Avatar avatar={avatar} />
          {/* <NavLogout /> */}
        </>
      ) : (
        <LinkLikeSimpleButton to="/login">Sign In</LinkLikeSimpleButton>
      )}

      <LinkLikeAccentButton to="/new-report">
        Add Report
      </LinkLikeAccentButton>
    </NavButtonsContainer>
  )
}

export default NavButtons
