import { useDispatch, useSelector } from 'react-redux'
import CaseReport from '../../CasePreview/CaseReport'
import MasonryContainer from '../../wrappers/MasonryContainer'
import { useEffect } from 'react'
import { fetchReportsByUserIdAsync } from '../../../store/slices/reportsSlice'
import AnimatedBikeLoading from '../../trivias/Loading'
import NotFound from '../../../routes/NotFound'

// eslint-disable-next-line react/prop-types
function UserReportList({ userId }) {
  const dispatch = useDispatch()
  const reports = useSelector((state) => state.reports.userReports)
  const status = useSelector((state) => state.reports.status)
  const error = useSelector((state) => state.reports.error)

  useEffect(() => {
    dispatch(fetchReportsByUserIdAsync(userId))
  }, [dispatch, userId])

  // if (!reports) {
  //   return <AnimatedBikeLoading />
  // }

  // if (reports.length === 0) {
  //   return <p>No reports yet.</p>
  // }
  if (status === 'loading') {
    return <AnimatedBikeLoading />
  }

  if (error) {
    return <p>An error occurred while fetching the report: {error}</p>
  }

  if (!reports) {
    return <NotFound />
  }

  return (
    <MasonryContainer>
      {reports.map((report) => (
        <CaseReport
          key={report.id}
          id={report.id}
          userName={report.userName}
          comment={report.description}
          address={report.address}
          date={report.custom_date}
          type={report.incident_type}
        />
      ))}
    </MasonryContainer>
  )
}

export default UserReportList
