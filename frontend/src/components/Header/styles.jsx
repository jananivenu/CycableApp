import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  gap: 3rem;
  height: 4.7rem;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1rem;
    gap: 1rem;
  }
`

export const NavLinksContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 0.7rem;
  height: 100%;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  border-radius: 3rem;
  color: var(--gray-900);

  &:focus-visible {
    outline: 2px solid var(--accent-blue);
  }
`

export const BaseLinkLikeButton = styled(NavLink)`
  min-width: max-content;
  padding: 0.6rem 1.8rem;
  border-radius: 3rem;
  cursor: pointer;

  font-size: 1rem;
  font-family: var(--main-font);

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  &:focus-visible {
    outline: 2px solid var(--accent-blue);
  }
`

export const LinkLikeAccentButton = styled(BaseLinkLikeButton)`
  color: white;
  background-color: var(--accent-main);
  border: 0;

  @media (max-width: 480px) {
    padding: 0.6rem 1.2rem;
  }
`

export const LinkLikeSimpleButton = styled(BaseLinkLikeButton)`
  background-color: transparent;
  border: 1px solid var(--accent-main);
  color: var(--accent-main);

  @media (max-width: 480px) {
    display: none;
  }
`

export const LinkLikeSimpleButtonMobile = styled(LinkLikeSimpleButton)`
  display: none;

  @media (max-width: 480px) {

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    padding: 0.6rem;
    aspect-ratio: 1/1 !important;
  }
`
