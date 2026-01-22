import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
const MapView = ({ lat = 30.269501, lng = -97.715942 }) => {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      className="ops_map"
      style={{ height: "100%", width: "100%" }}
    >
      {/* OpenStreetMap Tile Layer */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Marker */}
      <Marker position={[lat, lng]}>
        <Popup>
          📍 You are here <br /> Austin ,TX
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
