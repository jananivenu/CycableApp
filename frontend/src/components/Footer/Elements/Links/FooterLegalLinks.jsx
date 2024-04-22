import { FooterLink, FooterLinks, SmallerFooterLinks } from './styles'

function FooterLegalLinks() {
  const links = [
    { to: '/', text: 'Terms and conditions' },
    { to: '/', text: 'Legal Information' },
    { to: '/', text: 'Privacy Policy' },
  ]

  return (
    <SmallerFooterLinks>
      {links.map((link, index) => (
        <div key={index}>
          <FooterLink to={link.to}>
            {link.text}
          </FooterLink>
        </div>
      ))}
    </SmallerFooterLinks>
  )
}

export default FooterLegalLinks
