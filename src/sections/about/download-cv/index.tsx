'use client';

import { cn } from '@/utils';
import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

const DownloadCv = ({ className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Link
      className={cn(`px-4 py-2 bg-primary text-black inline-block font-semibold ${className}`)}
      href="/nijat.pdf"
      download="Nijat's CV"
      target="_blank"
    >
      Download CV
    </Link>

    // <button
    //   {...rest}
    //   onClick={handleDownloadCv}
    //   className={cn(`px-4 py-2 bg-primary text-black inline-block my-2 font-semibold ${className}`)}
    // >
    //   Download CV
    // </button>
  );
};

export default DownloadCv;
