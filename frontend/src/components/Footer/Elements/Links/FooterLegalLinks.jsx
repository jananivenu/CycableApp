import { FooterLink, FooterLinks, SmallerFooterLinks } from './styles'

function FooterLegalLinks() {
  const links = [
    { to: '/', text: 'Legal Information' },
    { to: '/', text: 'Terms and conditions' },
    { to: '/', text: 'Privacy Policy' },
  ]

  return (
    <SmallerFooterLinks>
      {links.map((link, index) => (
        <div>
          <FooterLink key={index} to={link.to}>
            {link.text}
          </FooterLink>
        </div>
      ))}
    </SmallerFooterLinks>
  )
}

export default FooterLegalLinks
