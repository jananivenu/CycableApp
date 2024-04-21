import { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import LocationMarker from './LocationMarker'
import { StyledH3 } from '../../../../../styles/elements/typography'

function LocationPicker() {
  const [location, setLocation] = useState(null)
  const [isLocationLoaded, setIsLocationLoaded] = useState(false)
  const [address, setAddress] = useState('')
  const mapRef = useRef(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
          setIsLocationLoaded(true)
        },
        (error) => {
          console.error('Error fetching the location: ', error)
          setIsLocationLoaded(true)
        },
        { enableHighAccuracy: true },
      )
    }
  }, [])

  return (
    <div>
      <StyledH3>Where?</StyledH3>

      {isLocationLoaded && (
        <MapContainer
          center={[location.latitude, location.longitude]}
          zoom={13}
          style={{ height: '400px', width: '100%' }}
          whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationMarker setLocation={setLocation} setAddress={setAddress} />
        </MapContainer>
      )}

      <input
        id="location"
        placeholder="Click here to select the location"
        value={location ? `${location.latitude}, ${location.longitude}` : ''}
        readOnly
        required
      />
      <p>If possible, enter the street name</p>
      <input
        id="address"
        placeholder="Street name"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
  )
}

export default LocationPicker
