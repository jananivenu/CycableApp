import styled from 'styled-components'

export const SelectorWrappen = styled.div`
  max-width: max-content;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`
