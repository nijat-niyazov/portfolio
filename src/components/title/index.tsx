import { cn } from "@/utils";
import { HTMLAttributes } from "react";
import { MotionH1 } from "../motionGenerator";

type TitleProps = { title: string; animated?: boolean } & HTMLAttributes<HTMLHeadingElement>;

const Title = ({ title, className, animated = true }: TitleProps) => {
  const classNames = cn(
    `text-primary after:content-[''] after:block after:w-16 after:mt-3 after:h-1 after:bg-primary font-semibold text-3xl mb-10 ${className}`
  );

  return animated ? (
    <MotionH1
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 60, duration: 300 }}
      viewport={{ once: true }}
      className={classNames}
    >
      {title}
    </MotionH1>
  ) : (
    <h1 className={classNames}>{title}</h1>
  );
};

export default Title;
