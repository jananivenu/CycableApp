import { useSelector } from 'react-redux'
import { TbLogin2 } from 'react-icons/tb'

import {
  LinkLikeAccentButton,
  LinkLikeSimpleButton,
  LinkLikeSimpleButtonMobile,
  NavButtonsContainer,
} from '../styles'
import Avatar from './Avatar'

function NavButtons() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const avatar = useSelector((state) => state.user.user.avatar)

  return (
    <NavButtonsContainer>
      {isLoggedIn ? (
        <>
          <Avatar avatar={avatar} />
        </>
      ) : (
        <>
          <LinkLikeSimpleButton to="/login">Sign In</LinkLikeSimpleButton>
          <LinkLikeSimpleButtonMobile to="/login">
            <TbLogin2 />
          </LinkLikeSimpleButtonMobile>
        </>
      )}

      <LinkLikeAccentButton to="/new-report">Add Report</LinkLikeAccentButton>
    </NavButtonsContainer>
  )
}

export default NavButtons
