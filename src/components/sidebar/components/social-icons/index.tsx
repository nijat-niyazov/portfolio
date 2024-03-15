import { FacebookIcon, GithubIcon, InstragramIcon, LinkedinIcon, TelegramIcon } from "@/assets/icons";
import { MotionLink } from "@/components/motionGenerator";

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
      {socialIcons.map(({ url, icon: Icon }, i) => (
        <MotionLink
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            duration: 0.5,
            delay: i * 0.1,
          }}
          key={url}
          target="_blank"
          href={url}
          className="p-3 bg-slate-800 hover:bg-primary text-white rounded-full social-link"
        >
          <Icon />
        </MotionLink>
      ))}
    </div>
  );
};

export default SocialIcons;
