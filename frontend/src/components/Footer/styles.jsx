import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--gray-300);
`

export const FooterMainContainer = styled.div`
  max-width: 1240px;
  width: 100%;
  padding: 1rem 3rem;

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'logo links links'
    'logo links links'
    'social legal legal';
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 3fr 2fr;
    padding: 1rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1rem;
    grid-template-columns: 1fr;
    grid-template-areas:
      'logo'
      'links'
      'social'
      'legal';
    gap: 3rem;

    justify-items: center; 
    align-items: center;
  }
`
export const FooterLogoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  grid-area: logo;

  @media (max-width: 420px) {
    align-items: center;
    justify-content: space-around;
  }
`

export const FooterCopyright = styled.div`
  max-width: 1240px;

  width: 100%;
  padding: 0.5rem 3rem 1rem 3rem;
  border-top: 1px solid white;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 480px) {
    justify-content: space-around;
    padding: 1rem 1rem;
  }
`

export const Copyright = styled.p`
  font-size: 0.9rem;
  color: #333;
`
