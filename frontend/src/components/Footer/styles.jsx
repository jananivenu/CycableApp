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
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 788px) {
    padding: 1rem 2rem;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 500px) {
    padding: 1rem 1rem;
  }
`

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  @media (max-width: 788px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`

export const FooterSocial = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 788px) {
    margin: 0 auto;
    flex-wrap: wrap;
  }
`

export const FooterSocialButton = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 3rem;
  border: 1px solid #666;
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  &:hover {
    cursor: pointer;
    border: 1px solid var(--orange);
    background-color: var(--gray);
    color: var(--orange);
  }
`

export const FooterCopyright = styled.div`
  max-width: 1240px;

  width: 100%;
  padding: 0.5rem 3rem 1rem 3rem;
  border-top: 1px solid white;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 788px) {
    padding: 1rem 2rem;
    justify-content: space-around;
  }

  @media (max-width: 500px) {
    padding: 1rem 1rem;
  }
`

export const Copyright = styled.p`
  font-size: 0.9rem;
  color: #333;
`
