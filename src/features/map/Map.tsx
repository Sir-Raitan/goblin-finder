import { MapContainer, TileLayer } from "react-leaflet";
import GoblinMarker from "./GoblinMarker";
import { useEffect, useState } from "react";
import { getMockGoblins, Goblin } from "../../services/apiGoblin";
import MarkerClusterGroup from "react-leaflet-cluster";

function Map() {
  const [goblins, setGoblins] = useState<Goblin[]>([]);
  useEffect(() => {
    async function getGoblins() {
      const goblinArr = await getMockGoblins();
      setGoblins(goblinArr);
    }
    getGoblins();
  }, []);
  return (
    <MapContainer center={[56.9677, 24.1056]} zoom={10} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {goblins.map((g) => (
          <GoblinMarker key={g.id} goblin={g} />
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default Map;
