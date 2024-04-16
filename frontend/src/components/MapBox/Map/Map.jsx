import React, { useState } from 'react'
import ReactMapGl from 'react-map-gl'
import './App.css'
import.meta.env

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 47.3769,
    longitude: 8.5417,
    width: '100vw',
    height: '100vh',
    zoom: 10,
  })

  // This is the mapbox token, defined in .env variable. Need to figure out how to "hide" in production
  const token = import.meta.env.VITE_MAPBOX_TOKEN

  return (
    <div>
      <ReactMapGl
        {...viewport}
        mapboxAccessToken={token}
        // This is the move functionality
        onMove={(evt) => setViewport(evt.viewState)}
        // Styling need to figure out
        style={{ width: '100vw', height: '100vh' }}
        mapStyle="mapbox://styles/mihaels/clv1rnydt009x01qzdbpu4glb"
      >
        markers
      </ReactMapGl>
    </div>
  )
}
