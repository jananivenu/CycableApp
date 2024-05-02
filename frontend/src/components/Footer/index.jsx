import {
  AirContainer,
  Copyright,
  FooterContainer,
  FooterCopyright,
  FooterLogoGroup,
  FooterMainContainer,
  HeartWrapper,
} from './styles'
import SocialIconsList from './Elements/Icons/SocialIconsList'
import FooterNavLinks from './Elements/Links/FooterNavLinks'
import FooterLegalLinks from './Elements/Links/FooterLegalLinks'
import { FaRegHeart } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
      <AirContainer />
      <FooterContainer>
        <FooterMainContainer>
          <FooterLogoGroup>
            <h3>Cycable</h3>
            "From Your Stories to Safer Streets"
          </FooterLogoGroup>
          <SocialIconsList />

          <FooterNavLinks />
          <FooterLegalLinks />
        </FooterMainContainer>

        <FooterCopyright>
          <Copyright>
            Made with
            <HeartWrapper>
              <FaRegHeart />
            </HeartWrapper>
            in Constructor Academy. © 2024
          </Copyright>
          {/* ❤️ */}
        </FooterCopyright>
      </FooterContainer>
    </>
  )
}

export default Footer
