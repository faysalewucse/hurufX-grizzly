import logo1 from "../../assets/brands/bristol.webp";
import logo2 from "../../assets/brands/BournemouthUni.webp";
import logo3 from "../../assets/brands/GL_events_logo.webp";
import logo4 from "../../assets/brands/homepride.webp";
import logo5 from "../../assets/brands/LoveSavesTheDay.webp";
import logo6 from "../../assets/brands/Rovco.webp";
import logo7 from "../../assets/brands/SalonServices.webp";
import logo8 from "../../assets/brands/Tecan.webp";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className="">
      <div className="p-5 md:p-20">
        <p className="text-center text-white text-4xl mb-20">
          Who we work with
        </p>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 md:w-2/3 gap-10">
            <img src={logo1} alt="logo_1" />
            <img src={logo2} alt="logo_2" />
            <img src={logo3} alt="logo_3" />
            <img src={logo4} alt="logo_4" />
            <img src={logo5} alt="logo_5" />
            <img src={logo6} alt="logo_6" />
            <img src={logo7} alt="logo_7" />
            <img src={logo8} alt="logo_8" />
          </div>
        </div>
      </div>

      <div className="my-10">
        <Marquee className="text-white text-7xl h-28">
          Events & Activation - Brand Guidelines - UXUI -
        </Marquee>
        <Marquee className="text-white text-7xl h-28">
          2D & 3D Creatives - Strategic Partnerships - Talent Management -
        </Marquee>
      </div>
    </div>
  );
};

export default Brands;
