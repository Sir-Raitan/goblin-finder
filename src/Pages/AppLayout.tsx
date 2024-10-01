import GoblinDescription from "../features/goblin/GoblinDescription";
import Map from "../features/map/Map";
import BottomContainer from "../ui/BottomContainer";
import Logo from "../ui/Logo";
import SideContainer from "../ui/SideContainer";

export default function AppLayout() {
  return (
    <div className="relative grid min-h-screen grid-cols-1 grid-rows-[auto_minmax(60dvh,1fr)_auto] md:grid-cols-[auto_1fr] md:grid-rows-1">
      <div className="bg-lime-800 p-3 md:absolute md:rounded-lg">
        <Logo />
      </div>
      <SideContainer className="hidden md:block">
        <Logo className="mb-10" />
        <GoblinDescription />
      </SideContainer>
      <Map />
      <BottomContainer animated={true} className="md:hidden">
        <GoblinDescription />
      </BottomContainer>
    </div>
  );
}
