import { AuthorLink, AuthorNameWrapper } from './styles'
import avatar from '../../../../assets/icons/user-c.png'

function ReportAuthor({ author }) {
  const authorName =
    author.first_name && author.last_name
      ? `${author.first_name} ${author.last_name}`
      : author.username

  const authorPhoto = author.photo ? author.photo : avatar
  const userId = 1

  return (
    <AuthorNameWrapper>
      — <AuthorLink to={`/user/${userId}`}>{authorName}</AuthorLink>
            <img
        src={authorPhoto}
        alt={author.username}
        style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%' }}
      />
    </AuthorNameWrapper>
  )
}

export default ReportAuthor