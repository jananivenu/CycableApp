import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FooterLinks = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  grid-area: links;

  @media (max-width: 480px) {
    max-width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    /* gap: 1rem; */
  }
`
export const IconWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;

  @media (max-width: 480px) {
    opacity: 1;
    visibility: visible;
  }
`

export const FooterLink = styled(Link)`
  color: #000;
  transition: color 0.3s ease;

  display: inline-flex;
  align-items: center;

  margin: 0 0.5rem;

  &:hover {
    color: var(--accent-main);

    ${IconWrapper} {
      opacity: 1;
      visibility: visible;
    }
  }
`

export const SmallerFooterLinks = styled(FooterLinks)`
  grid-template-columns: 1fr;
  gap: 0.3rem;

  font-size: 0.8rem;

  grid-area: legal;

  @media (max-width: 480px) {
    max-width: 70%;

    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    flex-wrap: wrap;

    /* gap: 1rem; */
  }
`
