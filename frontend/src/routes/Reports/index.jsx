import { MainContainer, SectionContainer } from '../../styles'
import {
  LeadParagraph,
  StyledH2,
  StyledH3,
} from '../../styles/elements/typography'
// import CommentList from './CommentList'
import {
  ReportContent,
  ReportCover,
  ReportGridContainer,
  ReportInfo,
  ReportPicture,
} from './styles'

import coverBg from '../../assets/photos/map.png'
import photo from '../../assets/photos/sample.png'
import CaseRow from '../../components/CasePreview/Elements/CaseRow'
import { CaseBodyContainer } from '../../components/CasePreview/styles'

const Reports = () => {

  return (
    <MainContainer>
      <ReportCover img={coverBg} />
      <ReportGridContainer>
        <ReportInfo>
          <CaseBodyContainer>
            {/* <CaseRow type="pin" content={address} />
            <CaseRow type="calendar" content={date} /> */}
            <CaseRow type="pin" content="Maximilianstraße 16" />
            <CaseRow type="calendar" content="16.01.2024" />
          </CaseBodyContainer>
          <StyledH2>Bicycle Accident</StyledH2>
        </ReportInfo>
        <ReportPicture src={photo} />
        <ReportContent>
          <LeadParagraph>
            Today, while riding on Maximilianstraße, a car suddenly pulled out
            from a side street without looking, causing a collision.
            Fortunately, there were no injuries, but the incident left me
            shaken. The car did not stop, and no police were called. We
            desperately need better enforcement of traffic laws to protect
            cyclists, especially at less visible intersections.
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

export default Reports
