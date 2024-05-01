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
import { SquareButton } from '../../../styles/elements/buttons'
import { CaseBodyContainer } from '../../../components/CasePreview/styles'
import CaseRow from '../../../components/CasePreview/Elements/CaseRow'
import { formatDate } from '../../../utils/formatDate'
import ReportCoverMap from './Elements/ReportCoverMap'
import ReportAuthor from './Elements/ReportAuthor'
import Gallery from './Gallery'
import { useState } from 'react'
import { generatePDF } from '../../../routes/Reports/ReportToPDF'

const ReportPage = ({ report }) => {
  const {
    address,
    author,
    description,
    custom_date,
    latitude,
    longitude,
    images,
  } = report
  console.log(report)
  const date = formatDate(custom_date)
  const [showGallery, setShowGallery] = useState(false)

  const hasImages = Array.isArray(images) && images.length > 0

  const handleGeneratePDF = () => generatePDF(report)

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
        {hasImages &&
          images.map((image, index) => (
            <ReportPicture
              key={index}
              className="report-picture"
              src={image.images}
              onClick={() => setShowGallery(true)}
            />
          ))}{' '}

        {/* When we can include the user-uploaded image, uncomment the line below and replace 'report.image' with the actual property where the image is stored */}
        {/* <ReportPicture className="report-picture" src={URL.createObjectURL(report.image)} /> */}
        <Gallery
          images={report.images}
          showGallery={showGallery}
          setShowGallery={setShowGallery}
        />
        <ReportContent>
          <LeadParagraph>
            {description} <ReportAuthor author={author} />
          </LeadParagraph>
          <SquareButton
            onClick={handleGeneratePDF}
            disabled={status === 'loading'}
          >
            Download PDF
          </SquareButton>
        </ReportContent>
      </ReportGridContainer>
    </>
  )
}

export default ReportPage
