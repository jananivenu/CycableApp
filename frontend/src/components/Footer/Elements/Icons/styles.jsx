import styled from 'styled-components'

export const SocialIconsListContainer = styled.div`
  max-width: max-content;

  display: flex;
  justify-content: space-around;
  gap: 0.5rem;

  grid-area: social;
`

export const IconLink = styled.a`
  font-size: 1rem;
  line-height: 1;
  color: #000;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-main);
  }
`

export const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: 2px solid var(--gray-100);
  aspect-ratio: 1/1;

  padding: 0.5rem;
`
