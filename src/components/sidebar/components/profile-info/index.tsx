import { MotionDiv } from "@/components/motionGenerator";
import { sideBarEmail, sideBarImage } from "@/contents/sidebar";
import Image from "next/image";
import Link from "next/link";

function ProfileInfo() {
  return (
    <div className="flex items-center flex-col mb-5">
      <MotionDiv
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, duration: 0.5 }}
        className="rounded-full border-8 my-4 border-primary overflow-hidden group hover:scale-90 cursor-none drop-shadow-lg-primary "
      >
        <Image
          src={sideBarImage}
          alt="Logo"
          width={200}
          height={200}
          className="md:group-hover:scale-[1.3] w-[160px] h-[160px] md:w-[180px] md:h-[180px] transition-all duration-200 object-cover"
        />
      </MotionDiv>

      <MotionDiv initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 60 }}>
        <h1 className="font-bold text-3xl [text-shadow:_0_0_4px_rgb(255_255_255_/_60%)] ">Nijat Niyazov</h1>

        <Link href={`mailto:${sideBarEmail}`} target="_blank" className="italic opacity-80">
          {sideBarEmail}
        </Link>
      </MotionDiv>
    </div>
  );
}

export default ProfileInfo;
