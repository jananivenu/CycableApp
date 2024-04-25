import { LeadParagraph, StyledH2 } from '../../../styles/elements/typography'

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
import ReportCoverMap from './Elements/ReportCoverMap'
import ReportAuthor from './Elements/ReportAuthor'

const ReportPage = ({ report }) => {
  const { address, author, description, custom_date, latitude, longitude } =
    report
  const date = formatDate(custom_date)

  return (
    <>
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
        <ReportPicture className="report-picture" src={photo} />
        {/* When we can include the user-uploaded image, uncomment the line below and replace 'report.image' with the actual property where the image is stored */}
        {/* <ReportPicture className="report-picture" src={URL.createObjectURL(report.image)} /> */}
        <ReportContent>
          <LeadParagraph>
            {description} <ReportAuthor author={author} />
          </LeadParagraph>
        </ReportContent>
      </ReportGridContainer>
    </>
  )
}

export default ReportPage
