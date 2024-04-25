import { useDispatch, useSelector } from 'react-redux'
import CaseReport from '../../CasePreview/CaseReport'
import MasonryContainer from '../../wrappers/MasonryContainer'
import { useEffect } from 'react'
import { fetchReportsByUserIdAsync } from '../../../store/slices/reportsSlice'
import AnimatedBikeLoading from '../../trivias/Loading'

// eslint-disable-next-line react/prop-types
function ReportList({ userId }) {
  const dispatch = useDispatch()
  const reports = useSelector((state) => state.reports.reports)
  const status = useSelector((state) => state.reports.status)
  const error = useSelector((state) => state.reports.error)

  useEffect(() => {
    dispatch(fetchReportsByUserIdAsync(userId))
  }, [dispatch, userId])

  if (status === 'loading') {
    return <AnimatedBikeLoading />
  }

  if (error) {
    return <p>Error loading reports: {error}</p>
  }

  return (
    <MasonryContainer>
      {reports.length > 0 ? (
        reports.map((report) => (
          <CaseReport
            key={report.id}
            userName={report.userName}
            comment={report.comment}
            address={report.address}
            date={report.date}
            type={report.type}
          />
        ))
      ) : (
        <p>No reports found.</p>
      )}
    </MasonryContainer>
  )
}

export default ReportList
