import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchReportsAsync } from '../../../store/slices/reportsSlice'
import { fetchCommentsAsync } from '../../../store/slices/commentsSlice'
import CommentList from '../../../components/Reports/CommentList'
import ReportPage from '../../../components/Reports/ReportPage'
import { MainContainer } from '../../../styles'

const ShowReport = () => {
  const { reportId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if (reportId) {
      dispatch(fetchReportsAsync(reportId))
      dispatch(fetchCommentsAsync(reportId))
    }
  }, [dispatch, reportId])

  const report = useSelector((state) => state.reports.currentReport)
  const comments = useSelector((state) => state.comments.comments)
  const status = useSelector((state) => state.reports.status)
  const error = useSelector((state) => state.reports.error)
  const commentsStatus = useSelector((state) => state.comments.status)
  const commentsError = useSelector((state) => state.comments.error)

  if (status === 'loading') {
    return <p>Loading report...</p>
  }

  if (error) {
    return <p>An error occurred while fetching the report: {error}</p>
  }

  if (!report) {
    return <p>Report not found!</p>
  }

  return (
    <MainContainer>
      <ReportPage report={report} />
      <CommentList
        comments={comments}
        status={commentsStatus}
        error={commentsError}
      />
    </MainContainer>
  )
}

export default ShowReport
