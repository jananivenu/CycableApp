import styled from 'styled-components'
import { StyledH3 } from './typography'

export const BasicForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  margin: 0 auto;

  @media (max-width: 480px) {
    max-width: 100%;
  }

  textarea,
  input {
    width: 100%;
    max-width: 100%;

    border: 1px solid var(--gray-700);
    border-radius: 10px;
    border-top-left-radius: 0;
    padding: 0.5rem;

    font-family: var(--main-font);
    font-size: 1rem;
    line-height: 1.2;

    &:focus,
    &:active {
      outline: 3px solid var(--accent-main);
      border: 1px solid transparent;
    }

    &::placeholder {
      color: var(--gray-500);
    }
  }
`

export const FormTwoColumn = styled(BasicForm)`
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  & > :last-child {
    grid-column: 1 / -1;
  }
`

export const QuestionGroup = styled.div`
  padding: 1rem;
  border-radius: 16px;
  transition: background-color 0.3s;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:focus-within {
    background-color: var(--gray-100);
  }

  ${StyledH3} {
    margin: 0;
    line-height: 1;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  label {
    font-size: 0.9rem;
    font-weight: 700;
  }
`
