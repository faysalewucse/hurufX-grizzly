import { useEffect, useRef } from "react";
import HeroSection from "./HeroSection";
import VideoSection from "./VideoSection";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HorizontalGallery from "./HorizontalGallery";
import Projects from "./Projects";
import Brands from "./Brands";
import GetInTouch from "./GetInTouch";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  useEffect(() => {
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section",
        start: "top top",
        end: "bottom bottom",
        scrub: 10,
      },
    });

    console.log(tl);

    tl.to(topRow, { xPercent: 10, duration: 10 });
    tl.to(bottomRow, { xPercent: -10, duration: 10 }, "<");
  }, []);

  return (
    <div>
      <div className="z-50">
        <HeroSection />
        <HorizontalGallery topRowRef={topRowRef} bottomRowRef={bottomRowRef} />
        <VideoSection />
        <Projects />
        <Brands />
        <GetInTouch />
      </div>
    </div>
  );
};

export default Home;
