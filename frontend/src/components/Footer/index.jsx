import {
  AirContainer,
  Copyright,
  FooterContainer,
  FooterCopyright,
  FooterLogoGroup,
  FooterMainContainer,
} from './styles'
import SocialIconsList from './Elements/Icons/SocialIconsList'
import FooterNavLinks from './Elements/Links/FooterNavLinks'
import FooterLegalLinks from './Elements/Links/FooterLegalLinks'

const Footer = () => {
  return (
    <>
      <AirContainer />
      <FooterContainer>
        <FooterMainContainer>
          <FooterLogoGroup>
            <h3>Cycable</h3>
            "Join the Movement for Safer Cycling" or "From Your Stories to Safer
            Streets"
          </FooterLogoGroup>
          <SocialIconsList />

          <FooterNavLinks />
          <FooterLegalLinks />
        </FooterMainContainer>

        <FooterCopyright>
          <Copyright>Made with ❤️ in Constructor Academy. © 2024</Copyright>
        </FooterCopyright>
      </FooterContainer>
    </>
  )
}

export default Footer
