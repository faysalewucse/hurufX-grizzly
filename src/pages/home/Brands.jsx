import logo1 from "../../assets/clients/CLIENT-1.png";
import logo2 from "../../assets/clients/CLIENT-2.png";
import logo3 from "../../assets/clients/CLIENT-3.png";
import logo4 from "../../assets/clients/CLIENT-4.png";
import logo5 from "../../assets/clients/CLIENT-5.png";
import logo6 from "../../assets/clients/CLIENT-6.png";
import logo7 from "../../assets/clients/CLIENT-7.png";
import logo8 from "../../assets/clients/CLIENT-8.png";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className="">
      <div className="p-5 md:p-20">
        <p
          data-aos="fade-down"
          className="text-center text-white text-4xl mb-20"
        >
          Who we work with
        </p>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 md:w-2/3 gap-1">
            <img
              data-aos="fade-up"
              src={logo1}
              alt="logo_1"
              className="-mb-20"
            />
            <img
              data-aos="fade-up"
              src={logo2}
              alt="logo_2"
              className="-mb-20"
            />
            <img
              data-aos="fade-up"
              src={logo3}
              alt="logo_3"
              className="-mb-20"
            />
            <img
              data-aos="fade-up"
              src={logo4}
              alt="logo_4"
              className="-mb-20"
            />
            <img
              data-aos="fade-up"
              src={logo5}
              alt="logo_5"
              className="-mt-20"
            />
            <img
              data-aos="fade-up"
              src={logo6}
              alt="logo_6"
              className="-mt-20"
            />
            <img
              data-aos="fade-up"
              src={logo7}
              alt="logo_7"
              className="-mt-20"
            />
            <img
              data-aos="fade-up"
              src={logo8}
              alt="logo_8"
              className="-mt-20"
            />
          </div>
        </div>
      </div>

      <div className="my-20">
        <Marquee className="text-white text-7xl h-28">
          Events & Activation - Brand Guidelines - UXUI - Events & Activation -
          Brand Guidelines - UXUI -
        </Marquee>
        <Marquee className="text-white text-7xl h-28">
          2D & 3D Creatives - Strategic Partnerships - Talent Management - 2D &
          3D Creatives - Strategic Partnerships - Talent Management -
        </Marquee>
      </div>
    </div>
  );
};

export default Brands;
