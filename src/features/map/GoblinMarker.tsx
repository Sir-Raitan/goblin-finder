import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

const goblinUrl = "icons/png/003-troll.png";

const goblinIcon: Icon = new Icon({
  iconUrl: goblinUrl,
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16],
});

function GoblinMarker() {
  return (
    <Marker position={[51.505, -0.09]} icon={goblinIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}

export default GoblinMarker;
