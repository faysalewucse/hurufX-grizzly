import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import "./index.css";
import animation from "./animation.json";
import branding1 from "../../assets/branding-and-design/BRANDING.png";
import branding2 from "../../assets/branding-and-design/COLOUR-VARIATIONS.png";
import branding3 from "../../assets/branding-and-design/GRAPHIC-ELEMENTS.png";
import branding4 from "../../assets/branding-and-design/LOGO-GEOMETRY.png";
import branding5 from "../../assets/branding-and-design/LOGO-SCORES.png";
import branding6 from "../../assets/branding-and-design/MOODBOARD.png";
import branding7 from "../../assets/branding-and-design/PRODUCT-SHOWCASE.png";
import branding8 from "../../assets/branding-and-design/TYPOGRAPHY.png";
import Marquee from "react-fast-marquee";
import { CaretCircleRight } from "@phosphor-icons/react";

const BrandingAndDesign = () => {
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
  ];

  return (
    <div className="inner-hero-banner px-5 md:px-20 pt-40">
      <div className="max-w-7xl mx-auto">
        <div className="globe-animation">
          <Lottie loop animationData={animation} play />
        </div>
        <div className="md:w-2/3">
          <div className="">
            <h2 className="text-white text-5xl" data-aos="fade-up">
              Branding & Design
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration={500}
              className="text-white text-2xl my-10"
            >
              Our Branding & Design services create a powerful visual identity
              for your brand, including logo design, brand development, and
              marketing collateral to ensure your brand stands out.
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
        <div className="flex flex-col gap-10 my-40">
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
                Project{" "}
                <CaretCircleRight className="opacity-80" weight="fill" /> View
                Project{" "}
                <CaretCircleRight className="opacity-80" weight="fill" /> View
                Project{" "}
                <CaretCircleRight className="opacity-80" weight="fill" />
                View Project{" "}
                <CaretCircleRight className="opacity-80" weight="fill" />
              </Marquee>
              <h1 className="group-hover:opacity-100 opacity-0 absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-4xl transition-opacity duration-500">
                {image.split("/").pop().split(".")[0].split(" ").join("_")}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandingAndDesign;
