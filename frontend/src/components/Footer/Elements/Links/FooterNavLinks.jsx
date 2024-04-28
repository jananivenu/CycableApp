import { FooterLink, FooterLinks, IconWrapper } from './styles'
import { RiRobot3Line } from 'react-icons/ri'

function FooterNavLinks() {
  const links = [
    { to: '/about', content: <>About</> },
    { to: '/statistics', content: <>Statistics</> },
    { to: '/', content: <>Press</> },
    { to: '/safety-tips', content: <>Safety Tips</> },
    {
      to: '/',
      content: (
        <>
          Telegram Bot
          <IconWrapper>
            <RiRobot3Line />
          </IconWrapper>
        </>
      ),
    },
  ]

  return (
    <FooterLinks>
      {links.map((link, index) => (
        <div key={index}>
          <FooterLink to={link.to}>
            {/* {link.text} */}
            {link.content}
          </FooterLink>
        </div>
      ))}
    </FooterLinks>
  )
}

export default FooterNavLinks
