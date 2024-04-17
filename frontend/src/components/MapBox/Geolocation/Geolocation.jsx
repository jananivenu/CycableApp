import React, { useState, useEffect } from 'react';
import ReactMapGl, { GeolocateControl, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { IconButton } from '@mui/material';
import { MyLocation } from '@mui/icons-material';

export default function Geolocation() {
  const [viewport, setViewport] = useState({
    latitude: 47.3769,
    longitude: 8.5417,
    width: '100vw',
    height: '100vh',
    zoom: 6,
  });

  const [userLocation, setUserLocation] = useState(null);
  const [geolocationEnabled, setGeolocationEnabled] = useState(false);

  const token = import.meta.env.VITE_MAPBOX_TOKEN;

  useEffect(() => {
    if (geolocationEnabled && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setViewport((prevViewport) => ({
            ...prevViewport,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }));
          console.log('User location:', position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
  }, [geolocationEnabled]);

  const toggleGeolocation = () => {
    setGeolocationEnabled(!geolocationEnabled);
  };

  return (
    <div>
      <ReactMapGl
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxAccessToken={token}
        mapStyle="mapbox://styles/mihaels/clv1rnydt009x01qzdbpu4glb"
      >
        {userLocation && (
          <Marker latitude={userLocation.latitude} longitude={userLocation.longitude}>
            <MyLocation />
          </Marker>
        )}

        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={geolocationEnabled}
          auto={false}
        />
      </ReactMapGl>
      <IconButton
        style={{
          position: 'absolute',
          top: '80px',
          right: '20px',
          zIndex: 1,
        }}
        onClick={toggleGeolocation}
      >
        <MyLocation />
      </IconButton>
    </div>
  );
}

