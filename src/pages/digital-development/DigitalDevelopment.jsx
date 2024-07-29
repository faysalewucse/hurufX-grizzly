import "./index.css";

const DigitalDevelopment = () => {
  const imageUrlList = [
    "https://www.wearegrizzly.com/wp-content/uploads/2024/02/1625IP.webp",
    "https://www.wearegrizzly.com/wp-content/uploads/2024/02/WDA.webp",
    "https://www.wearegrizzly.com/wp-content/uploads/2024/02/1625IP.webp",
    "https://www.wearegrizzly.com/wp-content/uploads/2024/02/WDA.webp",
    "https://www.wearegrizzly.com/wp-content/uploads/2024/02/1625IP.webp",
    "https://www.wearegrizzly.com/wp-content/uploads/2024/02/WDA.webp",
    "https://www.wearegrizzly.com/wp-content/uploads/2024/02/1625IP.webp",
    "https://www.wearegrizzly.com/wp-content/uploads/2024/02/WDA.webp",
    "https://www.wearegrizzly.com/wp-content/uploads/2024/02/1625IP.webp",
  ];

  return (
    <div className="max-w-7xl mx-auto py-40 md:py-0">
      <div className="lg:flex items-center">
        <div className="text-center">
          <div className="marquee-box">
            <div className="marquee-box-inner">
              {imageUrlList.map((url, index) => (
                <ImageComponent key={index} imageUrl={url} />
              ))}
            </div>
          </div>
        </div>
        <div className="p-5 md:w-1/2">
          <h2
            className="text-secondary text-3xl md:text-5xl"
            data-aos="fade-up"
          >
            Digital Development
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration={500}
            className="text-white md:text-2xl my-10"
          >
            Our Digital Development services focus on building responsive,
            user-friendly websites and applications, enhancing your online
            presence with custom content and SEO strategies.
          </p>
          <div className="group/item flex items-center cursor-pointer">
            <div className="w-10 h-10 bg-white rounded-full group-hover/item:w-40 transition-all duration-500"></div>
            <hr className="group-hover/item:opacity-0 opacity-100 transition-all duration-500 border-secondary w-10" />
            <p className="group-hover/item:-ml-[165px] group-hover/item:text-black text-white font-medium transition-all duration-500 ml-5">
              Start Project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalDevelopment;

const ImageComponent = ({ imageUrl }) => {
  return (
    <div className="marquee-img-box">
      <span className="marquee-img">
        <img
          src={imageUrl}
          alt=""
          className="img-fluid"
          data-cmp-ab={2}
          data-cmp-info={10}
        />
      </span>
    </div>
  );
};
