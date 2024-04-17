import styled from 'styled-components'

export const BaseButton = styled.button`
  min-width: max-content;
  padding: 0.6rem 1.8rem;
  border-radius: 3rem;
  cursor: pointer;

  font-size: 1rem;
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
`

export const SimpleButton = styled(BaseButton)`
  background-color: transparent;
  border: 1px solid var(--accent-main);
  color: var(--accent-main);
`
