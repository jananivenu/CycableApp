import React from 'react';

const Marker = ({ marker }) => {
    const latitude = marker.latitude
    const longitude = marker.longitude

    console.log(marker)
  return (
    <div
      style={{
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        pointerEvents: 'none',
        background: 'none',
      }}
      latitude={latitude}
      longitude={longitude}
    >
     
    </div>
  );
};

export default Marker;
