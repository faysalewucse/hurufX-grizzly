import "./home.css";

const VideoSection = () => {
  return (
    <div className="flex pl-20 py-20">
      <div className="text-white flex-1">
        <h1 className="text-[56px]">web design</h1>
        <h1 className="text-[56px]">Bristol</h1>
        <div className="btn-group text-white">
          <a
            className="btn-primary"
            href="https://www.wearegrizzly.com/web-design-bristol/"
            target="_self"
            data-cmp-ab="2"
          >
            <span className="btn-circle bg-white"></span>{" "}
            <span className="btn-label">Web Design Bristol</span>{" "}
          </a>
        </div>
      </div>
      <video width="50%" height="auto" autoPlay loop muted playsInline>
        <source
          src="https://www.wearegrizzly.com/wp-content/uploads/2023/08/Video_bg.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoSection;
