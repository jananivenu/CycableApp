import incidentTypeToColor from '../../../../utils/replaceTypeByColor'
import { ReportPreviewHreader } from './styles'
import { CgCloseO } from 'react-icons/cg'

const incidentTypes = [
  { key: 'bicycle_accident', name: 'Bicycle Accident' },
  { key: 'bicycle_theft', name: 'Bicycle Theft' },
  { key: 'near_miss', name: 'Near Miss' },
  { key: 'violations', name: 'Legalize "Violation"' },
]

function MapReportHeader({ type, onClose }) {
  const typeColor = incidentTypeToColor(type)
  const incident = incidentTypes.find((incident) => incident.key === type)
  const typeName = incident ? incident.name : 'Unknown'

  return (
    <ReportPreviewHreader type={typeColor}>
      <div>{typeName}</div>
      <button className="close-button" onClick={onClose}>
        <CgCloseO />
      </button>
    </ReportPreviewHreader>
  )
}

export default MapReportHeader
