import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  gap: 3rem;

  @media (max-width: 788px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 500px) {
    padding: 1rem 1rem;
  }
`