import { MotionLink } from "@/components/motionGenerator";
import { socialIcons } from "@/contents/sidebar";

const SocialIcons = () => {
  return (
    <div className="flex items-center md:gap-3  justify-evenly md:justify-center w-full">
      {socialIcons.map(({ url, icon: Icon }, i) => (
        <MotionLink
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { delay: i * 0.1 } }}
          whileHover={{ scale: 1.2, transition: { repeat: Infinity, repeatType: "reverse", duration: 0.5 } }}
          transition={{ type: "spring", stiffness: 120, duration: 0.5, delay: i * 0.01 }}
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
