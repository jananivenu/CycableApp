import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchReportsAsync } from '../../../store/slices/reportsSlice'
import { fetchCommentsAsync } from '../../../store/slices/commentsSlice'
import CommentList from '../../../components/Reports/Comments/'
import ReportPage from '../../../components/Reports/ReportPage'
import { MainContainer } from '../../../styles'
import AnimatedBikeLoading from '../../../components/trivias/Loading'
import NotFound from '../../NotFound'
import DeleteReport from '../../../components/Reports/ReportPage/Elements/DeleteReport'

const ShowReport = () => {
  const { reportId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.user.user);

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

  const handleDeleteSuccess = () => {
    navigate('/profile/me') // Navigate to profile/me page after successful deletion
  }

  if (status === 'loading') {
    return <AnimatedBikeLoading />
  }

  if (error) {
    return <p>An error occurred while fetching the report: {error}</p>
  }

  if (!report) {
    return <NotFound />
  }

  return (
    <MainContainer>
      <ReportPage report={report} />
      {report.author.id === currentUser.id && (
        <DeleteReport reportId={reportId} onSuccess={handleDeleteSuccess} />
      )}

      <CommentList
        comments={comments}
        status={commentsStatus}
        error={commentsError}
      />
    </MainContainer>
  )
}

export default ShowReport
