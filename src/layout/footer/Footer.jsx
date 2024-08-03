import { Link, ScrollRestoration } from "react-router-dom";
import Brand from "../../components/Brand";
import image1 from "../../assets/footer/AOTY-2024.png";
import image2 from "../../assets/footer/MALAYSIA-TOP-ACHIEVERS-2023-LOGO.png";
import { Envelope } from "@phosphor-icons/react";

const Footer = () => {
  const quickLinks = [
    {
      label: "About us",
      href: "/about-us",
    },
    {
      label: "Services",
      href: "/",
    },
    {
      label: "Tech (Tess)",
      href: "/",
    },
    {
      label: "Web 3.0 (GZL)",
      href: "/",
    },
    {
      label: "HurufX",
      href: "/hurufX",
    },
    {
      label: "Contact us",
      href: "/contact-us",
    },
  ];

  return (
    <footer className="max-w-7xl text-2xl gap-10 mx-auto text-white md:flex justify-between p-5 md:px-10 md:py-20">
      <div className="flex-1">
        <Brand />
        <p className="text-white my-5">Improve your conversion today!</p>
        <p className="mt-10 text-sm">
          For inquiries, support, or to discuss your next big idea, don’t
          hesitate to get in touch. Our team is ready to assist you in
          harnessing the power of HURUFx for your business’s success
        </p>
        <p className="text-xs mt-10">
          ALL RIGHTS RESERVED © 2024. HURUF SDN BHD
        </p>
      </div>
      <div className="flex-1 flex md:justify-center">
        <div className="flex flex-col">
          <p className="text-white mb-10">Get in touch with us now!</p>
          <a
            href="mailto:nicholas@huruf.gg"
            className="text-lg flex items-center gap-1"
          >
            <Envelope weight="fill" /> nicholas@huruf.gg
          </a>
          <a
            href="mailto:mahathir@huruf.gg"
            className="text-lg flex items-center gap-1"
          >
            <Envelope weight="fill" /> mahathir@huruf.gg
          </a>
          <div className="flex gap-3 mt-10">
            <img src={image1} alt="brand1" className="w-20" />
            <img src={image2} alt="brand2" className="w-20" />
          </div>
        </div>
      </div>
      <div className="flex-1 flex text-lg mt-5 md:mt-0 gap-2 md:sjustify-center md:items-center">
        <div className="flex flex-col gap-3 text-xl">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="cursor-pointer hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <ScrollRestoration />
    </footer>
  );
};

export default Footer;
