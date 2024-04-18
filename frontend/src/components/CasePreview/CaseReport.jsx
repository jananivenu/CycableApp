import { CaseBodyContainer } from './styles'
import { ArticleReport } from '../../styles/elements/articles'

import CaseRow from './Elements/CaseRow'

import truncateText from '../../utils/useTruncate'

function CaseReport({ address, date, comment, type }) {
  const truncatedComment = truncateText(comment, 200)

  return (
    <ArticleReport type={type}>
      <CaseBodyContainer>
        <CaseRow type="pin" content={address} />
        <CaseRow type="calendar" content={date} />
        <CaseRow type="comment" content={truncatedComment} />
      </CaseBodyContainer>
    </ArticleReport>
  )
}

export default CaseReport
