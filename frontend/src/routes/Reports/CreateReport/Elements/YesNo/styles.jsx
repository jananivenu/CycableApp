import styled from 'styled-components'
import { BaseButton } from '../../../../../styles/elements/buttons'

export const YesButton = styled(BaseButton)`
  border-radius: 10px;
  border-top-left-radius: 0;
  padding: 0.5rem 2rem;

  font-family: var(--main-font);
  font-size: 1rem;
  line-height: 1.2;

  border: 2px solid
    ${(props) => (props.selected ? 'var(--accent-main)' : 'transparent')};

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: 2px solid var(--accent-blue);
  }

  &:hover {
    border: 2px solid var(--gray-500);
  }
`

export const NoButton = styled(BaseButton)`
  border-radius: 10px;
  border-top-left-radius: 0;
  padding: 0.5rem 2rem;

  font-family: var(--main-font);
  font-size: 1rem;
  line-height: 1;

  border: 2px solid
    ${(props) => (props.selected ? 'var(--accent-red)' : 'transparent')};

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: 2px solid var(--accent-blue);
  }
  &:hover {
    border: 2px solid var(--gray-500);
  }
`
