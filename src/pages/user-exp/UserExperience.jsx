import "../branding-and-design/index.css";
import branding1 from "../../assets/branding-and-design/BRANDING.png";
import branding2 from "../../assets/branding-and-design/COLOUR-VARIATIONS.png";
import branding3 from "../../assets/branding-and-design/GRAPHIC-ELEMENTS.png";
import branding4 from "../../assets/branding-and-design/LOGO-GEOMETRY.png";
import branding5 from "../../assets/branding-and-design/LOGO-SCORES.png";
import branding6 from "../../assets/branding-and-design/MOODBOARD.png";
import branding7 from "../../assets/branding-and-design/PRODUCT-SHOWCASE.png";
import branding8 from "../../assets/branding-and-design/TYPOGRAPHY.png";

const UserExperience = () => {
  const images = [
    branding1,
    branding2,
    branding3,
    branding4,
    branding5,
    branding6,
    branding7,
    branding8,
  ];

  return (
    <>
      <div className="inner-hero-banner px-5 min-h-[100vh] flex items-center md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="md:w-2/3">
            <div className="">
              <h2 className="text-white text-5xl" data-aos="fade-up">
                User Experience & Engagement
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration={500}
                className="text-white text-2xl my-10"
              >
                We specialize in creating engaging user experiences through
                intuitive UI/UX design, social media strategies, and interactive
                media, ensuring your audience remains captivated and connected.
              </p>
              <div className="group/item flex items-center cursor-pointer">
                <div className="w-10 h-10 bg-white rounded-full group-hover/item:w-52 transition-all duration-500"></div>
                <hr className="group-hover/item:opacity-0 opacity-100 transition-all duration-500 border-white w-10" />
                <a
                  href="#ux-images"
                  className="group-hover/item:-ml-[200px] group-hover/item:text-black text-white font-medium transition-all duration-500 ml-5"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="ux-images"
        className="max-w-7xl mx-auto px-5 flex flex-col gap-10 my-40"
      >
        {images.map((image, index) => {
          const imagePath = image.split("/").pop().split(".")[0]; // Extract file name without extension
          const imageName = imagePath
            .replace(/- lezleolu/g, "")
            .replace(/-/g, " ")
            .replace(/\(.*\)/g, "")
            .trim(); // Remove unwanted characters and trim whitespace

          return (
            <div className="relative cursor-pointer group" key={index}>
              <img
                className="w-full"
                data-aos="fade-up"
                src={image}
                alt={`image-${index}`}
              />
              <div className="group-hover:bg-gradient-to-t from-black/50 to-transparent w-full h-full bg-black/0 absolute top-0 transition-all duration-500"></div>
              <h1 className="group-hover:opacity-100 opacity-0 absolute bottom-10 left-10 text-white text-4xl transition-opacity duration-500">
                {imageName}
              </h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserExperience;
