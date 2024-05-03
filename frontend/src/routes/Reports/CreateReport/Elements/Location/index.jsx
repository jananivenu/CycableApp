import { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import LocationMarker from './LocationMarker'
import { StyledH3 } from '../../../../../styles/elements/typography'
import {
  ErrorMessage,
  InputGroup,
  QuestionGroup,
} from '../../../../../styles/elements/forms'
import { useDispatch } from 'react-redux'
import { setCommonFields } from '../../../../../store/slices/reportCreateSlice'

function LocationPicker() {
  const [location, setLocation] = useState(null)
  const [isLocationLoaded, setIsLocationLoaded] = useState(false)
  const [address, setAddress] = useState('')
  const mapRef = useRef(null)
  const dispatch = useDispatch()
  const [errorMsg, setErrorMsg] = useState(null)

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation)
    if (newLocation) {
      setAddress(newLocation.address)
      // Dispatch action to update Redux store
      dispatch(
        setCommonFields({
          latitude: newLocation.latitude,
          longitude: newLocation.longitude,
          address: newLocation.address,
        }),
      )
    }
  }

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

  const handleBlur = (e) => {
    const { id } = e.target
    if (id === 'address' && !address) {
      setErrorMsg('Please select a location.')
    } else {
      setErrorMsg(null)
    }
  }

  return (
    <QuestionGroup onBlur={handleBlur}>
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
          <LocationMarker
            setLocation={handleLocationChange}
            setAddress={setAddress}
          />
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
      {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
    </QuestionGroup>
  )
}

export default LocationPicker
