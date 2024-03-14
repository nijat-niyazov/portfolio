"use client";

import { Briefcase, Cube, HomeIcon, PersonIcon } from "@/assets/icons";
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

function MenuNavigation({ handleOnNavigation }: Props) {
  const { activeSection, positions } = useActiveSectionStore((state) => state);

  function goToSection(position: number) {
    if (handleOnNavigation) handleOnNavigation();

    window.scrollTo({ top: position, behavior: !handleOnNavigation ? "instant" : "smooth" });
  }

  return (
    <nav className="grid gap-3 pl-5 md:p-0">
      {navigation.map(({ name, icon: Icon }, i) => {
        return (
          <button
            onClick={() => goToSection(positions[i])}
            key={name}
            className={cn(
              "flex items-center gap-4 md:hover:gap-2 opacity-60 md:hover:opacity-100 navigation-link transition-all duration-500 md:hover:scale-125 md:hover:pl-6",
              { "opacity-100 active-link scale-125 pl-6 gap-2": i === activeSection }
            )}
          >
            <Icon />
            {name}
          </button>
        );
      })}
    </nav>
  );
}

export default MenuNavigation;
