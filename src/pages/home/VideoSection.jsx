import play from "../../assets/play.svg";
import AnimatedButton from "../../components/buttons/AnimatedButton";

const VideoSection = () => {
  return (
    <div className="flex md:flex-row flex-col gap-5 md:pl-20 md:py-20 py-5">
      <div className="text-white flex-1 flex items-center pl-20">
        <div>
          <h1 className="text-[56px]">web design</h1>
          <h1 className="text-[56px]">Bristol</h1>
          <AnimatedButton title={"Production"} />
        </div>
      </div>
      <div className="relative md:w-1/2">
        <video width="100%" height="auto" autoPlay loop muted playsInline>
          <source
            src="https://www.wearegrizzly.com/wp-content/uploads/2023/08/Video_bg.mp4"
            type="video/mp4"
          />
        </video>
        <div className="bg-black/50 absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <img
          className="w-10 md:w-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={play}
          alt="play_button"
        />
      </div>
    </div>
  );
};

export default VideoSection;
