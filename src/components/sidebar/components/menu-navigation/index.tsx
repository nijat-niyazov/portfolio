"use client";

import { Briefcase, Cube, HomeIcon, PersonIcon } from "@/assets/icons";

import { MotionButton } from "@/components/motionGenerator";
import { useActiveSectionStore } from "@/stores/";
import { cn } from "@/utils";

const navigation = [
  { icon: HomeIcon, name: "Home" },
  { icon: PersonIcon, name: "About" },
  { icon: HomeIcon, name: "Resume" },
  { icon: Cube, name: "Skills" },
  { icon: Briefcase, name: "Portfolio" },
];

type Props = { handleOnNavigation?: () => void };

function MenuNavigation({ handleOnNavigation }: Props) {
  const { activeSection, positions } = useActiveSectionStore((state) => state);

  function goToSection(position: number) {
    // if (handleOnNavigation) handleOnNavigation();
    // window.scrollTo({ top: position, behavior: !handleOnNavigation ? "instant" : "smooth" });
  }

  const activeSectionoye = 0;

  return (
    <nav className="grid gap-3 pl-5 md:p-0">
      {navigation.map(({ name, icon: Icon }, i) => {
        return (
          <MotionButton
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.5, originX: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            onClick={() => goToSection(positions[i])}
            key={name}
            className={cn("flex items-center gap-4   navigation-link  opacity-60 md:hover:opacity-100", {
              "opacity-100 active-link [text-shadow:_0_0_4px_rgb(255_255_255_/_100%)]": i === activeSection,
            })}
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
