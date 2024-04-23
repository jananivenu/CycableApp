import styled from 'styled-components'

export const SquareRadioInput = styled.input`
  width: 1.4rem;
  height: 1.4rem;
  border: 50px solid #007bff;
  outline: none;
  border-radius: 0.2rem;
  cursor: pointer;

  &:checked {
    background-color: var(--accent-main);
  }

  &::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    background-color: transparent;
  }

  &:checked::before {
    color: var(--accent-main);
    font-size: 14px;
    text-align: center;
  }
`
