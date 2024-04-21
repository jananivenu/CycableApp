import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MainContainer, SectionContainer } from '../../../styles';
import {
  LeadParagraph,
  StyledH2,
  StyledH3,
} from '../../../styles/elements/typography';

import coverBg from '../../../assets/photos/map.png';
import photo from '../../../assets/photos/sample.png';
import { ReportGridContainer, ReportInfo } from '../styles';
import CommentList from '../CommentList';
import { fetchReportsAsync, selectReportById } from '../../../store/slices/reportsSlice';


const ReportPage = () => {
  const { reportId } = useParams(); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (reportId) {
      console.log(reportId)
      dispatch(fetchReportsAsync(reportId));
    }
  }, [dispatch, reportId]);

  const report = useSelector(state => selectReportById(state, reportId));
  const status = useSelector(state => state.reports.status);
  const error = useSelector(state => state.reports.error);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error}</p>;
  }

  if (!report) {
    return <p>Report not found!</p>;
  }

  const { address, date, description } = report;

  return (
    <MainContainer>
      <ReportGridContainer>
        <ReportInfo>
          <CaseBodyContainer>
            <CaseRow type="pin" content={address} />
            <CaseRow type="calendar" content={date} />
          </CaseBodyContainer>
          <StyledH2>Bicycle Accident</StyledH2>
        </ReportInfo>
        <ReportPicture src={photo} />
        <ReportContent>
          <LeadParagraph>{description}</LeadParagraph>
        </ReportContent>
      </ReportGridContainer>
      <SectionContainer>
        <StyledH3>Comments</StyledH3>
        <CommentList />
      </SectionContainer>
    </MainContainer>
  );
};

export default ReportPage;