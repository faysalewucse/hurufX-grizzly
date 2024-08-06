import { Link } from "react-router-dom";
import brandAndDesign from "../../assets/projects/brand-guidelines.png";
import uxui from "../../assets/projects/UXUI.png";

const Projects = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <ProjectContainer
          projectName={"BRAND GUIDELINES"}
          category={"Branding & Design"}
          link="/branding-and-design"
          imageUrl={brandAndDesign}
        />
        <ProjectContainer
          reverse
          projectName={"UXUI"}
          category={"Digital Development"}
          link="/digital-development"
          imageUrl={uxui}
        />
        <ProjectContainer
          projectName={"TATTOO MALAYSIA EXPO 2021"}
          category={"User Experience & Engagement"}
          link="/user-experience"
          imageUrl={brandAndDesign}
        />
      </div>
    </div>
  );
};

export default Projects;

const ProjectContainer = ({
  reverse = false,
  projectName,
  category,
  link,
  imageUrl,
}) => {
  return (
    <>
      <div
        className={`${
          reverse && "flex-row-reverse"
        } md:flex flex-row p-5 md:p-32 gap-10`}
      >
        <img src={imageUrl} alt="" className="md:w-1/2" />
        <div className="flex items-center md:justify-center flex-1 mt-5 md:mt-0">
          <div>
            <p data-aos="fade-up" className="text-5xl mb-10">
              {projectName}
            </p>
            <Link to={link} data-aos="fade-up" className="text-xl">
              {category}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
