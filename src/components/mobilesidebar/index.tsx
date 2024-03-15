"use client";

import { SideBar } from "@/components";
import { cn } from "@/utils";
import { useState } from "react";
import Backdrop from "./backdrop";
import ToggleButton from "./toggle-btn";

const MobileSidebar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggle = () => setIsOpened(!isOpened);

  return (
    <div className="fixed w-full h-screen md:hidden z-50">
      <Backdrop handleToggle={handleToggle} isOpened={isOpened} />

      <div className={cn("w-9/12 absolute inset-0 h-screen transition-all ease-in-out duration-500 menu", { expanded: isOpened })}>
        <ToggleButton handleToggle={handleToggle} isOpened={isOpened} />

        <div className="bg-primary h-screen  pt-20">
          <SideBar handleOnNavigation={handleToggle} />
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
