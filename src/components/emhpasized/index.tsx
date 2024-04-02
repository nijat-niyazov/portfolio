import { ReactNode } from "react";

const Emphasized = ({ children }: { children: ReactNode }) => {
  return <span className="[text-shadow:_0_0_4px_rgb(255_189_57_/_50%)] font-semibold text-primary">{children}</span>;
};

export default Emphasized;
