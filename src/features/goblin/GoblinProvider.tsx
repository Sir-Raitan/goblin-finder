import { createContext, useContext, useState } from "react";
import { Goblin } from "../../services/apiGoblin";

type GoblinContextType = {
  activeGoblin: Goblin | undefined;
  setActiveGoblin: React.Dispatch<React.SetStateAction<Goblin | undefined>>;
};

const GoblinContext = createContext<GoblinContextType | null>(null);

function GoblinProvider({ children }: { children: React.ReactNode }) {
  const [activeGoblin, setActiveGoblin] = useState<Goblin>();
  return (
    <GoblinContext.Provider value={{ activeGoblin, setActiveGoblin }}>
      {children}
    </GoblinContext.Provider>
  );
}

export function useGoblins() {
  const value = useContext(GoblinContext);
  if (!value) {
    throw new Error(
      "No context value received, check if context is accessed within the boundaries of the GoblinProvider component",
    );
  }
  return value;
}

export default GoblinProvider;
