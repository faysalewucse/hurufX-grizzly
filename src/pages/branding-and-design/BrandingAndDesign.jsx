import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import "./index.css";
import animation from "./animation.json";

const BrandingAndDesign = () => {
  return (
    <div className="inner-hero-banner  px-10 md:px-20 py-40">
      <div className="max-w-7xl mx-auto">
        <div className="globe-animation">
          <Lottie loop animationData={animation} play />
        </div>
        <div className="w-2/3">
          <div className="">
            <h2 className="text-secondary text-5xl" data-aos="fade-up">
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
              <div className="w-10 h-10 bg-white rounded-full group-hover/item:w-40 transition-all duration-500"></div>
              <hr className="group-hover/item:opacity-0 opacity-100 transition-all duration-500 border-secondary w-10" />
              <p className="group-hover/item:-ml-[165px] group-hover/item:text-black text-white font-medium transition-all duration-500 ml-5">
                Start ranking
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingAndDesign;
