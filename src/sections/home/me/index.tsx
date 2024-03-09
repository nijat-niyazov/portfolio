"use client";

import { TypeAnimation } from "react-type-animation";

const sequence = [" Professional Enthusiast", 1000, " Javascript Developer", 1000, " Front End Developer", 1000, " Constant learner"];

const Me = () => {
  return (
    <h3 className="text-2xl font-normal">
      I'm
      <TypeAnimation sequence={sequence} wrapper="span" speed={50} className="pb-3 border-b-2 border-white " repeat={Infinity} />
    </h3>
  );
};

export default Me;
