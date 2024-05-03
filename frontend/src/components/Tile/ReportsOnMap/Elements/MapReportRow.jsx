import MapReportIcon from './MapReportIcon'
import { ReportPreviewRow } from './styles'

function MapReportRow({ type, content }) {
  return (
    <ReportPreviewRow>
      <MapReportIcon type={type} />
      <div>{content}</div>
    </ReportPreviewRow>
  )
}

export default MapReportRow
