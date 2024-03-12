"use client";

import { useRouter } from "next/navigation";

const GoToBack = () => {
  const router = useRouter();

  function goBack() {
    router.back();
  }
  return (
    <button onClick={goBack} className="hover:underline">
      Go To Back
    </button>
  );
};

export default GoToBack;
