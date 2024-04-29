import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const DropdownMenuContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--gray-300);
  /* border: 1px solid var(--gray-500); */
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
  display: flex;
  flex-direction: column;
`

export const DropdownMenuItem = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem 1rem;

  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  color: black;

  border-radius: 10px;

  &:hover {
    background-color: var(--gray-100);
  }
`

export const LogoutButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  padding: 0.6rem 1rem;
  background-color: transparent;
  border-radius: 10px;
  border: 0;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  color: var(--accent-red);

  &:hover {
    background-color: var(--gray-100);
  }
`