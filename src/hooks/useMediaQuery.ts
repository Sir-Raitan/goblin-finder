import { useEffect, useState } from "react";

export enum Breakpoints {
  sm = "(min-width: 640px)",
  md = "(min-width: 768px)",
  lg = "(min-width: 1024px)",
  xl = "(min-width: 1280px)",
  "2xl" = "(min-width: 1536px)",
}

//not to be uverused
export function useMediaQuery(mediaQuery: string) {
  const [isWithin, setIsWithin] = useState(false);

  useEffect(() => {
    function checkMedieQuery() {
      const matches = window.matchMedia(mediaQuery).matches;
      setIsWithin(matches);
    }
    checkMedieQuery();
    window.addEventListener("resize", checkMedieQuery);

    return () => {
      window.removeEventListener("resize", checkMedieQuery);
    };
  }, [mediaQuery]);

  return isWithin;
}
