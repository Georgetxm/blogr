import CTASection from "../components/CTASection";
import SectionOne from "../components/SectionOne";
import SectionThree from "../components/SectionThree";
import SectionTwo from "../components/SectionTwo";
import { useState, useCallback, useEffect } from "react";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

export default function Home() {
  let isBreakpoint = useMediaQuery(1024);
  return (
    <>
      <CTASection isBreakpoint={isBreakpoint} />
      <SectionOne isBreakpoint={isBreakpoint} />
      <SectionTwo />
      <SectionThree isBreakpoint={isBreakpoint} />
    </>
  );
}
