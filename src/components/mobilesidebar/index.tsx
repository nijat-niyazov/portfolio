"use client";

import { SideBar } from "@/components";
import { Variants } from "framer-motion";
import { useState } from "react";
import { MotionDiv } from "../motionGenerator";
import Backdrop from "./backdrop";
import ToggleButton from "./toggle-btn";

// const MobileSidebar = () => {
//   const [isOpened, setIsOpened] = useState(false);

//   const handleToggle = () => setIsOpened(!isOpened);

//   return (
//     <div className="fixed w-full h-screen md:hidden z-50">
//       <Backdrop handleToggle={handleToggle} isOpened={isOpened} />

//       <ToggleButton handleToggle={handleToggle} isOpened={isOpened} />
//       <div
//         className={cn("w-9/12 absolute inset-0 h-screen transition-all ease-in-out duration-500 -translate-x-full", {
//           "translate-x-0": isOpened,
//         })}
//       >
//         <div className="bg-primary h-screen  pt-20">
//           <SideBar handleOnNavigation={handleToggle} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileSidebar;

// const circleStyle = { clipPath: "circle(0% at 16% 5%)" };
// const off = { clipPath: "circle(150% at 16% 5%)" };
const variants: Variants = {
  starter: {
    clipPath: "circle(10% at 16% 5%)",
    transition: {
      when: "beforeChildren",
      staggerChildren: 10,
      delayChildren: 20,
    },
  },
  end: {
    clipPath: "circle(150% at 16% 5%)",
    transition: {
      when: "afterChildren",
    },
  },
};

const MobileSidebar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggle = () => setIsOpened(!isOpened);

  return (
    <div className="fixed w-full h-screen md:hidden z-50">
      <Backdrop handleToggle={handleToggle} isOpened={isOpened} />

      <ToggleButton handleToggle={handleToggle} isOpened={isOpened} />

      <MotionDiv variants={variants} initial="starter" whileTap="end" className={"w-9/12 absolute inset-0 h-screen "}>
        {/* className={cn("w-9/12 absolute inset-0 h-screen ", { expanded: isOpened })}> */}
        {/* transition-all ease-in-out duration-500 menu */}
        <div className="bg-primary h-screen  pt-20">
          <SideBar handleOnNavigation={handleToggle} />
        </div>
      </MotionDiv>
    </div>
  );
};
export default MobileSidebar;
