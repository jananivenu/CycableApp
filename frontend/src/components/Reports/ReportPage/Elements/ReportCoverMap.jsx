import { MapContainer, Marker, TileLayer } from 'react-leaflet'

const MapCover = ({ latitude, longitude }) => {
  const position = [latitude, longitude]
  const zoomLevel = 16
  const offsetFraction = 0.2
  const longitudeOffset = (offsetFraction * 360) / Math.pow(2, zoomLevel)
  const offsetPosition = [latitude, longitude + longitudeOffset]

  return (
    <MapContainer
      center={offsetPosition}
      zoom={zoomLevel}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} />
    </MapContainer>
  )
}

const ReportCoverMap = ({ latitude, longitude }) => {
  return (
    <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
      <MapCover latitude={latitude} longitude={longitude} />
    </div>
  )
}

export default ReportCoverMap
