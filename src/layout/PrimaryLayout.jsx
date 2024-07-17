import { Outlet } from "react-router-dom";
import TopNavbar from "../components/Navbar/TopNavbar";
import Social from "../components/Social";
import Aos from "aos";
import "aos/dist/aos.css";
import { Keyhole } from "@phosphor-icons/react";

export const PrimaryLayout = () => {
  Aos.init();

  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <div className="hidden md:block fixed bottom-20 left-10">
        <Social />
      </div>
      <div className="fixed bottom-5 md:bottom-20 right-0">
        <p className="hidden md:block text-white -rotate-90 text-base">
          Start a Project
        </p>
        <hr className="hidden md:block text-white w-10 rotate-90 mt-20 ml-9" />
        <Keyhole
          weight="fill"
          className="text-white text-7xl md:text-5xl mt-8 ml-10"
        />
      </div>
      <TopNavbar />
      <div className="z-50">
        <Outlet />
      </div>
    </div>
  );
};
