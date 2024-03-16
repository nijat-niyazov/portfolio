"use client";

import { navigation } from "@/contents/sidebar";
import { useActiveSectionStore } from "@/stores/";
import { cn } from "@/utils";

import { MotionButton } from "@/components/motionGenerator";

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
          <MotionButton
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ scale: i === activeSection ? 1.25 : 1, originX: 0, opacity: i === activeSection ? 1 : 0.6, y: 0 }}
            whileHover={{ opacity: 1, scale: 1.5, originX: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, delay: i * 5 }}
            onClick={() => goToSection(positions[i])}
            key={name}
            className={cn("flex items-center gap-4   navigation-link  opacity-60 ", {
              "active-link [text-shadow:_0_0_4px_rgb(255_255_255_/_100%)] ": i === activeSection,
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
