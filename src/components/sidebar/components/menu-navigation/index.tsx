import { EnvelopeIcon, HomeIcon, PersonIcon, Portfolio } from "@/assets";
import { cn } from "@/utils";
import Link from "next/link";

const navigation = [
  { url: "#", icon: HomeIcon, name: "Home" },
  { url: "#", icon: PersonIcon, name: "About" },
  { url: "#", icon: HomeIcon, name: "Resume" },
  { url: "#", icon: Portfolio, name: "Works" },
  { url: "#", icon: EnvelopeIcon, name: "Contact" },
];

function MenuNavigation() {
  return (
    <nav className="grid gap-3">
      {navigation.map(({ url, name, icon: Icon }) => {
        const active = name === "Home";
        return (
          <Link
            key={name}
            href={url}
            className={cn("flex items-center gap-4 opacity-60 hover:opacity-100 navigation-link transition-colors duration-200", {
              "opacity-100 active-link": active,
            })}
          >
            <Icon />
            {name}
          </Link>
        );
      })}
    </nav>
  );
}

export default MenuNavigation;
