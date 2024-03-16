import { ChevronRight } from "@/assets/icons";
import { MotionLi } from "@/components/motionGenerator";
import personalInfo from "@/content/personalInfo";

const Info = () => {
  return (
    <ul className="grid gap-3 md:grid-cols-2 mb-5">
      {personalInfo.map(({ category, text }, i) => (
        <MotionLi
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          // viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.1 }}
          key={i}
          className="flex  items-center group"
        >
          <ChevronRight /> {category}:
          <span
            className="relative ml-2
            
            before:content-[''] before:w-0 before:hover:w-full before:ease-in before:transition-[width] before:duration-300 before:mt-2 before:h-0.5 before:rounded-full  before:absolute before:top-full
            after:content-[''] after:w-0 after:hover:w-full after:ease-in after:transition-[width] after:duration-300 after:mt-2 after:h-0.5 after:rounded-full after:absolute after:top-full

            before:left-0 before:bg-white before:opacity-0 hover:before:opacity-100
            after:right-0  hover:after:bg-transparent after:bg-white hover:after:duration-0
            "
          >
            {text}
          </span>
        </MotionLi>
      ))}
    </ul>
  );
};

export default Info;
