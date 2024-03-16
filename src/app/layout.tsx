import { MobileSidebar, SideBar } from "@/components";
import "@/styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Nijat Niyazov - Portfolio",
  description: "Front end developer portfolio website. Nijat Niyazov. React, Next.js, Tailwind CSS, Framer Motion, and more.",
  openGraph: {
    title: "Nijat Niyazov - Portfolio",
    description: "Front end developer portfolio website. Nijat Niyazov. React, Next.js, Tailwind CSS, Framer Motion, and more.",
    type: "website",
    url: "https://nijat.dev",
    images: [
      {
        url: "../assets/images/mine.png",
        width: 1200,
        height: 630,
        alt: "Nijat Niyazov - Portfolio",
      },
    ],
  },
};

// export const viewPort: Viewport = {
//   initialScale: 1,
//   minimumScale: 1,
//   maximumScale: 1,
//   width: "device-width",
//   height: "device-height",
//   // userScalable: false,
//   // viewportFit: "cover",
// };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex relative">
          <aside className="hidden md:block">
            <SideBar />
          </aside>
          <MobileSidebar />
          <main className="grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
