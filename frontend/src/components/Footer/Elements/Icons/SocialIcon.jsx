import * as Icons from 'react-icons/fa6'
import { IconLink, IconWrapper } from './styles'

function SocialIcon({ iconName, url }) {
  const IconComponent = Icons[iconName]

  return (
    <IconLink href={url} target="_blank" rel="noopener noreferrer">
      <IconWrapper>
        <IconComponent />
      </IconWrapper>
    </IconLink>
  )
}

export default SocialIcon
