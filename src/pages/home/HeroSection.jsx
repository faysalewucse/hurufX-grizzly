import { Minus, Play } from "@phosphor-icons/react";
import CircleDot from "../../components/Animations/CircleDot";

const HeroSection = () => {
  return (
    <div className="relative min-h-[60vh] py-20 md:pb-40 pt-80 px-5 md:px-[26vw]">
      <CircleDot />
      <div className="md:w-[40vw] mb-96 z-20 relative">
        <h1
          data-aos="fade-down"
          className="text-secondary text-3xl md:text-[56px] leading-snug"
        >
          Inspiring Impact With Creativity
        </h1>
        <p
          data-aos="fade-down"
          className="text-white font-light md:text-3xl text-xl my-5 leading-snug"
        >
          delivering beautiful websites and marketing campaigns that get results
        </p>

        <div className="text-white flex items-center gap-4 hover:text-secondary cursor-pointer">
          <div className="relative">
            <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-20"></div>
            <Play
              weight="fill"
              className="bg-primary/20 hover:bg-white hover:text-black rounded-full text-6xl p-4 border border-secondary"
            />
          </div>
          <Minus />
          <p>View showreel</p>
        </div>
      </div>
      <div className="relative z-20">
        <p
          data-aos="fade-up"
          className="text-white md:text-3xl text-xl font-light leading-snug"
        >
          We redefine the digital marketing landscape by blending in-depth
          strategy understanding with a commitment to ensuring your marketing
          investments are efficient and impactful.
        </p>
        <p data-aos="fade-up" className="text-white mt-10">
          <span className="border-b border-b-secondary">our</span> work
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
