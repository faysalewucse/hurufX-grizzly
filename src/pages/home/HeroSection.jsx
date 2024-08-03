import CircleDot from "../../components/Animations/CircleDot";

const HeroSection = () => {
  return (
    <div className="relative min-h-[100vh] flex items-center justify-center px-5">
      <CircleDot />
      <div className="text-center">
        <div className="relative text-white font-bold text-4xl md:text-[56px] leading-snug my-96">
          <h1 data-aos="fade-down">Inspiring Impact</h1>
          <h1 data-aos="fade-up">With Creativity</h1>
        </div>
        <div className="relative text-left lg:w-1/2 mx-auto my-96">
          <div>
            <p
              data-aos="fade-up"
              className="text-white md:text-3xl text-xl font-light leading-snug"
            >
              We redefine the digital marketing landscape by blending in-depth
              strategy understanding with a commitment to ensuring your
              marketing investments are efficient and impactful.
            </p>
            <p data-aos="fade-up" className="text-white text-xl mt-10">
              <span className="border-b border-b-secondary">our</span> work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
