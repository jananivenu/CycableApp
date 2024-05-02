import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LeadParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;

  margin-bottom: 2rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

export const StyledH2 = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 2rem 0 1rem 0;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`
export const StyledH3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 2rem 0 1rem 0;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`

export const NotaBene = styled.p`
  margin-top: 1.5rem;
  font-size: 0.8rem;
  line-height: 1.5;
`

export const StyledA = styled.a`
  font-weight: 600;
  text-decoration: none;
  color: black;

  &:hover {
    color: var(--accent-main);
  }
`

export const StyledLink = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: black;

  &:hover {
    color: var(--accent-main);
  }
`
