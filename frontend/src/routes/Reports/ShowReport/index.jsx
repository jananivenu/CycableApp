import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchReportsAsync } from '../../../store/slices/reportsSlice'
import ReportPage from '../../../components/Reports/ReportPage'
import Comments from '../../../components/Reports/Comments'
import { MainContainer } from '../../../styles'
import AnimatedBikeLoading from '../../../components/trivias/Loading'

const ShowReport = () => {
  const { reportId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (reportId) {
      dispatch(fetchReportsAsync(reportId));
    }
  }, [dispatch, reportId]);

  const report = useSelector((state) => state.reports.currentReport);
  const status = useSelector((state) => state.reports.status);
  const error = useSelector((state) => state.reports.error);

  if (status === 'loading') {
    return <AnimatedBikeLoading />;
  }

  if (error) {
    return <p>An error occurred while fetching the report: {error}</p>;
  }

  if (!report) {
    return <p>Report not found!</p>;
  }

  return (
    <MainContainer>
      <ReportPage report={report} />
      <Comments />
    </MainContainer>
  )
}

export default ShowReport;