import { CaretCircleRight } from "@phosphor-icons/react";
import "./index.css";
import Marquee from "react-fast-marquee";
import branding1 from "../../assets/digital-development/2D-(2).png";
import branding2 from "../../assets/digital-development/2D.png";
import branding3 from "../../assets/digital-development/3D.png";
import branding4 from "../../assets/digital-development/UXUI-(6).png";
import branding5 from "../../assets/digital-development/UXUI-(7).png";
import branding6 from "../../assets/digital-development/UXUI-(8).png";
import branding7 from "../../assets/digital-development/UXUI-(9).png";
import branding8 from "../../assets/digital-development/UXUI-(1).png";
import branding9 from "../../assets/digital-development/UXUI-(2).png";
import branding10 from "../../assets/digital-development/UXUI-(3).png";
import branding11 from "../../assets/digital-development/UXUI-(4).png";
import branding12 from "../../assets/digital-development/UXUI-(5).png";

const DigitalDevelopment = () => {
  const imageUrlList = [
    "https://www.wearegrizzly.com/wp-content/uploads/2024/02/1625IP.webp",
    "https://www.wearegrizzly.com/wp-content/uploads/2024/02/WDA.webp",
    "https://www.wearegrizzly.com/wp-content/uploads/2024/02/1625IP.webp",
    "https://www.wearegrizzly.com/wp-content/uploads/2024/02/WDA.webp",
    "https://www.wearegrizzly.com/wp-content/uploads/2024/02/1625IP.webp",
    "https://www.wearegrizzly.com/wp-content/uploads/2024/02/WDA.webp",
    "https://www.wearegrizzly.com/wp-content/uploads/2024/02/1625IP.webp",
    "https://www.wearegrizzly.com/wp-content/uploads/2024/02/WDA.webp",
    "https://www.wearegrizzly.com/wp-content/uploads/2024/02/1625IP.webp",
  ];

  const images = [
    branding1,
    branding2,
    branding3,
    branding4,
    branding5,
    branding5,
    branding6,
    branding7,
    branding8,
    branding9,
    branding10,
    branding11,
    branding12,
  ];

  return (
    <div className="max-w-7xl mx-auto py-40 md:py-0">
      <div className="lg:flex items-center">
        <div className="text-center">
          <div className="marquee-box">
            <div className="marquee-box-inner">
              {imageUrlList.map((url, index) => (
                <ImageComponent key={index} imageUrl={url} />
              ))}
            </div>
          </div>
        </div>
        <div className="p-5 md:w-1/2">
          <h2 className="text-white text-3xl md:text-5xl" data-aos="fade-up">
            Digital Development
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration={500}
            className="text-white md:text-2xl my-10"
          >
            Our Digital Development services focus on building responsive,
            user-friendly websites and applications, enhancing your online
            presence with custom content and SEO strategies.
          </p>
          <div className="group/item flex items-center cursor-pointer">
            <div className="w-10 h-10 bg-white rounded-full group-hover/item:w-52 transition-all duration-500"></div>
            <hr className="group-hover/item:opacity-0 opacity-100 transition-all duration-500 border-white w-10" />
            <p className="group-hover/item:-ml-[200px] group-hover/item:text-black text-white font-medium transition-all duration-500 ml-5">
              View Our Work
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:gap-20 my-40">
        {images.map((image, index) => (
          <div className="relative cursor-pointer group" key={index}>
            <img
              className="w-full"
              data-aos="fade-up"
              src={image}
              alt={`image-${index}`}
            />
            <div className="group-hover:bg-black/50 w-full h-full bg-black/0 absolute top-0 transition-all duration-500"></div>
            <Marquee
              data-aos="fade-up"
              speed={200}
              className="group-hover:opacity-100 opacity-0 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white text-3xl md:text-6xl flex gap-10 transition-opacity duration-500 h-40"
            >
              View Project{" "}
              <CaretCircleRight className="opacity-80" weight="fill" /> View
              Project
              <CaretCircleRight className="opacity-80" weight="fill" /> View
              Project <CaretCircleRight className="opacity-80" weight="fill" />{" "}
              View Project{" "}
              <CaretCircleRight className="opacity-80" weight="fill" /> View
              Project <CaretCircleRight className="opacity-80" weight="fill" />
              View Project{" "}
              <CaretCircleRight className="opacity-80" weight="fill" />
            </Marquee>
            <h1 className="group-hover:opacity-100 opacity-0 absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-4xl transition-opacity duration-500">
              {image.split("/").pop().split(".")[0]}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalDevelopment;

const ImageComponent = ({ imageUrl }) => {
  return (
    <div className="marquee-img-box">
      <span className="marquee-img">
        <img
          src={imageUrl}
          alt=""
          className="img-fluid"
          data-cmp-ab={2}
          data-cmp-info={10}
        />
      </span>
    </div>
  );
};
