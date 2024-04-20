import SocialIcon from './SocialIcon'
import { SocialIconsListContainer } from './styles'

function SocialIconsList() {
  const socialNetworks = [
    { iconName: 'FaSquareFacebook', url: 'https://www.facebook.com' },
    { iconName: 'FaXTwitter', url: 'https://twitter.com' },
    { iconName: 'FaInstagram', url: 'https://www.instagram.com' },
    { iconName: 'FaLinkedinIn', url: 'https://www.linkedin.com' },
    { iconName: 'FaGitlab', url: '' },
  ]

  return (
    <div>
      <SocialIconsListContainer>
        {socialNetworks.map((network, index) => (
          <SocialIcon
            key={index}
            iconName={network.iconName}
            url={network.url}
          />
        ))}
      </SocialIconsListContainer>
    </div>
  )
}

export default SocialIconsList
