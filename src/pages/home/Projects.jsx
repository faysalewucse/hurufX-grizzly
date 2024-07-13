import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import image from "../../assets/projects/project1.jpg";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
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
        scrub: 1, // Adjust scrub value as needed
      },
    });

    tl.to(topRow, { xPercent: 100, duration: 1 });
    tl.to(bottomRow, { xPercent: -100, duration: 1 }, "<");
  }, []);

  return (
    <section className="section flex flex-col gap-4">
      <div className="flex gap-4 overflow-x-hidden" ref={topRowRef}>
        <img src={image} alt="" />
        <img src={image} alt="" />
        <img src={image} alt="" />
      </div>
      <div className="flex gap-4 overflow-x-hidden" ref={bottomRowRef}>
        {/* ... images */}
      </div>
    </section>
  );
};

export default Projects;
