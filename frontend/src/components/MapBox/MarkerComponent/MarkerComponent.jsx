import React, { useEffect, useState } from 'react';
import { Circle } from '@mui/icons-material';
import { Marker } from 'react-map-gl';


const MarkerComponent = ({ location, handleMarkerClick }) => {
  const latitude = location.latitude
  const longitude = location.longitude

  
  const eventType = location.eventType
  const [color, setColor] = useState("black");

  useEffect(() => {
    switch (eventType) {
      case 'Bicycle accident':
        console.log('Bicycle accident')
        setColor('red')
        break;
      case 'Dangerous location':
        console.log('Dangerous location');
        setColor('#ffcc00')
        break;
      case 'Bicycle theft':
        setColor('blue')
        break;
      case 'Violations':
        setColor('green')
        break;
      default:
        setColor('black')
        break;
    }
  },[eventType]);
  
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
