import userIcon from '../../../../../assets/icons/account.png'
import commentIcon from '../../../../../assets/icons/comment.png'
import pinIcon from '../../../../../assets/icons/pin.png'
import calendarIcon from '../../../../../assets/icons/calendar.png'
import { IconImg, IconWrapper } from './styles'


const icons = {
  user: userIcon,
  comment: commentIcon,
  pin: pinIcon,
  calendar: calendarIcon,
}

const MapReportIcon = ({ type }) => {
  const iconSrc = icons[type]
  if (!iconSrc) {
    return null
  }
  return (
    <IconWrapper>
      <IconImg src={iconSrc} />
    </IconWrapper>
  )
}

export default MapReportIcon
