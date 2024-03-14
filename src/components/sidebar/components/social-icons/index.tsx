import { FacebookIcon, GithubIcon, InstragramIcon, LinkedinIcon, TelegramIcon } from "@/assets/icons";
import Link from "next/link";

const socialIcons = [
  { url: "https://github.com/nijat-niyazov", icon: GithubIcon },
  { url: "https://www.linkedin.com/in/nijatniyazov", icon: LinkedinIcon },
  { url: "https://www.t.me/nijatniyazovv", icon: TelegramIcon },
  { url: "https://instagram.com/niyazovnijatt", icon: InstragramIcon },
  { url: "https://www.facebook.com/nijatniyazov", icon: FacebookIcon },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center md:gap-3  justify-evenly md:justify-center w-full">
      {socialIcons.map(({ url, icon: Icon }) => (
        <Link
          key={url}
          target="_blank"
          href={url}
          className="p-3 bg-slate-800 hover:bg-primary transition-colors duration-100 ease-in text-white rounded-full social-link"
        >
          <Icon />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
