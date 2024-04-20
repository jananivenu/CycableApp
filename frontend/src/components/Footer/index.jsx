import {
  Copyright,
  FooterContainer,
  FooterCopyright,
  FooterLogoGroup,
  FooterMainContainer,
} from './styles'
import SocialIconsList from './Elements/Icons/SocialIconsList'
import { Link } from 'react-router-dom'
import FooterNavLinks from './Elements/Links/FooterNavLinks'
import { SmallerFooterLinks } from './Elements/Links/styles'
import FooterLegalLinks from './Elements/Links/FooterLegalLinks'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterMainContainer>
        <FooterLogoGroup>
          <h3>Cycable</h3>
          Join the Movement for Safer Cycling / From Your Stories to Safer
          Streets
        </FooterLogoGroup>
        <SocialIconsList />

        <FooterNavLinks />
        <FooterLegalLinks />
      </FooterMainContainer>

      <FooterCopyright>
        <Copyright>Made with ❤️ in Constructor Academy. © 2024</Copyright>
      </FooterCopyright>
    </FooterContainer>
  )
}

export default Footer
