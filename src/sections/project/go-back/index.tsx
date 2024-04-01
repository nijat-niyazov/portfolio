"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className=" bg-primary px-4 py-2 rounded-md mb-5 text-black  font-medium flex items-center relative pl-8 group"
    >
      <ArrowLeft className="w-5 h-5 absolute left-2.5 group-hover:left-1 transition-all duration-200" /> Go Back
    </button>
  );
};

export default GoBack;
