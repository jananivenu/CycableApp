import { MainContainer, SectionContainer } from '../../../styles'
import {
  LeadParagraph,
  StyledH2,
  StyledH3,
} from '../../../styles/elements/typography'

import coverBg from '../../../assets/photos/map.png'
import photo from '../../../assets/photos/sample.png'
import {
  ReportContent,
  ReportCover,
  ReportGridContainer,
  ReportInfo,
  ReportPicture,
} from './styles'
import { CaseBodyContainer } from '../../../components/CasePreview/styles'
import CaseRow from '../../../components/CasePreview/Elements/CaseRow'
import { formatDate } from '../../../utils/formatDate'
import CommentList from '../CommentList'
import ReportCoverMap from './Elements/ReportCoverMap'
import ReportAuthor from './Elements/ReportAuthor'

const ReportPage = ({ report }) => {
  const { address, author, description, created_at, custom_date, latitude, longitude } =
    report
  const date = formatDate(custom_date)

  return (
    <MainContainer>
      <ReportCover img={coverBg}>
        <ReportCoverMap latitude={latitude} longitude={longitude} />
      </ReportCover>
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
          <LeadParagraph>
            {description} <ReportAuthor author={author} />
          </LeadParagraph>
        </ReportContent>
      </ReportGridContainer>
      <SectionContainer>
        <StyledH3>Comments</StyledH3>
        <CommentList />
      </SectionContainer>
    </MainContainer>
  )
}

export default ReportPage
