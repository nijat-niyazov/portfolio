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

function MenuNavigation() {
  const { activeSection, positions } = useActiveSectionStore((state) => state);

  function goToSection(position: number) {
    window.scrollTo({ top: position, behavior: "instant" });
  }

  return (
    <nav className="grid gap-3">
      {navigation.map(({ name, icon: Icon }, i) => {
        return (
          <button
            onClick={() => goToSection(positions[i])}
            key={name}
            className={cn("flex items-center gap-4 opacity-60 hover:opacity-100 navigation-link transition-colors duration-200", {
              "opacity-100 active-link": i === activeSection,
            })}
          >
            <Icon />
            {name}
          </button>

          // <Link
          //   key={name}
          //   href={url}
          //   className={cn("flex items-center gap-4 opacity-60 hover:opacity-100 navigation-link transition-colors duration-200", {
          //     "opacity-100 active-link": active,
          //   })}
          // >
          //   <Icon />
          //   {name}
          // </Link>
        );
      })}
    </nav>
  );
}

export default MenuNavigation;
