"use client";

import { SideBar } from "@/components";
import { cn } from "@/utils";
import { Variants } from "framer-motion";
import { useState } from "react";
import { MotionDiv } from "../motionGenerator";
import Backdrop from "./backdrop";
import ToggleButton from "./toggle-btn";

const MobileSidebar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggle = () => setIsOpened(!isOpened);

  const variants: Variants = {
    hide: { x: "-100%", transition: { duration: 0.5, type: "keyframes", ease: "backOut" } },
    show: { x: 0, transition: { duration: 0.5, type: "keyframes", ease: "backOut" } },
  };

  return (
    <div className="z-50">
      <Backdrop handleToggle={handleToggle} isOpened={isOpened} />

      <ToggleButton handleToggle={handleToggle} isOpened={isOpened} />

      <MotionDiv
        onClick={handleToggle}
        variants={variants}
        initial="hide"
        animate={isOpened ? "show" : "hide"}
        className={cn("w-9/12 fixed translate-x-1/2")}
        // className={cn("w-9/12 fixed transition-all ease-in-out duration-500 -translate-x-full", { "translate-x-0": isOpened })}
      >
        <div className="bg-primary h-screen  pt-20">
          <SideBar handleOnNavigation={handleToggle} />
        </div>
      </MotionDiv>
    </div>
  );
};

export default MobileSidebar;

// const MobileSidebar = () => {
//   const [isOpened, setIsOpened] = useState(false);

//   const handleToggle = () => setIsOpened(!isOpened);

//   return (
//     <div className="fixed w-full h-screen md:hidden z-50">
//       <Backdrop handleToggle={handleToggle} isOpened={isOpened} />

//       <div className={cn("w-9/12 absolute inset-0 h-screen transition-all ease-in-out duration-500 menu", { expanded: isOpened })}>
//         <ToggleButton handleToggle={handleToggle} isOpened={isOpened} />

//         <div className="bg-primary h-screen  pt-20">
//           <SideBar handleOnNavigation={handleToggle} />
//         </div>
//       </div>
//     </div>
//   );
// };
