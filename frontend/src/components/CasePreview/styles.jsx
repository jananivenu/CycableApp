import styled from 'styled-components'

export const CaseBodyContainer = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  justify-content: flex-start;
  gap: 0.5rem 0;

  padding: 0 0.3rem 0 0;

  & > :nth-child(2) {
    font-weight: 900;
  }
`