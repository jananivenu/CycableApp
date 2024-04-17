import { ArticleComment } from '../../styles/elements'
import { CaseBodyContainer } from './styles'
import CaseRow from './Elements/CaseRow'

function CaseComment({ userName, comment }) {
  return (
    <ArticleComment>
      <CaseBodyContainer>
        <CaseRow type="user" content={userName} />
        <CaseRow type="comment" content={comment} />
      </CaseBodyContainer>
    </ArticleComment>
  )
}

export default CaseComment