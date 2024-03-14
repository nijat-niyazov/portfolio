import { cn } from "@/utils";
import { HTMLAttributes } from "react";
import Title from "../title";

type Props = { title: string; children: React.ReactNode } & HTMLAttributes<HTMLDivElement>;

const Section = ({ title, className, children, ...rest }: Props) => {
  return (
    <section className={cn(`py-14 px-4 md:px-8 ${className}`)} {...rest}>
      <Title title={title} />

      {children}
    </section>
  );
};

export default Section;
