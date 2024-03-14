import { Footer, MenuNavigation, ProfileInfo, SocialIcons } from "./components";

const SideBar = ({ handleOnNavigation }: { handleOnNavigation?: () => void }) => {
  return (
    <div className="min-h-screen bg-black text-white p-2 md:p-10 grid sticky top-0 z-50">
      <div>
        <ProfileInfo />
        <SocialIcons />
      </div>

      <MenuNavigation handleOnNavigation={handleOnNavigation} />
      <Footer />
    </div>
  );
};

export default SideBar;
