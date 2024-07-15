import { useEffect, useRef } from "react";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import VideoSection from "./VideoSection";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
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
        <Projects topRowRef={topRowRef} bottomRowRef={bottomRowRef} />
        <VideoSection />
      </div>
    </div>
  );
};

export default Home;
