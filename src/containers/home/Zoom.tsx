"use client";

import { cn } from "@/utils";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useState } from "react";

const MotionDiv = motion.div;

const MotionButton = motion.button;
const MotionLi = motion.li;

const containerVariants: Variants = {
  firstState: {
    // opacity: 0,
    x: "100vw",
  },
  view: {
    // opacity: 1,
    x: 0,
    transition: {
      // type: "spring",
      // stiffness: 120,
      // delay: 1,
      duration: 0.2,
    },
  },
  // leave: {
  //   x: "-100vh",
  //   transition: {
  //     duration: 0.2,
  //   },
  // },
};

const btnVariants: Variants = {
  // visible: { x: [0, -20, -40, -20, 0, 20, 40, 20, 0], transition: { delay: 1 } },

  hover: {
    scale: 1.1, // [1, 1.1, 1, 1.1, 1, 1.1, 1],

    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    borderColor: "red",
    color: "red",
    transition: {
      duration: 0.2,
      repeat: Infinity,

      repeatType: "reverse",
    },
  },
};

const elements = [
  ["Item 1", "Item 2", "Item 3"],
  ["Item 4", "Item 5", "Item 6"],
  ["Item 7", "Item 8", "Item 9"],
];

const Zoom = () => {
  const [start, setStart] = useState(false);
  const [step, setStep] = useState(0);
  const [selecteds, setSelecteds] = useState<string[]>([]);

  function handleAdd(itemName: string) {
    setSelecteds((prev) => [...prev, itemName]);
  }

  return (
    <div className="bg-yellow-300 p-10 rounded-md transition-all duration-200 min-h-[200vh] relative">
      <MotionButton
        variants={btnVariants}
        whileHover="hover"
        className="border-blue-300 border-2 text-[#2483d1] bg-transparent rounded-md  outline-2 outline-blue-200 px-4 py-2"
        onClick={() => setStart(!start)}
      >
        {start ? "End" : "Start"}
      </MotionButton>
      <AnimatePresence>
        {start && step === 0 && (
          <MotionDiv variants={containerVariants} initial="firstState" animate="view" exit="leave" className="w-1/2 my-10">
            <ul className="bg-red-300 p-10 rounded-md ">
              {elements[0].map((item) => (
                <MotionLi
                  onClick={() => handleAdd(item)}
                  key={item.toLowerCase()}
                  className={cn({ "font-bold": selecteds.includes(item) })}
                  transition={{
                    type: "spring",
                    stiffness: 160,
                  }}
                  whileHover={{
                    scale: 1.5,
                    color: "#2483d1",
                    originX: 0,
                  }}
                >
                  {item}
                </MotionLi>
              ))}
            </ul>
          </MotionDiv>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {start && step === 1 && (
          <MotionDiv variants={containerVariants} initial="firstState" animate="view" exit="leave" className="w-1/2 my-10">
            <ul className="bg-red-300 p-10 rounded-md ">
              {elements[1].map((item) => (
                <MotionLi
                  onClick={() => handleAdd(item)}
                  key={item.toLowerCase()}
                  className={cn({ "font-bold": selecteds.includes(item) })}
                  transition={{
                    type: "spring",
                    stiffness: 160,
                  }}
                  whileHover={{
                    scale: 1.5,
                    color: "#2483d1",
                    originX: 0,
                  }}
                >
                  {item}
                </MotionLi>
              ))}
            </ul>
          </MotionDiv>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {start && step === 2 && (
          <MotionDiv variants={containerVariants} initial="firstState" animate="view" exit="leave" className="w-1/2 my-10">
            <ul className="bg-red-300 p-10 rounded-md ">
              {elements[2].map((item) => (
                <MotionLi
                  onClick={() => handleAdd(item)}
                  key={item.toLowerCase()}
                  className={cn({ "font-bold": selecteds.includes(item) })}
                  transition={{
                    type: "spring",
                    stiffness: 160,
                  }}
                  whileHover={{
                    scale: 1.5,
                    color: "#2483d1",
                    originX: 0,
                  }}
                >
                  {item}
                </MotionLi>
              ))}
            </ul>
          </MotionDiv>
        )}
      </AnimatePresence>
      {start && (
        <div className="flex items-center justify-end gap-3">
          <MotionButton
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
            variants={btnVariants}
            whileHover="hover"
            className="bg-blue-300 disabled:opacity-50 rounded-md font-semibold px-4 py-2"
          >
            Back
          </MotionButton>
          <MotionButton
            onClick={() => {
              setStep(step + 1);
            }}
            variants={btnVariants}
            whileHover="hover"
            disabled={step === 2}
            className="bg-blue-300 disabled:opacity-50 rounded-md font-semibold px-4 py-2"
          >
            Next
          </MotionButton>
        </div>
      )}

      <div className="absolute p-20 min-h-40 bottom-20">
        <MotionButton className="px-4 py-2 bg-blue-300 text-white rounded-md" whileInView={{ scale: 1.5, transition: { duration: 0.5 } }}>
          OMG
        </MotionButton>
      </div>
    </div>
  );
};

export default Zoom;
