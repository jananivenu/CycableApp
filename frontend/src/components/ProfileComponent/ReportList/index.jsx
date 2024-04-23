import CaseReport from '../../CasePreview/CaseReport'
import MasonryContainer from '../../wrappers/MasonryContainer'

function ReportList({ reports }) {
  return (
    <MasonryContainer>
      {reports.map((report) => (
        <CaseReport
          key={report.id}
          userName={report.userName}
          comment={report.comment}
          address={report.address}
          date={report.date}
          type={report.type}
        />
      ))}
    </MasonryContainer>
  )
}

export default ReportList
