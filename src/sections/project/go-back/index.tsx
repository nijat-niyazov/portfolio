"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="hover:underline bg-primary px-4 py-2 rounded-md mb-5 text-black  font-medium flex items-center group"
    >
      <ArrowLeft className="" /> Go Back
    </button>
  );
};

export default GoBack;
