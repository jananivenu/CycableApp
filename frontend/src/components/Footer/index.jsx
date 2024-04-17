import React from 'react'
import { Copyright, FooterContainer, FooterCopyright, FooterMainContainer } from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterMainContainer>
        <h3>Cycable</h3>
      </FooterMainContainer>
      <FooterCopyright>
        <Copyright>Made with ❤️ in Constructor Academy. © 2024</Copyright>
      </FooterCopyright>
    </FooterContainer>
  )
}

export default Footer
