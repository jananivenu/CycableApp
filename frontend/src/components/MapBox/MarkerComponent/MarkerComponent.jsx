import React, { useEffect, useState } from 'react';
import { Circle } from '@mui/icons-material';
import { Marker } from 'react-map-gl';


const MarkerComponent = ({ location, handleMarkerClick }) => {
  const latitude = location.latitude
  const longitude = location.longitude

  
  const incident_type = location.incident_type
  const [color, setColor] = useState("black");

  useEffect(() => {
    switch (incident_type) {
      case 'bicycle_accident':
        console.log('bicycle_accident')
        setColor('#EE4266')
        break;
      case 'near_miss':
        console.log('near_miss');
        setColor('#FFB800')
        break;
      case 'bicycle_theft':
        setColor('#0075FF')
        break;
      case 'violations':
        setColor('#20B69E')
        break;
      default:
        setColor('black')
        break;
    }
  },[incident_type]);
  
  return (
    <Marker

            latitude={latitude}
            longitude={longitude}
            // onClick={() => handleMarkerClick(location)}
            >
            <Circle onClick={() => handleMarkerClick(location)} style={{ fontSize: 10, color: color, cursor: 'pointer' }}/>    
            </Marker>)
  
};

export default MarkerComponent;
