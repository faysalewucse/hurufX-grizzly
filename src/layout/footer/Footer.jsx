import { ScrollRestoration } from "react-router-dom";
import Brand from "../../components/Brand";
import image1 from "../../assets/footer/AOTY-2024.png";
import image2 from "../../assets/footer/MALAYSIA-TOP-ACHIEVERS-2023-LOGO.png";
import { Envelope, Medal } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="max-w-7xl text-2xl gap-10 mx-auto text-white md:flex justify-between p-5 md:px-10 md:py-20">
      <div className="flex-1 md:w-2/3 text-justify">
        <Brand textSize="text-5xl text-white" />
        <p className="font-semibold text-white my-5">
          Improve your conversion today!
        </p>
        <p className="mt-10 text-base text-gray-400 md:w-2/3">
          For inquiries, support, or to discuss your next big idea, don’t
          hesitate to get in touch. Our team is ready to assist you in
          harnessing the power of HURUFx for your business’s success
        </p>
        <p className="text-gray-400 text-xs mt-10">
          ALL RIGHTS RESERVED © 2024. HURUF SDN BHD
        </p>
      </div>
      <div className="h-60 w-60 rounded-2xl bg-amber-50 md:my-0 my-10 lg:mx-0 mx-auto">
        <div className="flex flex-col items-center justify-center bg-dark h-60 w-60 rounded-2xl -mt-3 -ml-3">
          <Medal className="text-5xl" />
          <div className="flex flex-col">
            <div className="flex gap-5 mt-10">
              <img src={image1} alt="brand1" className="w-10" />
              <img src={image2} alt="brand2" className="w-10" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-60 w-60 rounded-2xl bg-amber-50 lg:mx-0 mx-auto">
        <div className="flex flex-col items-center -mt-3 -ml-3 justify-center bg-dark h-60 w-60 rounded-2xl">
          <Envelope className="text-5xl" />
          <a
            href="mailto:nicholas@huruf.gg"
            className="text-sm flex items-center gap-1"
          >
            m: nicholas@huruf.gg
          </a>
          <a
            href="mailto:mahathir@huruf.gg"
            className="text-sm flex items-center gap-1"
          >
            x: mahathir@huruf.gg
          </a>
          <a
            href="mailto:mahathir@huruf.gg"
            className="text-sm flex items-center gap-1"
          >
            e: elaine@huruf.gg
          </a>
        </div>
      </div>
      <ScrollRestoration />
    </footer>
  );
};

export default Footer;
