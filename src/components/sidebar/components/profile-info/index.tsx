"use client";
import { mine } from "@/assets/images";
import generateMotionComponent from "@/components/motionDiv";

import Image from "next/image";
import Link from "next/link";

const Mascino = generateMotionComponent("header");
const MotionH1 = generateMotionComponent("h2");

function ProfileInfo() {
  return (
    <Mascino initial={{ marginTop: 100, opacity: 0.2 }} animate={{ marginTop: 0, opacity: 1 }} className="flex items-center flex-col mb-5">
      <div className="rounded-full border-8 mb-4 border-primary overflow-hidden group hover:scale-90 transition-all duration-200 cursor-none">
        <Image
          src={mine}
          alt="Logo"
          width={200}
          height={200}
          className="md:group-hover:scale-150 w-[150px] h-[150px] md:w-[200px]md:h-[200px] transition-all duration-200 object-cover"
        />
      </div>

      <MotionH1 initial={{ fontSize: "30px", x: 50, y: -50 }} animate={{ fontSize: "40px", x: 0, y: 0 }} className="font-bold ">
        Nijat Niyazov
      </MotionH1>
      <Link href="mailto:nijatniyazov56@gmail.com" target="_blank" className="italic opacity-80">
        nijatniyazov56@gmail.com
      </Link>
    </Mascino>
  );
}

export default ProfileInfo;
