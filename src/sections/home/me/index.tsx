"use client";

import { typingWords } from "@/contents/home";
import { TypeAnimation } from "react-type-animation";

const Me = () => {
  return (
    <h3 className="text-2xl font-normal">
      I'm
      <TypeAnimation sequence={typingWords} wrapper="span" speed={50} className="pb-2 border-b-4 border-primary " repeat={Infinity} />
    </h3>
  );
};

export default Me;
