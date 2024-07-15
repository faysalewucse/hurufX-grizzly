import { Minus, Play } from "@phosphor-icons/react";

const HeroSection = () => {
  return (
    <div className="min-h-[60vh] py-20 md:pb-40 md:pt-80 px-5 md:px-[26vw]">
      <div className="md:w-[40vw] mb-96">
        <h1 className="text-secondary text-3xl md:text-[56px] leading-snug">
          Inspiring Impact With Creativity
        </h1>
        <p className="text-white font-light md:text-3xl text-xl my-5 leading-snug">
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
      <div data-aos="fade-up">
        <p className="text-white md:text-3xl text-xl font-light leading-snug">
          We redefine the digital marketing landscape by blending in-depth
          strategy understanding with a commitment to ensuring your marketing
          investments are efficient and impactful.
        </p>
        <p className="text-white mt-10">
          <span className="border-b border-b-secondary">our</span> work
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
