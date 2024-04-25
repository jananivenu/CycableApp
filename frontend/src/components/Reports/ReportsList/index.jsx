import { useNavigate } from 'react-router-dom'
import MasonryContainer from '../../wrappers/MasonryContainer'
import CaseReport from '../../CasePreview/CaseReport'

const ReportsList = ({ reports }) => {
  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/reports/${id}`)
  }

  return (
    <MasonryContainer>
      {reports.map((report) => (
        <CaseReport
          key={report.id}
          id={report.id}
          userName={report.author.username}
          comment={report.description}
          address={report.address}
          date={report.custom_date}
          type={report.incident_type}
        />
      ))}
    </MasonryContainer>
  )
}

export default ReportsList
