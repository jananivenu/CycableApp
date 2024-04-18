import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  gap: 3rem;

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
  gap: 0.5rem;
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
