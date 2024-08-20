import { Link } from "react-router-dom";

const Brand = ({ textSize = "text-4xl" }) => {
  return (
    <Link to="/" className={`font-semibold text-white ${textSize} z-[99]`}>
      H<span className="">U</span>RUF
    </Link>
  );
};

export default Brand;
