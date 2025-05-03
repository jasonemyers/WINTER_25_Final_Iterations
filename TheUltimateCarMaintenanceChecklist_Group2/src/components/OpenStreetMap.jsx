import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


import L from 'leaflet'; //Import from Leaflet for use of interactive maps
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

//custom map settings
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const center = [51.505, -0.09]; 

//Map component for Local Services page
function OpenStreetMap() {
  return (
    // Map container.
    <MapContainer className='map' center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
      {/* Display background of map */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}/>
    </MapContainer>
  );
}

export default OpenStreetMap;
