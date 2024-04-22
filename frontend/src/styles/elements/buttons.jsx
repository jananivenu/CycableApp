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
`

export const AccentButton = styled(BaseButton)`
  color: white;
  background-color: var(--accent-main);
  border: 0;

  @media (max-width: 480px) {
    display: ${props => props.hide ? 'none' : 'inline-block'};
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
