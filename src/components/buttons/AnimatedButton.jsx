const AnimatedButton = ({ title }) => {
  return (
    <div className="group/item flex items-center cursor-pointer mt-5">
      <div className="w-10 h-10 bg-white rounded-full group-hover/item:w-80 transition-all duration-500"></div>
      <hr className="group-hover/item:opacity-0 opacity-100 transition-all duration-500 border-white w-5 md:w-10" />
      <p className="group-hover/item:-ml-[19rem] group-hover/item:md:-ml-80 group-hover/item:text-black text-white transition-all duration-500 ml-5">
        {title}
      </p>
    </div>
  );
};

export default AnimatedButton;
