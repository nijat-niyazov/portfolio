"use client";

import { Section } from "@/components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NotFoundPage = () => {
  const pathname = usePathname();

  return (
    <Section title={`Project with name of "${pathname.slice(1)}" is not found`} className="min-h-screen  text-white border-none">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <h1 className="text-2xl font-semibold text-center">You can check other all projects from here</h1>
        <Link href="/#portfolio" className="text-xl hover:border-white border-b-2 border-transparent pb-1">
          Go to see projects
        </Link>
      </div>
    </Section>
  );
};

export default NotFoundPage;
