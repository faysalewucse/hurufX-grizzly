import React from "react";

const GetInTouch = () => {
  return (
    <div className="relative bg-white text-center p-5 md:p-40 flex items-center justify-center">
      <div className="absolute bg-secondary hover:h-full hover:w-full top-1/2 mt-20 -translate-y-1/2 w-16 h-16 left-1/2 opacity-50 hover:opacity-100 hover:mt-0 -translate-x-1/2 rounded-full hover:rounded-none transition-all duration-1000 z-10"></div>
      <div className="text-4xl z-20">
        <p data-aos="fade-up">Got a vision for your brand?</p>
        <p data-aos="fade-up" className="font-medium">
          Let's bring it to life.
        </p>
        <p data-aos="fade-up" className="text-lg mt-20">
          “Get in Touch”
        </p>
      </div>
    </div>
  );
};

export default GetInTouch;
