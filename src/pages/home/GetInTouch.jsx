import { useState } from "react";

const GetInTouch = () => {
  const [hovering, setHovering] = useState(false);
  const handleMouseEnter = () => {
    setHovering(true);
  };
  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div className="relative bg-white text-center p-5 md:p-40 flex items-center justify-center">
      <div className="text-4xl z-20">
        <p data-aos="fade-up">Got a vision for your brand?</p>
        <p data-aos="fade-up" className="font-medium">
          Let&amp;s bring it to life.
        </p>
        <p
          data-aos="fade-up"
          className="white cursor-pointer text-lg mt-20"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          “Get in Touch”
        </p>
      </div>
      <div
        className={`absolute bg-primary top-1/2 mt-20 -translate-y-1/2 w-16 h-16 left-1/2 opacity-50 -translate-x-1/2 rounded-full transition-all duration-1000 z-10 ${
          hovering && "h-full w-full mt-0 rounded-none"
        }`}
      ></div>
    </div>
  );
};

export default GetInTouch;
