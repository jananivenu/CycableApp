import React, { useState } from 'react';
import ReactMapGl from "react-map-gl";
import './App.css'

export default function App() {
  const [viewport, setViewport] = useState({
  latitude: 47.3769,
  longitude: 8.5417,
  width: "100vw",
  height: "100vh",
  zoom: 10

  });

  return (
    <div>
     <ReactMapGl 
     {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
     onViewportChange={viewport => {
      setViewport(viewport);
     }}>markers</ReactMapGl>
    </div>
  );
}


