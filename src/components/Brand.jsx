import { Link, useLocation } from "react-router-dom";

const Brand = ({ textSize = "text-4xl" }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to="/"
      className={`font-semibold ${
        pathname === "/contact-us" ? "text-black" : "text-white"
      } ${textSize} z-[99]`}
    >
      H<span className="">U</span>RUF
    </Link>
  );
};

export default Brand;
