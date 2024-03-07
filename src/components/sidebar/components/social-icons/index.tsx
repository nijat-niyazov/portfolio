import { FacebookIcon, GithubIcon, InstragramIcon, LinkedinIcon, TelegramIcon } from "@/assets";
import Link from "next/link";

const socialIcons = [
  { url: "#", icon: GithubIcon },
  { url: "#", icon: LinkedinIcon },
  { url: "#", icon: TelegramIcon },
  { url: "#", icon: InstragramIcon },
  { url: "#", icon: FacebookIcon },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-3  justify-center w-full">
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
