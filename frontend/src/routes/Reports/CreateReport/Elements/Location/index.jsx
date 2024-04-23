import { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import LocationMarker from './LocationMarker'
import { StyledH3 } from '../../../../../styles/elements/typography'
import { InputGroup, QuestionGroup } from '../../../../../styles/elements/forms'

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
    <QuestionGroup>
      <StyledH3>Where?</StyledH3>
      <p>Please select the location on the map</p>

      {isLocationLoaded && (
        <MapContainer
          center={[location.latitude, location.longitude]}
          zoom={13}
          style={{ height: '300px', width: '100%' }}
          whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationMarker setLocation={setLocation} setAddress={setAddress} />
        </MapContainer>
      )}
      <InputGroup>
        <label htmlFor="location">Coordinates from the map</label>
        <input
          id="location"
          placeholder="Click here to select the location"
          value={location ? `${location.latitude}, ${location.longitude}` : ''}
          readOnly
          required
          disabled
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="address">
          If necessary, please correct the address
        </label>
        <input
          id="address"
          placeholder="Street name"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </InputGroup>
    </QuestionGroup>
  )
}

export default LocationPicker
