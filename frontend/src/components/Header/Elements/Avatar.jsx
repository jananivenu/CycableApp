import { useState, useEffect, useRef } from 'react'
import { AvatarContainer, AvatarImage, DropdownButton } from './styles'
import placeholder from '../../../assets/icons/user-cl.png'
import DropdownMenu from './DropDownMenu'

function Avatar({ avatar }) {
  const [isMenuVisible, setMenuVisible] = useState(false)
  const userAvatar = avatar ? avatar : placeholder
  const avatarRef = useRef(null)

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
        setMenuVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [avatarRef])

  return (
    <AvatarContainer ref={avatarRef} onClick={toggleMenu}>
      <AvatarImage src={userAvatar} alt="avatar" />
      <DropdownButton onClick={toggleMenu} />
      <DropdownMenu isVisible={isMenuVisible} />
    </AvatarContainer>
  )
}

export default Avatar
