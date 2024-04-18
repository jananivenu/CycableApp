import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function TestForm() {
  const [markerPosition, setMarkerPosition] = useState(null);

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setMarkerPosition(e.latlng);
      }
    });

    return markerPosition === null ? null : (
      <Marker position={markerPosition} />
    );
  };

  const handleSubmit = () => {
    if (markerPosition) {
      alert(`Latitude: ${markerPosition.lat}, Longitude: ${markerPosition.lng}`);
    } else {
      alert("Please select a location on the map.");
    }
  };

  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
      <button onClick={handleSubmit} style={{ marginTop: '10px' }}>
        Отправить
      </button>
    </div>
  );
}

export default TestForm;