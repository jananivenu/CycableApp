import { useNavigate } from 'react-router-dom'
import { CaseBodyContainer } from './styles'
import { ArticleReport } from '../../styles/elements/articles'

import CaseRow from './Elements/CaseRow'
import truncateText from '../../utils/useTruncate'
import incidentTypeToColor from '../../utils/replaceTypeByColor'

function CaseReport({ id, address, date, comment, type }) {
  const navigate = useNavigate()
  const truncatedComment = truncateText(comment, 200)
  const typeColor = incidentTypeToColor(type)

  const handleClick = () => {
    navigate(`/reports/${id}`)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate(`/reports/${id}`)
    }
  }

  return (
    <ArticleReport
      type={typeColor}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      style={{ cursor: 'pointer' }}
    >
      <CaseBodyContainer>
        <CaseRow type="pin" content={address} />
        <CaseRow type="calendar" content={date} />
        <CaseRow type="comment" content={truncatedComment} />
      </CaseBodyContainer>
    </ArticleReport>
  )
}

export default CaseReport
