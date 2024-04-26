import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BaseButton = styled.button`
  min-width: max-content;
  padding: 0.6rem 1.8rem;
  border-radius: 3rem;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 500;
  font-family: var(--main-font);

  &:focus,
  &:focus-visible {
    outline: 2px solid var(--accent-blue);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--gray-500);
  }
`

export const AccentButton = styled(BaseButton)`
  color: white;
  background-color: var(--accent-main);
  border: 0;

  @media (max-width: 480px) {
    display: ${(props) => (props.hide ? 'none' : 'inline-block')};
  }
`

export const SimpleButton = styled(BaseButton)`
  background-color: transparent;
  border: 2px solid var(--accent-main);
  color: var(--accent-main);

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`

export const SquareButtonLink = styled(Link)`
  max-width: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem 0.8rem;

  border-radius: 6px;
  border: 2px solid transparent;
  background-color: var(--gray-100);

  color: black;
  font-weight: 500;
  /* font-size: 0.9rem; */
  line-height: 1;

  &:hover {
    color: white;
    background-color: var(--accent-main);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`

export const SquareButtonLinkDelete = styled(SquareButtonLink)`
  background-color: var(--accent-red-10);

  &:hover {
    color: white;
    background-color: var(--accent-red);
  }
`

export const SquareButton = styled.button`
  max-width: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem 0.8rem;

  border-radius: 6px;
  border: 2px solid transparent;
  background-color: var(--gray-300);

  color: black;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1;

  cursor: pointer;

  &:hover {
    color: white;
    background-color: var(--accent-main);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`

export const SquareButtonDelete = styled(SquareButton)`
  background-color: var(--accent-red-10);

  &:hover {
    color: white;
    background-color: var(--accent-red);
  }
`
