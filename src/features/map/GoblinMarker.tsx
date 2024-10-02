import { Icon, Popup as PopupInstance } from "leaflet";
import { Marker, Popup } from "react-leaflet";

import { Goblin } from "../../services/apiGoblin";
import Button from "../../ui/Button";
import { useGoblins } from "../goblin/GoblinProvider";
import { useRef } from "react";

const goblinIcons: { type: number; icon: Icon }[] = [
  {
    type: 0,
    icon: new Icon({
      iconUrl: "icons/png/002-goblin-1.png",
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16],
    }),
  },
  {
    type: 1,
    icon: new Icon({
      iconUrl: "icons/png/003-troll.png",
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16],
    }),
  },
  {
    type: 2,
    icon: new Icon({
      iconUrl: "icons/png/004-ogre.png",
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16],
    }),
  },
  {
    type: 3,
    icon: new Icon({
      iconUrl: "icons/png/005-giant.png",
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16],
    }),
  },
];

const defaultIcon = new Icon({
  iconUrl: "icons/brand.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16],
});

type GoblinMarkerProps = {
  goblin: Goblin;
};

function GoblinMarker({ goblin }: GoblinMarkerProps) {
  const { setActiveGoblin } = useGoblins();
  const popupRef = useRef<PopupInstance>();

  const icon = goblinIcons.find((icon) => goblin.type === icon.type)?.icon;
  const position = goblin.position;
  return (
    <Marker
      position={position}
      icon={icon || defaultIcon}
      eventHandlers={{
        dblclick: () => {
          setActiveGoblin(goblin);
        },
        click: () => {
          console.log("jumbo");
        },
      }}
    >
      <Popup ref={(r) => (popupRef.current = r as NonNullable<PopupInstance>)}>
        <div
          className="flex flex-col gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <span>
            {goblin.name} {goblin.surname}
          </span>
          <Button
            onClick={() => {
              if (popupRef.current) {
                popupRef.current.close();
              }
              setActiveGoblin(goblin);
            }}
          >
            Inspect
          </Button>
        </div>
      </Popup>
    </Marker>
  );
}

export default GoblinMarker;
