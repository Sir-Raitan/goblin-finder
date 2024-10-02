import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import GoblinMarker from "./GoblinMarker";
import { getMockGoblins, Goblin } from "../../services/apiGoblin";
import { latLng, latLngBounds } from "leaflet";
import { useGoblins } from "../goblin/GoblinProvider";

const MAP_BOUNDS_SW = latLng(55.0, 20.0);
const MAP_BOUNDS_NE = latLng(58.25, 29.0);

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
      <MapEvents />
      <MarkerClusterGroup>
        {goblins.map((g) => (
          <GoblinMarker key={g.id} goblin={g} />
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

function MapEvents() {
  const map = useMap();
  const previousGoblin = useRef<Goblin>();
  const { activeGoblin } = useGoblins();

  useEffect(() => {
    map.setMaxBounds(latLngBounds(MAP_BOUNDS_SW, MAP_BOUNDS_NE));
  }, [map]);

  useEffect(() => {
    if (activeGoblin) {
      map.setView(activeGoblin.position);
    }
    const timeout = setTimeout(() => {
      map.invalidateSize();
    }, 100);
    previousGoblin.current = activeGoblin;

    return () => {
      clearTimeout(timeout);
    };
  }, [activeGoblin, map]);

  return null;
}
export default Map;
