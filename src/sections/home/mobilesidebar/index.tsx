"use client";
import { SideBar } from "@/components";
import { cn } from "@/utils";
import { useEffect, useRef, useState } from "react";
import ToggleButton from "./toggle-btn";

const MobileSidebar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const outsideRef = useRef<HTMLDivElement>(null);

  function handleToggle() {
    if (outsideRef.current) {
      setIsOpened(!isOpened);

      outsideRef.current.classList.toggle("expanded");
    }
  }

  useEffect(() => {
    function handleClose(e: MouseEvent) {
      if (outsideRef.current && !outsideRef.current.contains(e.target as Node)) {
        setIsOpened(false);

        outsideRef.current.classList.remove("expanded");
      }
    }
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <div className={cn("fixed w-full h-screen z-50 transition-all duration-500 md:hidden", { "bg-black/50": isOpened })}>
      <div ref={outsideRef} className="w-9/12 bg-white h-screen transition-all ease-in-out duration-500 menu">
        <ToggleButton handleToggle={handleToggle} isOpened={isOpened} />

        <div className="flex flex-col w-full h-full">
          <div className="bg-black min-h-20"></div>
          <div className="grow bg-primary">
            <SideBar handleOnNavigation={handleToggle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
