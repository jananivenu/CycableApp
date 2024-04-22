import { useState } from 'react'
import { Marker, useMapEvents, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function LocationMarker({ setLocation, setAddress }) {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng
      setPosition(e.latlng)
      setLocation({ latitude: lat, longitude: lng })
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=en`,
      )
        .then((response) => response.json())
        .then((data) => {
          const addressParts = data.address
          const formattedAddress = `${addressParts.house_number || ''} ${addressParts.road || ''}, ${addressParts.city || addressParts.town || addressParts.village}`
          setAddress(formattedAddress.trim())
        })
        .catch((err) => {
          console.error('Error fetching address:', err)
        })
    },
  })

  return position ? (
    <Marker position={position}>
      <Popup>A simple popup</Popup>
    </Marker>
  ) : null
}

export default LocationMarker
