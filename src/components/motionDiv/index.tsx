"use client";

import { motion } from "framer-motion";
import { ElementType } from "react";

const generateMotionComponent = (componentName: ElementType) => {
  return motion(componentName);
};

export default generateMotionComponent;
