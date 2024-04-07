import { MobileSidebar, SideBar } from "@/components";

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex relative">
      <aside className="hidden md:block">
        <SideBar />
      </aside>
      <MobileSidebar />
      <main className="grow">{children}</main>
    </div>
  );
}
