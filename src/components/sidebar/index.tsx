import { Footer, MenuNavigation, ProfileInfo, SocialIcons } from "./components";

const SideBar = ({ handleOnNavigation }: { handleOnNavigation?: () => void }) => {
  return (
    <div className="h-full md:h-screen bg-secondary text-white p-2 top-0 z-50 md:p-10  md:sticky grid ">
      <header>
        <ProfileInfo />
        <SocialIcons />
      </header>

      <MenuNavigation handleOnNavigation={handleOnNavigation} />

      <Footer />
    </div>
  );
};

export default SideBar;
