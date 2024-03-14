"use client";

import { Briefcase, Cube, HomeIcon, PersonIcon } from "@/assets/icons";
import generateMotionComponent from "@/components/motionDiv";

import { useActiveSectionStore } from "@/stores/";
import { cn } from "@/utils";

const navigation = [
  { icon: HomeIcon, name: "Home" },
  { icon: PersonIcon, name: "About" },
  { icon: HomeIcon, name: "Resume" },
  { icon: Cube, name: "Skills" },
  { icon: Briefcase, name: "Portfolio" },
  // { icon: EnvelopeIcon, name: "Contact" },
];

type Props = { handleOnNavigation?: () => void };

const MotionButton = generateMotionComponent("button");

function MenuNavigation({ handleOnNavigation }: Props) {
  const { activeSection, positions } = useActiveSectionStore((state) => state);

  function goToSection(position: number) {
    if (handleOnNavigation) handleOnNavigation();

    window.scrollTo({ top: position, behavior: !handleOnNavigation ? "instant" : "smooth" });
  }

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.6 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <nav className="grid gap-3 pl-5 md:p-0">
      {navigation.map(({ name, icon: Icon }, i) => {
        return (
          <MotionButton
            variants={variants}
            // initial={{ y: "100%", opacity: 0 }}
            // animate={{ y: "0%", opacity: 1 }}
            transition={{ ease: "easeOut", delay: i * 0.05 }}
            onClick={() => goToSection(positions[i])}
            key={name}
            className={cn(
              "flex items-center gap-4 md:hover:gap-2 opacity-60 md:hover:opacity-100 navigation-link transition-all duration-500  md:hover:pl-6",
              { "opacity-100 active-link ": i === activeSection }
              // scale-125 pl-6 gap-2
              // md:hover:scale-125
            )}
          >
            <Icon />
            {name}
          </MotionButton>
        );
      })}
    </nav>
  );
}

export default MenuNavigation;
