import redefineImage from "../../assets/about-us/redefine-image.png";
import ecoSystem from "../../assets/about-us/ECOSYSTEM.png";
import GetInTouch from "../home/GetInTouch";

const AboutUs = () => {
  return (
    <div className="bg-dark text-white">
      <div className="md:flex">
        <h1 className="py-40 md:py-0 p-5 font-semibold md:w-1/2 flex items-center justify-center text-5xl">
          ABOUT <span className="font-normal ml-3">US</span>
        </h1>
        <img className="md:w-1/2" src={redefineImage} alt="image_1" />
      </div>
      <div className="bg-black flex items-center justify-center py-5 md:py-40 px-5">
        <p className="font-normal md:text-lg text-white max-w-4xl text-justify mx-auto">
          Drawing its name from the Malay word for &apos;letters&apos;,{" "}
          <b>HURUF</b> symbolizes the essence of communication, the bedrock of
          effective marketing. Just as letters combine to form meaningful words,
          our strategies are meticulously crafted to drive growth and nurture
          robust customer relationships. In the realm of HURUF, marketing
          transcends beyond mere promotion; it&apos;s about{" "}
          <b>creating connections, fostering growth,</b> and leading the way in
          a <b>digitally-dominated marketplace</b>.
        </p>
      </div>
      <div className="md:flex flex-row-reverse">
        <div className="md:w-1/2 flex flex-col py-20 items-center justify-center">
          <h1 className="font-semibold text-4xl">REDEFINING</h1>
          <h1 className="flex items-center justify-center text-4xl">
            DIGITAL MARKETING
          </h1>
        </div>
        <img className="md:w-1/2" src={redefineImage} alt="image_1" />
      </div>
      <div className="bg-black flex items-center justify-center p-5 md:py-40">
        <p className="md:text-lg text-white max-w-4xl text-justify mx-auto">
          At <b>HURUF</b>, we redefine the digital marketing landscape by
          blending in-depth strategy understanding with a commitment to ensuring
          your marketing investments are <b>efficient</b> and
          <b>impactful</b>. We position ourselves not merely as a marketing
          agency but as your <b>dedicated creative partners</b>, delving into
          the nuances of digital marketing to{" "}
          <b>tailor unique, innovative solutions</b> that align with your
          specific business needs. Our expertise guides you through the
          complexities of digital marketing, ensuring that every action taken is
          a strategic step towards <b> measurable success.</b>
        </p>
      </div>
      <div className="md:flex">
        <h1 className="font-normala px-5 md:w-1/2 flex items-center justify-center text-5xl py-20">
          OUR <span className="font-semibold ml-3">ECOSYSTEM</span>
        </h1>
        <img
          className="md:w-1/2 bg-black md:p-20"
          src={ecoSystem}
          alt="image_1"
        />
      </div>
      <div className="bg-black flex items-center justify-center py-5 md:py-40">
        <p className="font-normal md:text-lg text-white max-w-4xl text-justify mx-auto">
          At <b>HURUF</b>, we champion the power of collaboration within an{" "}
          <b>expansive ecosystem</b>. Our journey is marked by successful
          partnerships with a <b>diverse array</b> of industry leaders, each
          contributing uniquely to our collective achievements
        </p>
      </div>
      <div className="text-black">
        <GetInTouch />
      </div>
    </div>
  );
};

export default AboutUs;
