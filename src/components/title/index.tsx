import { cn } from "@/utils";
import { HTMLAttributes } from "react";
import { MotionH1 } from "../motionGenerator";

type TitleProps = { title: string } & HTMLAttributes<HTMLHeadingElement>;

const Title = ({ title, className }: TitleProps) => {
  return (
    <MotionH1
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 60, duration: 300 }}
      viewport={{ once: true }}
      className={cn(
        `text-primary after:content-[''] after:block after:w-16 after:mt-3 after:h-1 after:bg-primary font-semibold text-3xl mb-10 ${className}`
      )}
    >
      {title}
    </MotionH1>
  );
};

export default Title;
