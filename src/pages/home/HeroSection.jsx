import { Minus, Play } from "@phosphor-icons/react";

const HeroSection = () => {
  return (
    <div className="min-h-[60vh] py-40 px-[26vw]">
      <div className="w-[40vw] mb-96">
        <h1 className="text-secondary text-[56px] leading-snug">
          Inspiring Impact With Creativity
        </h1>
        <p className="text-white font-light text-3xl my-5 leading-snug">
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
        <p className="text-white text-3xl font-light leading-snug">
          We are a Bristol based creative digital agency that designs and builds
          for web and mobile. We design and develop stunning bespoke websites
          and help brands reach their customers with our wide range of online
          marketing strategies.
        </p>
        <p className="text-white mt-10">
          <span className="border-b border-b-secondary">our</span> work
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
