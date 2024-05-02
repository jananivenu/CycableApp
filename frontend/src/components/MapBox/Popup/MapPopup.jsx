import { Popup } from 'react-map-gl'
import ReportOnMap from '../../Tile/ReportsOnMap'

const MapPopup = ({ report, onClose }) => {
  return (
    <Popup
      latitude={report.latitude}
      longitude={report.longitude}
      closeButton={false}
      closeOnClick={false}
      anchor="bottom"
    >
      <ReportOnMap report={report} onClose={onClose}></ReportOnMap>
    </Popup>
  )
}

export default MapPopup
