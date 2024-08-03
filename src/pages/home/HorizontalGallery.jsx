import image from "../../assets/sliders/Slider-Image-1.png";
import image2 from "../../assets/sliders/Slider-Image-2.png";
import image4 from "../../assets/sliders/Slider-Image-4.png";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectImage = ({ src }) => {
  return (
    <img
      className="w-40 md:w-full h-32 md:h-96 object-cover"
      src={src}
      alt="project_image"
    />
  );
};

const HorizontalGallery = () => {
  const { scrollYProgress } = useScroll();

  // TranslateX values based on scroll position
  const translateX1 = useTransform(scrollYProgress, [0, 3], ["10%", "-100%"]);
  const translateX2 = useTransform(scrollYProgress, [0, 3], ["-10%", "100%"]);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  // Adjust margin based on scroll
  const marginBottom1 = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["-40px", "120px"]
  );

  return (
    <section className="flex flex-col lg:gap-4 py-20">
      <motion.div
        style={{ translateX: translateX1, marginBottom: marginBottom1, scale }}
        className="flex gap-4"
      >
        <ProjectImage src={image} />
        <ProjectImage src={image2} />
        <ProjectImage src={image4} />
      </motion.div>
      <motion.div
        style={{ translateX: translateX2, scale }}
        className="flex gap-4"
      >
        <ProjectImage src={image2} />
        <ProjectImage src={image4} />
        <ProjectImage src={image} />
      </motion.div>
    </section>
  );
};

export default HorizontalGallery;
