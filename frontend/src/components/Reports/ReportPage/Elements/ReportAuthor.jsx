import { AuthorAvatar, AuthorLink, AuthorNameWrapper } from './styles'
import avatar from '../../../../assets/icons/user-l-m.png'
import { formatUserName } from '../../../../utils/formatUserName'

function ReportAuthor({ author }) {
  const authorName = formatUserName(author)
  const authorAvatar = author.avatar ? author.avatar : avatar

  return (
    <AuthorNameWrapper>
      <AuthorLink to={`/profile/${author.id}`}>— {authorName}</AuthorLink>
      <AuthorAvatar src={authorAvatar} alt={author.username} />
    </AuthorNameWrapper>
  )
}

export default ReportAuthor
