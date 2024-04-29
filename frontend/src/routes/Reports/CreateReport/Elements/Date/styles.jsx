import styled from 'styled-components'

export const StyledLabel = styled.label`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  gap: 0.5rem;
  min-width: max-content;

  margin-right: 2rem;

  input[type='checkbox'] {
    transform: scale(1.5); 
    cursor: pointer;
  }
`
