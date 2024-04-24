import { CaseBodyContainer } from './styles'
import CaseRow from './Elements/CaseRow'
import { ArticleComment } from '../../styles/elements/articles'
import { formatUserName } from '../../utils/formatUserName'

function CaseComment({ author, text }) {
  const authorName = formatUserName(author)
  return (
    <ArticleComment>
      <CaseBodyContainer>
        <CaseRow type="user" content={authorName} />
        <CaseRow type="comment" content={text} />
      </CaseBodyContainer>
    </ArticleComment>
  )
}

export default CaseComment
