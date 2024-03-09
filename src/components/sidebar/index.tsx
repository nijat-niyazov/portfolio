import { Footer, MenuNavigation, ProfileInfo, SocialIcons } from "./components";

const SideBar = () => {
  return (
    <aside className="min-h-screen bg-black text-white p-10 grid sticky top-0 z-50 ">
      <div>
        <ProfileInfo />

        <SocialIcons />
      </div>

      <MenuNavigation />
      <Footer />
    </aside>
  );
};

export default SideBar;
