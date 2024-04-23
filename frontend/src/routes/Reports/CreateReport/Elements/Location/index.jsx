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
    const defaultLocation = {
      latitude: 52.52, // Berlin
      longitude: 13.405, // Berlin
    }

    const fetchCityCoordinates = async (cityName) => {
      const url = `https://nominatim.openstreetmap.org/search?q=${cityName}&format=json&featuretype=city`
      const response = await fetch(url)
      const data = await response.json()
      if (data && data.length > 0) {
        return {
          latitude: parseFloat(data[0].lat),
          longitude: parseFloat(data[0].lon),
        }
      }
      return null
    }

    const getUserLocationFromStorage = () => {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user && user.location) {
        return user.location
      }
      return null
    }

    const setupLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            })
            setIsLocationLoaded(true)
          },
          async (error) => {
            console.error('Error fetching the location: ', error)
            const cityFromStorage = getUserLocationFromStorage()
            if (cityFromStorage) {
              const cityCoords = await fetchCityCoordinates(cityFromStorage)
              if (cityCoords) {
                setLocation(cityCoords)
              } else {
                setLocation(defaultLocation)
              }
            } else {
              setLocation(defaultLocation)
            }
            setIsLocationLoaded(true)
          },
          { enableHighAccuracy: true },
        )
      } else {
        const cityFromStorage = getUserLocationFromStorage()
        if (cityFromStorage) {
          const cityCoords = await fetchCityCoordinates(cityFromStorage)
          if (cityCoords) {
            setLocation(cityCoords)
          } else {
            setLocation(defaultLocation)
          }
        } else {
          setLocation(defaultLocation)
        }
        setIsLocationLoaded(true)
      }
    }

    setupLocation()
  }, [])

  return (
    <QuestionGroup>
      <StyledH3>Where?</StyledH3>

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
