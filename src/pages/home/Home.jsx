import HeroSection from "./HeroSection";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <div className="z-50">
        <HeroSection />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
