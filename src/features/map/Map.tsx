import { MapContainer, TileLayer, useMap } from "react-leaflet";
import GoblinMarker from "./GoblinMarker";

function Map() {
  return (
    <MapContainer center={[56.9677, 24.1056]} zoom={10} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GoblinMarker />
    </MapContainer>
  );
}

export default Map;
