import { FaCircleChevronDown } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const LogoLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
  }
`

export const AvatarContainer = styled.div`
  position: relative;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const AvatarImage = styled.img`
  max-height: 100%;
  aspect-ratio: 1/1;
`

export const DropdownButton = styled(FaCircleChevronDown)`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 1rem;
  color: var(--accent-main);
  cursor: pointer;
`
