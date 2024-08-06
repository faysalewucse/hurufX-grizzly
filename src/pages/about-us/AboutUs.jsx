import redefineImage from "../../assets/about-us/redefine-image.png";
import ecoSystem from "../../assets/about-us/ECOSYSTEM.png";

const AboutUs = () => {
  return (
    <div className="bg-dark">
      <div className="max-w-7xl text-white text-justify mx-auto px-4">
        <div className="text-[45vh] flex items-center justify-center min-h-screen font-bold text-black relative">
          HURUF
          <div className="absolute text-white text-4xl lg:w-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="mb-10 text-center">About Us</h1>
            <p className="font-normal md:text-lg text-white">
              Drawing its name from the Malay word for &apos;letters&apos;,{" "}
              <b>HURUF</b> symbolizes the essence of communication, the bedrock
              of effective marketing. Just as letters combine to form meaningful
              words, our strategies are meticulously crafted to drive growth and
              nurture robust customer relationships. In the realm of HURUF,
              marketing transcends beyond mere promotion; it&apos;s about{" "}
              <b>creating connections, fostering growth,</b> and leading the way
              in a <b>digitally-dominated marketplace</b>.
            </p>
          </div>
        </div>
        <div className="py-10 px-5 bg-black">
          <img
            src={redefineImage}
            alt="redefine_image"
            className="w-[90%] h-[380px] object-cover mx-auto"
          />
          <h2 className="text-xl text-center md:text-3xl font-semibold my-10">
            Redefining Digital Marketing
          </h2>
          <p className="md:text-lg text-white w-2/3 mx-auto">
            At <b>HURUF</b>, we redefine the digital marketing landscape by
            blending in-depth strategy understanding with a commitment to
            ensuring your marketing investments are <b>efficient</b> and
            <b>impactful</b>. We position ourselves not merely as a marketing
            agency but as your <b>dedicated creative partners</b>, delving into
            the nuances of digital marketing to{" "}
            <b>tailor unique, innovative solutions</b> that align with your
            specific business needs. Our expertise guides you through the
            complexities of digital marketing, ensuring that every action taken
            is a strategic step towards <b> measurable success.</b>
          </p>
        </div>

        <div className="mt-20 py-10 px-5 w-[80%] mx-auto">
          <h2 className="text-[26px] text-center md:text-[40px] font-semibold my-10">
            A Testament to Ecosystem Synergy
          </h2>
          <p className="text-center">
            At <b>HURUF</b>, we champion the power of collaboration within an{" "}
            <b>expansive ecosystem</b>. Our journey is marked by successful
            partnerships with a <b>diverse array</b> of industry leaders, each
            contributing uniquely to our collective achievements
          </p>
          <div className="flex justify-center gap-10 my-20">
            <Circle
              title="A Commitment to Enhanced ROI"
              description={
                <p>
                  Our primary focus has always been on delivering tangible value
                  to our clients. In this endeavor, every new partnership is an{" "}
                  <b>opportunity</b> to refine our strategies and enhance return
                  on investment.
                </p>
              }
            />
            <Circle
              title="A Culture of Collective Success"
              description={
                <p>
                  It&apos;s imperative to express our sincere gratitude to all
                  our partners. The contributions from these collaborations have
                  been instrumental in enriching <b>HURUF&apos;s data points</b>
                  , leading to
                  <b>improvements</b> and <b>enhanced reliability.</b> This, in
                  turn, has been pivotal in achieving the outstanding results we
                  proudly showcase
                </p>
              }
            />
          </div>
          <p className="my-10 w-2/3 mx-auto text-center">
            In essence, <b>HURUF&apos;s portfolio</b> is more than a collection
            of successful projects; it&apos;s a narrative of cooperative
            innovation and shared triumphs.
          </p>
          <img
            src={ecoSystem}
            alt="redefine_image"
            className="w-[90%] mx-auto"
          />
        </div>

        <div className="mb-10"></div>
      </div>
    </div>
  );
};

export default AboutUs;

const Circle = ({ title, description }) => {
  return (
    <div className="w-96 flex flex-col items-center text-center">
      <div className="w-20 h-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
      <h1 className="font-bold text-xl my-5">{title}</h1>
      <p>{description}</p>
    </div>
  );
};
