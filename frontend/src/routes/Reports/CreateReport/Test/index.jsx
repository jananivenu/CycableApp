import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function TestForm() {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [address, setAddress] = useState('');

  const LocationMarker = () => {
    useMapEvents({
      click: async (e) => {
        setMarkerPosition(e.latlng);
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;

        console.log(`Coordinates: Latitude: ${lat}, Longitude: ${lng}`);

        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=en`);
        const data = await response.json();
        const foundAddress = data.display_name;
        setAddress(foundAddress);

        console.log(`Address: ${foundAddress}`);
      }
    });

    return markerPosition === null ? null : (
      <Marker position={markerPosition} />
    );
  };

  const handleSubmit = () => {
    if (markerPosition) {
      alert(`Address: ${address}\nLatitude: ${markerPosition.lat}, Longitude: ${markerPosition.lng}`);
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