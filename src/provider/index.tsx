"use client";
import { setActiveSection, setPositions } from "@/stores/active-section";
import { ReactNode, useEffect, useRef } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  const childrenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = childrenRef.current?.querySelectorAll("section");

    const offsets: number[] = [];

    const positions: number[] = [];
    elements?.forEach((element) => {
      const offset = element.offsetTop;
      const height = element.offsetHeight;

      positions.push(offset + (height - 200));
      offsets.push(offset);
    });

    setPositions(offsets);

    function handleScrollPosition() {
      const scrollPosition = window.scrollY;

      for (let i = 0; i < positions.length; i++) {
        if (scrollPosition < positions[i]) {
          setActiveSection(i);
          break;
        }
      }
    }

    window.addEventListener("scroll", handleScrollPosition);
    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, []);

  return <div ref={childrenRef}>{children}</div>;
};

export default Providers;
