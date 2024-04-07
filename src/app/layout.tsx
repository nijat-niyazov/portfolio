import "@/styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nijat Niyazov - Front end developer",
  description: "Main skills - React, Next.js, Tailwind CSS, Framer Motion, and more.",
  keywords: ["Front end developer", "React", "Next.js", "Tailwind CSS", "Framer Motion", "Next.js App router", "app router", "Next.js 14"],
  openGraph: {
    images: [
      "https://scontent.fgyd12-1.fna.fbcdn.net/v/t39.30808-6/337039068_239638081859927_3890019577032024805_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ojmjZXd-Pk8Ab5V8kNf&_nc_ht=scontent.fgyd12-1.fna&oh=00_AfDDoQOtgMPINc4QsfqfZb25txq--I-EzaXwBANclgsVKQ&oe=6618E335",
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
