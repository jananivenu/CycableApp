import styled from 'styled-components'

export const TeamPhoto = styled.img`
  width: 50rem;
  height: 30rem;
  max-width: 1240px;

  @media (max-width: 768px) {
    width: 30rem;
    height: 20rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1.5rem;
    width: 27rem;
    height: 20rem;
  }
`
