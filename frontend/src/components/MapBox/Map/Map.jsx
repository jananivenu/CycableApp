import React, { useState } from 'react';
import ReactMapGl, { Popup, Marker } from 'react-map-gl'; 
import Geolocation from '../Geolocation/Geolocation';
import PopupContent from '../Popup/Popup';
import { Circle } from '@mui/icons-material';
import MarkerComponent from '../MarkerComponent/MarkerComponent';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 47.3769,
    longitude: 8.5417,
    width: '100vw',
    height: '100vh',
    zoom: 5,
  });

  const [popupInfo, setPopupInfo] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const token = import.meta.env.VITE_MAPBOX_TOKEN;

  const dummyLocations = [
    { latitude: 47.9, longitude: 8.0, eventType: 'Bicycle accident' },
    { latitude: 47.5, longitude: 8.0, eventType: 'Dangerous location' },
    { latitude: 47.8, longitude: 8.5, eventType: 'Bicycle theft' },
    { latitude: 48.0, longitude: 7.8, eventType: 'Violations' },
  ];

  const handleMarkerClick = (location) => {
    
    setPopupInfo(location);
  };

  const handleGeolocationChange = (location) => {
    setUserLocation(location);
  };

  return (
    <div>
      <ReactMapGl
        {...viewport}
        mapboxAccessToken={token}
        onMove={(evt) => setViewport(evt.viewState)}
        style={{ width: '100vw', height: '100vh' }}
        mapStyle="mapbox://styles/mihaels/clv4y6ih700i101ph6yg49f96"
      >
        {dummyLocations.map((location, index) => (
        <MarkerComponent key={index} location={location} handleMarkerClick={handleMarkerClick}/>
        )
            
          
        )}
        {userLocation && (
          <MarkerComponent
            latitude={userLocation.latitude}
            longitude={userLocation.longitude}
          />
        )}
        {popupInfo && (
          <Popup
            latitude={popupInfo.latitude}
            longitude={popupInfo.longitude}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setPopupInfo(null)}
            anchor="left"
          >
            <PopupContent eventType={popupInfo.eventType} />
          </Popup>
        )}
      </ReactMapGl>
      <Geolocation onLocationChange={handleGeolocationChange} />
    </div>
  );
};

export default Map;
