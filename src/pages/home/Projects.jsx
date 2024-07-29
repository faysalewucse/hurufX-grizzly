import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <ProjectContainer
          projectName={"BRAND GUIDELINES"}
          category={"Branding & Design"}
          link="/branding-and-design"
        />
        <ProjectContainer
          reverse
          projectName={"UXUI"}
          category={"Digital Development"}
          link="/digital-development"
        />
        <ProjectContainer
          projectName={"TATTOO MALAYSIA EXPO 201"}
          category={"User Experience & Engagement"}
          link="/user-experience"
        />
      </div>
    </div>
  );
};

export default Projects;

const ProjectContainer = ({ reverse = false, projectName, category, link }) => {
  return (
    <>
      <div
        className={`${
          reverse && "flex-row-reverse"
        } md:flex flex-row p-5 md:p-32`}
      >
        <video
          data-aos="fade-up"
          className="md:w-1/2 h-full"
          autoPlay
          loop
          muted
          playsInline
          poster="https://www.wearegrizzly.com/wp-content/uploads/2023/06/mud.jpg"
          //   data-cmp-info="9"
        >
          {" "}
          <source
            src="https://www.wearegrizzly.com/wp-content/uploads/2023/06/mm.mp4"
            type="video/mp4"
            data-cmp-ab="2"
          />{" "}
        </video>
        <div className="flex items-center md:justify-center flex-1 mt-5 md:mt-0">
          <div>
            <p data-aos="fade-up" className="text-5xl">
              {projectName}
            </p>
            <Link to={link} data-aos="fade-up" className="text-xl mt-10">
              {category}
            </Link>
            <div data-aos="fade-up" className="mt-20">
              <p className="text-lg font-medium">View Project</p>
              <hr className="w-10 border-black" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
