import { Link, ScrollRestoration } from "react-router-dom";
import Brand from "../../components/Brand";

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
        <div>
          <p className="text-white mb-10">Got a vision for your brand?</p>
          <p className="text-lg">nicholas@huruf.gg</p>
          <p className="text-lg">mahathir@huruf.gg</p>
        </div>
      </div>
      <div className="flex-1 flex text-lg mt-5 md:mt-0 gap-2 md:sjustify-center md:items-center">
        <div className="flex flex-col gap-3 text-xl">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="cursor-pointer hover:text-white"
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
