import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchReportsAsync } from '../../../store/slices/reportsSlice';

import ReportPage from '../../../components/Reports/ReportPage';


const ShowReport = () => {
  const { reportId } = useParams(); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (reportId) {
      console.log(reportId)
      dispatch(fetchReportsAsync(reportId));
    }
  }, [dispatch, reportId]);

  const report = useSelector(state => state.reports.currentReport);
  const status = useSelector(state => state.reports.status);
  const error = useSelector(state => state.reports.error);

  console.log(report)

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error}</p>;
  }

  if (!report) {
    return <p>Report not found!</p>;
  }

  return (
    <ReportPage report={report} />
  );
};

export default ShowReport;