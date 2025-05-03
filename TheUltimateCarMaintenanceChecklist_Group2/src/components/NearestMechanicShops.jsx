import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

//custom map settings
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Component to update the map view automatically when center changes
function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

// Produce list of mechanic shops upon a provided zip code. For Local Services page
function NearestMechanicShops() {
  const [zipcode, setZipcode] = useState('');
  const [center, setCenter] = useState([51.505, -0.09]); // default center
  const [mechanicShops, setMechanicShops] = useState([]);
  const [loading, setLoading] = useState(false);

  // Update zipcode state as user types
  const handleZipcodeChange = (e) => {
    setZipcode(e.target.value);
  };

  //when the user clicks Search, geocode the zipcode and find mechanic shops
  const handleSearch = async () => {
    if (!zipcode) {
      alert("Please enter a zipcode.");
      return;
    }
    setLoading(true);
    try {
      // 1. Geocode the zipcode using Nominatim API
      const nominatimUrl = `https://nominatim.openstreetmap.org/search?postalcode=${zipcode}&country=us&format=json&limit=1`;
      const geoResponse = await fetch(nominatimUrl);
      const geoData = await geoResponse.json();

      if (!geoData || geoData.length === 0) {
        alert("No location found for that zipcode.");
        setLoading(false);
        return;
      }
      const lat = parseFloat(geoData[0].lat);
      const lon = parseFloat(geoData[0].lon);
      setCenter([lat, lon]);

      // 2. Query Overpass API for mechanic shops within a 5km radius
      const overpassQuery = `
        [out:json];
        (
          node["shop"="car_repair"](around:5000,${lat},${lon});
          way["shop"="car_repair"](around:5000,${lat},${lon});
          relation["shop"="car_repair"](around:5000,${lat},${lon});
        );
        out center;
      `;
      const overpassUrl = 'https://overpass-api.de/api/interpreter';
      const overpassResponse = await fetch(overpassUrl, {
        method: 'POST',
        body: overpassQuery,
      });
      const overpassData = await overpassResponse.json();

      // Process returned elements into an array of shops
      const shops = overpassData.elements.map((el) => {
        let shopLat, shopLon;
        if (el.type === 'node') {
          shopLat = el.lat;
          shopLon = el.lon;
        } else if (el.center) {
          shopLat = el.center.lat;
          shopLon = el.center.lon;
        } else {
          shopLat = 0;
          shopLon = 0;
        }
        return {
          id: el.id,
          lat: shopLat,
          lon: shopLon,
          name: el.tags && el.tags.name ? el.tags.name : 'Unnamed Shop',
        };
      });

      setMechanicShops(shops);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("There was an error fetching data. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div style={{ margin: '1rem' }}>
      <div>
        <input
          type="text"
          placeholder="Enter zipcode (e.g., 90210)"
          value={zipcode}
          onChange={handleZipcodeChange}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
          <ChangeView center={center} zoom={13} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Marker for the user's zipcode location */}
          <Marker position={center}>
            <Popup>Your location</Popup>
          </Marker>
          {/* Circle to highlight a 5km radius around the user's location */}
          <Circle
            center={center}
            radius={5000}
            pathOptions={{ color: 'blue', fillColor: 'blue', fillOpacity: 0.1 }}
          />
          {/* Markers for mechanic shops */}
          {mechanicShops.map((shop) => (
            <Marker key={shop.id} position={[shop.lat, shop.lon]}>
              <Popup>{shop.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div style={{ marginTop: '1rem' }}>
        {mechanicShops.length > 0 && (
          <>
            <h3>Mechanic Shops Found:</h3>
            <ul>
              {mechanicShops.map((shop) => (
                <li key={shop.id}>{shop.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>

    </div>
  );
}

export default NearestMechanicShops;
