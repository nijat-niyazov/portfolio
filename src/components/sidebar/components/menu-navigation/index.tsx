"use client";

import { navigation } from "@/contents/sidebar";
import { useActiveSectionStore } from "@/stores/";
import { cn } from "@/utils";

import { MotionLink } from "@/components/motionGenerator";
import { usePathname } from "next/navigation";

type Props = { handleOnNavigation?: () => void };

function MenuNavigation({ handleOnNavigation }: Props) {
  const { activeSection } = useActiveSectionStore((state) => state);
  const pathname = usePathname();

  return (
    <nav className="grid gap-3 px-4 md:px-2">
      {navigation.map(({ name, icon: Icon }, i) => {
        const active = i === activeSection && pathname === "/";
        return (
          <MotionLink
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ scale: active ? 1.25 : 1, originX: 0, opacity: active ? 1 : 0.6, y: 0 }}
            whileHover={{ opacity: 1, scale: 1.5, originX: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            href={`/#${name.toLowerCase()}`}
            key={name}
            className={cn("flex items-center gap-4   navigation-link  opacity-60 ", {
              "active-link [text-shadow:_0_0_4px_rgb(255_255_255_/_100%)] ": active,
            })}
          >
            <Icon />
            {name}
          </MotionLink>
        );
      })}
    </nav>
  );
}

export default MenuNavigation;
