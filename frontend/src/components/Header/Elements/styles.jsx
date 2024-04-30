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
  aspect-ratio: 1/1 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid var(--accent-main);

  /* overflow: hidden; */
  cursor: pointer;
`

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  margin: 0 !important;
  object-fit: cover; 
`

export const DropdownButton = styled(FaCircleChevronDown)`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 1rem;
  color: var(--accent-main);
  background-color: white;
  border-radius: 50%;
`

