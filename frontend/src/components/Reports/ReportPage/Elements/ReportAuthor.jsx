import { AuthorAvatar, AuthorLink, AuthorNameWrapper } from './styles'
import avatar from '../../../../assets/icons/user-l-m.png'
import { formatUserName } from '../../../../utils/formatUserName'
import { useSelector } from 'react-redux'

function ReportAuthor({ author }) {
  const currentUserId = useSelector((state) => state.user.user.id)
  const authorName = formatUserName(author)
  const authorAvatar = author.avatar ? author.avatar : avatar

  return (
    <AuthorNameWrapper>
      {currentUserId === author.id ? (
        <AuthorLink to={'/profile/me'}>— {authorName}</AuthorLink>
      ) : (
        <AuthorLink to={`/profile/${author.id}`}>— {authorName}</AuthorLink>
      )}

      <AuthorAvatar src={authorAvatar} alt={author.username} />
    </AuthorNameWrapper>
  )
}

export default ReportAuthor
