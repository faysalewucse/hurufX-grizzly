import Brand from "../../components/Brand";
import Social from "../../components/Social";

const Footer = () => {
  const quickLinks = [
    {
      label: "Web Design",
      href: "#webdesign-section",
    },
    {
      label: "SEO",
      href: "#seo-section",
    },
    {
      label: "Blog",
      href: "#blog-section",
    },
    {
      label: "Our Work",
      href: "#our-work-section",
    },
    {
      label: "Contact",
      href: "#contact-section",
    },
  ];

  return (
    <div className="max-w-7xl text-2xl gap-10 mx-auto text-white flex justify-between px-10 py-20">
      <div className="flex-1">
        <Brand />
        <p className="text-secondary my-5">Improve your conversion today!</p>
        <p className="mt-10 text-sm">
          For inquiries, support, or to discuss your next big idea, don’t
          hesitate to get in touch. Our team is ready to assist you in
          harnessing the power of HURUFx for your business’s success
        </p>
        <p className="text-xs mt-10">
          Grizzly © 2024. All Rights Reserved. Privacy Policy | Cookie Policy |
          Terms and Conditions Web Design Bristol SEO Bristol PPC Bristol
          Branding
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <div>
          <p className="text-secondary mb-10">Got a vision for your brand?</p>
          <p className="text-lg">nicholas@huruf.gg</p>
          <p className="text-lg">mahathir@huruf.gg</p>
          <Social flex="flex-row text-secondary mt-5" />
        </div>
      </div>
      <div className="flex-1 flex text-lg gap-2 justify-center items-center">
        <div className="flex flex-col gap-3 text-xl">
          {quickLinks.map((link, index) => (
            <p
              key={index}
              href={link.href}
              className="cursor-pointer hover:text-secondary"
            >
              {link.label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
