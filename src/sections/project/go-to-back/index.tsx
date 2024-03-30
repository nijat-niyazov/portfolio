"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const GoToBack = () => {
  const router = useRouter();

  function goBack() {
    router.back();
  }
  return (
    <button
      onClick={goBack}
      className="hover:underline bg-primary px-4 py-2 rounded-md mb-5 text-black  font-medium flex items-center group"
    >
      <ArrowLeft className="" /> Go To Back
    </button>
  );
};

export default GoToBack;
