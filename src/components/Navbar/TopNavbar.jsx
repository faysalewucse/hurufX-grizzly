import { useState } from "react";
import MenuButton from "../Animations/MenuButton/MenuButton";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { X } from "@phosphor-icons/react";

function TopNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="fixed w-full top-0 z-[999]">
      <div className="p-10 flex items-center justify-between">
        <h1 className="font-semibold text-white text-4xl">HURUF</h1>
        <MenuButton onClick={toggleDrawer} />
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="top"
        style={{
          background: "#000000",
          height: "100vh",
        }}
      >
        <div className="relative flex items-center justify-center h-full">
          <nav>
            <ul className="flex flex-col items-start">
              <NavItem href="#about-us">About Us</NavItem>
              <NavItem href="#services">Services</NavItem>
              <ul className="ml-10">
                <NavItem href="#branding-design">Branding & Design</NavItem>
                <NavItem href="#digital-development">
                  Digital Development
                </NavItem>
                <NavItem href="#user-experience">
                  User Experience & Engagement
                </NavItem>
              </ul>
              <NavItem href="#hurufx">HURUFx</NavItem>
              <NavItem href="https://tess.gg" darken={false}>
                TECH (TESS)
              </NavItem>
              <NavItem href="#web-3" darken={true}>
                WEB 3.0 (GZL)
              </NavItem>
              <NavItem href="#contact-us">Contact Us</NavItem>
            </ul>
          </nav>
          <X
            className="text-white text-6xl absolute top-5 right-5 cursor-pointer"
            onClick={toggleDrawer}
          />
        </div>
      </Drawer>
    </div>
  );
}

export default TopNavbar;

const NavItem = ({ children, href, darken }) => (
  <li
    className={`my-4 text-5xl font-bold hover:ml-5 transition-all duration-300`}
  >
    <a href={href} className="text-secondary ">
      {children}
    </a>
  </li>
);
