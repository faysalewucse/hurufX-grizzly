import "../branding-and-design/index.css";

const UserExperience = () => {
  return (
    <div className="inner-hero-banner px-10 md:px-20 md:py-40">
      <div className="max-w-7xl mx-auto">
        <div className="md:w-2/3">
          <div className="">
            <h2
              className="text-secondary text-3xl md:text-5xl"
              data-aos="fade-up"
            >
              User Experience & Engagement
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration={500}
              className="text-white md:text-2xl my-10"
            >
              We specialize in creating engaging user experiences through
              intuitive UI/UX design, social media strategies, and interactive
              media, ensuring your audience remains captivated and connected.
            </p>
            <div className="group/item flex items-center cursor-pointer">
              <div className="w-10 h-10 bg-white rounded-full group-hover/item:w-40 transition-all duration-500"></div>
              <hr className="group-hover/item:opacity-0 opacity-100 transition-all duration-500 border-secondary w-10" />
              <p className="group-hover/item:-ml-[165px] group-hover/item:text-black text-white font-medium transition-all duration-500 ml-5">
                Contact
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserExperience;
