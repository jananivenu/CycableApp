import truncateText from '../../../utils/useTruncate'
import { formatDate } from '../../../utils/formatDate'
import { MapReportContainer } from './styles'
import MapReportHeader from './Elements/MapReportHeader'
import MapReportFooter from './Elements/MapReportFooter'
import MapReportRow from './Elements/MapReportRow'
import MapReportImg from './Elements/MapReportImg'

function CaseReportMap({ report }) {
  const { id, address, description, created_at, incident_type, images } = report

  const truncatedComment = truncateText(description, 200)
  const date = formatDate(created_at)

  console.log(images)

  return (
    <MapReportContainer>
      <MapReportHeader type={incident_type} />
      <MapReportImg images={images} />
      <MapReportRow type="pin" content={address} />
      <MapReportRow type="comment" content={truncatedComment} />
      <MapReportRow type="calendar" content={date} />
      <MapReportFooter id={id} />
    </MapReportContainer>
  )
}

export default CaseReportMap
