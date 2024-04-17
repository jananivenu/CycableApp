import React, { useState } from 'react'
import ReactMapGl from 'react-map-gl'
import.meta.env
import mapStyles from './styles';
import Marker from '../Marker/Marker';
import Geolocation from '../Geolocation/Geolocation';


export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 47.3769,
    longitude: 8.5417,
    width: '100vw',
    height: '100vh',
    zoom: 12,
  })

  // This is the mapbox token, defined in .env variable. Need to figure out how to "hide" in production
  const token = import.meta.env.VITE_MAPBOX_TOKEN

  const markersData = [
    { type: 'bicycle accident', latitude: 47.3769, longitude: 8.5417 },
    { type: 'dangerous location', latitude: 47.38, longitude: 8.55 },
    { type: 'bicycle theft', latitude: 47.37, longitude: 8.54 },
    { type: 'violations', latitude: 47.39, longitude: 8.53 },
   
  ];


  return (
    <div>
      <Geolocation />  
      <ReactMapGl
        {...viewport}
        mapboxAccessToken={token}
        // This is the move functionality
        onMove={(evt) => setViewport(evt.viewState)}
        // Styling need to figure out
        style={{ width: '100vw', height: '100vh' }}
        mapStyle="mapbox://styles/mihaels/clv1rnydt009x01qzdbpu4glb"
      >
        {/* For idividdaul pin/marker */}
        {markersData.map((marker, index) => (
          <Marker key={index} marker={marker}>
            <div
              className={`marker ${mapStyles.marker} ${mapStyles[marker.type.replace(/\s+/g, '')]}`}
            >
              {marker.type}
            </div>
          </Marker>
        ))}
      </ReactMapGl>
    </div>
  )
}

