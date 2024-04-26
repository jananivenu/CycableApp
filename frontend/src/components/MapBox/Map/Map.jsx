import React, { useState, useEffect } from 'react';
import ReactMapGl, { Popup, GeolocateControl, NavigationControl } from 'react-map-gl';
import Geolocation from '../Geolocation/Geolocation';  //why is doing problem to my map
import PopupContent from '../Popup/Popup';
import MarkerComponent from '../MarkerComponent/MarkerComponent';
import StreetNameFetcher from '../StreetNameFetcher/StreetNameFetcher';
import { Source, Layer } from 'react-map-gl';
import { heatmapLayer } from '../HeatMap/map-style';
import { fetchAllReports } from '../../../axios/fetchReports';

const Map = () => {
const [viewport, setViewport] = useState({
  latitude: 47.3769,
  longitude: 8.5417,
  width: '100vw',
  height: '100vh',
  zoom: 5,
});


const [popupInfo, setPopupInfo] = useState(null);
const [userLocation, ] = useState(null);
const [reportData, setReportData] = useState(null);


useEffect(() => {
    const fetchReports = async () => {
        try {
            const response = await fetchAllReports();
            setReportData(response);
            console.log(response)
        } catch (error) {
            console.log(error)
            throw error
        }
        
    }
    fetchReports();
}, []);




const token = import.meta.env.VITE_MAPBOX_TOKEN;


const dummyLocations = [
  { latitude: 47.9, longitude: 8.0, incident_type: 'bicycle_accident' },
  { latitude: 47.5, longitude: 8.0, incident_type: 'near_miss' },
  { latitude: 47.8, longitude: 8.5, incident_type: 'bicycle_theft' },
  { latitude: 48.0, longitude: 7.8, incident_type: 'violations' },
  { latitude: 47.1, longitude: 9.20, incident_type: 'bicycle_accident' },
  { latitude: 47.52, longitude: 8.25, incident_type: 'near_miss' },
  { latitude: 45.9, longitude: 9.5, incident_type: 'bicycle_theft' },
  { latitude: 48.8588897, longitude: 2.320041, incident_type: 'violations' },
  { latitude: 48.844037819391104, longitude: 2.264264463535315, incident_type: 'bicycle_accident' },
  { latitude: 48.81831591253712, longitude: 2.368460237136847, incident_type: 'near_miss' },
  { latitude: 48.818567591253712, longitude: 2.264265553535315, incident_type: 'bicycle_theft' },
  { latitude: 48.83831591693712, longitude: 2.289164463535315, incident_type: 'violations' },
  { latitude: 48.90039963635, longitude: 2.5371829978141845, incident_type: 'bicycle_accident' },
  { latitude: 48.900125567635, longitude: 2.4371829978141845, incident_type: 'near_miss' },
  { latitude: 48.9001253363635, longitude: 2.3891829978141845, incident_type: 'bicycle_theft' },
  { latitude: 48.99055553363635, longitude: 2.3371826788141845, incident_type: 'violations' },
  { latitude: 48.98214714561775, longitude: 2.3233793345604003, incident_type: 'bicycle_accident' },
  { latitude: 48.96214714561775, longitude: 2.2933793345604003, incident_type: 'near_miss' },
  { latitude: 48.997214711775, longitude: 2.2633793345604003, incident_type: 'bicycle_accident' },
  { latitude: 48.667214714561775, longitude: 2.3533743345604003, incident_type: 'violations' },
  { latitude: 48.89815697447773, longitude: 2.339980033985144, incident_type: 'bicycle_theft' },
  { latitude: 48.87775697447773, longitude: 2.399980033985144, incident_type: 'near_miss' },
  { latitude: 48.86635697447773, longitude: 2.312980033985144, incident_type: 'bicycle_accident' },
  { latitude: 48.9865697447773, longitude: 2.32280033985144, incident_type: 'violations' },
];


const handleMarkerClick = (location) => {
    setViewport({
      ...viewport,
      latitude: location.latitude,
      longitude: location.longitude,
    });
    setPopupInfo(location);
  };
 
 

const heatmapData = {
  type: 'FeatureCollection',
  features: dummyLocations.map((location, index) => ({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [location.longitude, location.latitude]
    },
    properties: {
        incident_type: location.incident_type
    }
  }))
};


 const renderMarkers = () => {
   return dummyLocations.map((location, index) => (
     <MarkerComponent key={index} location={location} handleMarkerClick={handleMarkerClick} />
   ));
 };



return (
  <div>
    <ReactMapGl
      {...viewport}
      mapboxAccessToken={token}
      onMove={(evt) => setViewport(evt.viewState)}
      style={{ width: '100vw', height: '100vh' }}
      mapStyle="mapbox://styles/mihaels/clvdnhxt3011901qvco3g86vv"
      >
      {/* NEW Heatmap */}
      {viewport.zoom <= 8 && (
  <Source id="heatmap" type="geojson" data={heatmapData}>
    <Layer {...heatmapLayer} />
  </Source>
)}
{viewport.zoom >= 8 && (
  <>
    <Source id="heatmap" type="geojson" data={heatmapData}>
      <Layer {...heatmapLayer} />
    </Source>
    {renderMarkers()}
  </>
)}

      {userLocation && (
        <MarkerComponent latitude={userLocation.latitude} longitude={userLocation.longitude} />
      )}

      {popupInfo && (
        <Popup
          latitude={popupInfo.latitude}
          longitude={popupInfo.longitude}
          closeButton={true}
          closeOnClick={false}
          onClose={() => setPopupInfo(null)}
          anchor="bottom"
        >
          <PopupContent incident_type={popupInfo.incident_type} />
          <StreetNameFetcher
            latitude={popupInfo.latitude}
            longitude={popupInfo.longitude}
            accessToken={token}
          />
        </Popup>
      )}
      <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={false} 
          auto
        />
        <div style={{ position: 'absolute', right: 0 }}>
          <NavigationControl />
        </div>
    </ReactMapGl>
  </div>
);
};


export default Map;
