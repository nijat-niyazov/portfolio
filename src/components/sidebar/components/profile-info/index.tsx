import { sideBarEmail, sideBarImage } from "@/contents/sidebar";
import Image from "next/image";
import Link from "next/link";

function ProfileInfo() {
  return (
    <header className="flex items-center flex-col mb-5">
      <div className="rounded-full border-8 mb-4 border-primary overflow-hidden group hover:scale-90 transition-all duration-200 cursor-none">
        <Image
          src={sideBarImage}
          alt="Logo"
          width={200}
          height={200}
          className="md:group-hover:scale-150 w-[150px] h-[150px] md:w-[200px]md:h-[200px] transition-all duration-200 object-cover"
        />
      </div>

      <h1 className="font-bold text-2xl">Nijat Niyazov</h1>
      <Link href={`mailto:${sideBarEmail}`} target="_blank" className="italic opacity-80">
        {sideBarEmail}
      </Link>
    </header>
  );
}

export default ProfileInfo;
