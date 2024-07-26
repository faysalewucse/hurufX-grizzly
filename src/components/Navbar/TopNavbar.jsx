import { useState } from "react";
import MenuButton from "../Animations/MenuButton/MenuButton";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { X } from "@phosphor-icons/react";
import Brand from "../Brand";
import { Link } from "react-router-dom";

function TopNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="fixed w-full top-0 z-[999]">
      <div className="p-10 flex items-center justify-between">
        <Brand />
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
              <NavItem toggleDrawer={toggleDrawer} href="/about-us">
                About Us
              </NavItem>
              <NavItem toggleDrawer={toggleDrawer} href="#services">
                Services
              </NavItem>
              <ul className="ml-10">
                <NavItem
                  toggleDrawer={toggleDrawer}
                  href="/branding-and-design"
                >
                  Branding & Design
                </NavItem>
                <NavItem
                  toggleDrawer={toggleDrawer}
                  href="/digital-development"
                >
                  Digital Development
                </NavItem>
                <NavItem toggleDrawer={toggleDrawer} href="/user-experience">
                  User Experience & Engagement
                </NavItem>
              </ul>
              <NavItem toggleDrawer={toggleDrawer} href="/hrufx">
                HURUFx
              </NavItem>
              <NavItem toggleDrawer={toggleDrawer} href="/" darken={false}>
                TECH (TESS)
              </NavItem>
              <NavItem toggleDrawer={toggleDrawer} href="/" darken={true}>
                WEB 3.0 (GZL)
              </NavItem>
              <NavItem toggleDrawer={toggleDrawer} href="/contact-us">
                Contact Us
              </NavItem>
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

const NavItem = ({ children, href, toggleDrawer }) => (
  <li
    className={`strokeme my-4 text-5xl font-bold hover:ml-5 transition-all duration-300`}
  >
    <Link onClick={toggleDrawer} to={href} className="text-black ">
      {children}
    </Link>
  </li>
);
