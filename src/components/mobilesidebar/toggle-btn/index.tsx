import { cn } from "@/utils";

type Props = {
  handleToggle: () => void;
  isOpened: boolean;
};

const ToggleButton = ({ handleToggle, isOpened }: Props) => {
  return (
    <button
      onClick={handleToggle}
      className="bg-primary w-12 h-12 rounded-full top-[5%] -translate-y-1/2 absolute left-[12%] -translate-x-1/2 flex items-center justify-center flex-col z-20"
    >
      {/* ------------------------------ Arrow version ----------------------------- */}
      {/* <span
        className={cn("w-5 h-0.5 transition-all duration-500 ease-out rounded-full bg-black my-0.5", {
          "-rotate-45 w-1/4 -translate-x-1/2   translate-y-[100%]": isOpened,
        })}
      />
      <span
        className={cn("w-5 h-0.5 transition-all ease-out duration-500 rounded-full bg-black my-0.5", {
          "translate-x-[1px]": isOpened,
        })}
      />
      <span
        className={cn("w-5 h-0.5 transition-all duration-500 ease-out rounded-full bg-black my-0.5", {
          "rotate-45 w-1/4   -translate-x-1/2 -translate-y-[100%]": isOpened,
        })}
      /> */}

      {/* ----------------------------- Cancel Version ----------------------------- */}

      <span
        className={cn("w-5 h-0.5 transition-all duration-500 ease-out rounded-full bg-black my-0.5 ", {
          "-rotate-45 translate-y-1.5": isOpened,
        })}
      />
      <span className={cn("w-5 h-0.5 transition-all ease-out duration-500 rounded-full bg-black my-0.5 ", { "opacity-0": isOpened })} />
      <span
        className={cn("w-5 h-0.5 transition-all duration-500 ease-out rounded-full bg-black my-0.5 ", {
          "rotate-45 -translate-y-1.5": isOpened,
        })}
      />
    </button>
  );
};

export default ToggleButton;
