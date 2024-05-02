import { LeadParagraph, StyledH2 } from '../../../styles/elements/typography'

import coverBg from '../../../assets/photos/map.png'
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
import ReportType from './Elements/ReportType'
import Gallery from './Gallery'
import { useState } from 'react'
import { generatePDF } from './Elements/ReportToPDF'
import DeleteReport from './Elements/DeleteReport'
import { ReportButtons } from './Elements/styles'
import { TbFileTypePdf } from 'react-icons/tb'

const ReportPage = ({ report }) => {
  const {
    address,
    author,
    description,
    custom_date,
    latitude,
    longitude,
    incident_type,
    images,
  } = report

  console.log('the type of this report is : ', incident_type)
  console.log(report)

  const date = formatDate(custom_date)
  const [showGallery, setShowGallery] = useState(false)

  const hasImages = Array.isArray(images) && images.length > 0

  const handleGeneratePDF = () => generatePDF(report)
  const handleDeleteSuccess = () => {
    navigate('/profile/me') // Navigate to profile/me page after successful deletion
  }

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
          <ReportType type={incident_type} />
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
          <ReportButtons>
            <SquareButton onClick={handleGeneratePDF}>
              <TbFileTypePdf /> Download PDF
            </SquareButton>
            <DeleteReport
              reportId={report.id}
              onSuccess={handleDeleteSuccess}
            />
          </ReportButtons>
        </ReportContent>
      </ReportGridContainer>
    </>
  )
}

export default ReportPage
