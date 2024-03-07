import Image from "next/image";
import Link from "next/link";

function ProfileInfo() {
  return (
    <header className="flex items-center gap-4 flex-col mb-5">
      <div className="rounded-full border-8 border-primary overflow-hidden group hover:scale-90 transition-all duration-200 cursor-none">
        <Image
          src="https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/profile-img.jpg"
          alt="Logo"
          width={200}
          height={200}
          className="group-hover:scale-125 transition-all duration-200"
        />
      </div>
      <Link href={"#"}>
        <h1 className="font-bold text-2xl">Nijat Niyazov</h1>
      </Link>
    </header>
  );
}

export default ProfileInfo;
