import {
  Briefcase,
  Cube,
  FacebookIcon,
  GithubIcon,
  HomeIcon,
  InstragramIcon,
  LinkedinIcon,
  PersonIcon,
  ResumeIcon,
  TelegramIcon,
} from "@/assets/icons";
import { mine } from "@/assets/images";

export const socialIcons = [
  { url: "https://github.com/nijat-niyazov", icon: GithubIcon },
  { url: "https://www.linkedin.com/in/nijatniyazov", icon: LinkedinIcon },
  { url: "https://www.t.me/nijatniyazovv", icon: TelegramIcon },
  { url: "https://instagram.com/niyazovnijatt", icon: InstragramIcon },
  { url: "https://www.facebook.com/nijatniyazov", icon: FacebookIcon },
];

export const sideBarImage = mine;
export const sideBarEmail = "nijatniyazov56@gmail.com";

export const navigation = [
  { icon: HomeIcon, name: "Home" },
  { icon: PersonIcon, name: "About" },
  { icon: ResumeIcon, name: "Resume" },
  { icon: Cube, name: "Skills" },
  { icon: Briefcase, name: "Portfolio" },
];
