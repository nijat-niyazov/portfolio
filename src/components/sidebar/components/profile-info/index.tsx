"use client";
import { mine } from "@/assets/images";
import { MotionDiv, MotionH1 } from "@/components/motionGenerator";
import Image from "next/image";

import Link from "next/link";

// const Mascino = generateMotionComponent("header");
// const MotionH1 = motion.h2;

function ProfileInfo() {
  return (
    <header className="flex items-center flex-col mb-5">
      <MotionDiv
        initial={{
          scale: 0,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          duration: 0.5,
        }}
        className="rounded-full border-8 mb-4 border-primary overflow-hidden group hover:scale-90 cursor-none"
      >
        <Image
          src={mine}
          alt="Logo"
          width={200}
          height={200}
          className="md:group-hover:scale-150 w-[150px] h-[150px] md:w-[200px]md:h-[200px] transition-all duration-200 object-cover"
        />
      </MotionDiv>

      <MotionH1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60 }}
        className="font-bold text-3xl"
      >
        Nijat Niyazov
      </MotionH1>
      <Link href="mailto:nijatniyazov56@gmail.com" target="_blank" className="italic opacity-80">
        nijatniyazov56@gmail.com
      </Link>
    </header>
  );
}

export default ProfileInfo;
