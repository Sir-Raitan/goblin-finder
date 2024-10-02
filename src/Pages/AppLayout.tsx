import GoblinDescription from "../features/goblin/GoblinDescription";
import Map from "../features/map/Map";
import BottomContainer from "../ui/BottomContainer";
import Logo from "../ui/Logo";
import SideContainer from "../ui/SideContainer";
import { useGoblins } from "../features/goblin/GoblinProvider";
import { Breakpoints, useMediaQuery } from "../hooks/useMediaQuery";

export default function AppLayout() {
  const isWithin = useMediaQuery(Breakpoints.md);
  const { activeGoblin } = useGoblins();

  return (
    <div
      className={`relative grid min-h-screen grid-cols-1 grid-rows-[auto_minmax(60dvh,1fr)_auto] md:h-dvh ${activeGoblin && "md:grid-cols-[auto_1fr]"} md:grid-rows-1`}
    >
      <div className="bg-lime-800 p-3 md:absolute md:rounded-lg">
        <Logo />
      </div>
      {isWithin && activeGoblin && (
        <SideContainer>
          <Logo className="my-10" link={true} />
          <GoblinDescription />
        </SideContainer>
      )}
      <Map />
      {!isWithin && activeGoblin && (
        <BottomContainer animated={true} className="md:hidden">
          <GoblinDescription />
        </BottomContainer>
      )}
    </div>
  );
}
