import { useDispatch, useSelector } from 'react-redux'
import CaseReport from '../../CasePreview/CaseReport'
import MasonryContainer from '../../wrappers/MasonryContainer'
import { useEffect } from 'react'
import { fetchReportsByUserIdAsync } from '../../../store/slices/reportsSlice'

function ReportList({ userId }) {

  const dispatch = useDispatch()
  const reports = useSelector((state) => state.reports.reports)
  const status = useSelector((state) => state.reports.status)
  const error = useSelector((state) => state.reports.error)

  useEffect(() => {
    dispatch(fetchReportsByUserIdAsync(userId))
  }, [dispatch])

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
