import { Marker } from 'react-map-gl'
import { GoDotFill } from 'react-icons/go'

const colorMap = {
  bicycle_accident: '#EE4266',
  near_miss: '#FFB800',
  bicycle_theft: '#0075FF',
  violations: '#20B69E',
  default: 'black',
}

const MarkerComponent = ({ report, handleMarkerClick }) => {
  const { latitude, longitude, incident_type } = report

  return (
    <Marker latitude={latitude} longitude={longitude}>
      <GoDotFill
        onClick={() => report && handleMarkerClick(report)}
        style={{
          fontSize: 20,
          color: colorMap[incident_type],
          cursor: 'pointer',
        }}
      />
    </Marker>
  )
}

export default MarkerComponent
