import { useState } from 'react';
import { Marker, useMapEvents, Popup } from 'react-leaflet';
import L from 'leaflet'; 
import 'leaflet/dist/leaflet.css';
import { useDispatch } from 'react-redux';
import { setCommonFields } from "../../../../../store/slices/reportCreateSlice.js";

function LocationMarker({ setLocation, setAddress }) {
  const [position, setPosition] = useState(null);
  const dispatch = useDispatch();
  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition(e.latlng);
      setLocation({ latitude: lat, longitude: lng });
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=en`)
        .then(response => response.json())
        .then(data => {
          const addressParts = data.address;
          const formattedAddress = `${addressParts.house_number || ''} ${addressParts.road || ''}, ${addressParts.city || addressParts.town || addressParts.village}`;
          setAddress(formattedAddress.trim());
          dispatch(setCommonFields({ address: formattedAddress.trim() }));
        })
        .catch(err => {
          console.error('Error fetching address:', err);
        });
    },
  });

  const customIcon = new L.Icon({
    iconUrl: '/gps.png', 
    iconSize: [41, 41], 
    iconAnchor: [12, 41], 
    popupAnchor: [1, -34] 
  });

  return position ? (
    <Marker position={position} icon={customIcon}>
      <Popup>!</Popup>
    </Marker>
  ) : null;
}

export default LocationMarker;