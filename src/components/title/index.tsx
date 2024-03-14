import { cn } from "@/utils";
import { HTMLAttributes } from "react";

type TitleProps = {
  title: string;
} & HTMLAttributes<HTMLHeadingElement>;

const Title = ({ title, className, ...rest }: TitleProps) => {
  return (
    <h1
      className={cn(
        `text-primary after:content-[''] after:block after:w-16 after:mt-3 after:h-1 after:bg-primary font-semibold text-3xl mb-10 ${className}`
      )}
      {...rest}
    >
      {title}
    </h1>
  );
};

export default Title;
