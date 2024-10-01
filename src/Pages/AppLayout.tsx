import GoblinDescription from "../features/goblin/GoblinDescription";
import Map from "../features/map/Map";
import BottomContainer from "../ui/BottomContainer";
import Logo from "../ui/Logo";

export default function AppLayout() {
  return (
    <div className="grid min-h-screen grid-cols-1 grid-rows-[auto_minmax(60dvh,1fr)_auto]">
      <div className="bg-lime-800 p-3">
        <Logo />
      </div>
      <Map />
      <BottomContainer animated={true}>
        <GoblinDescription />
      </BottomContainer>
    </div>
  );
}
