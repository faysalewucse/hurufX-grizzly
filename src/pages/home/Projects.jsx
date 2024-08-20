import brandAndDesign from "../../assets/projects/brand-guidelines.png";
import uxui from "../../assets/projects/UXUI.png";
import AnimatedButton from "../../components/buttons/AnimatedButton";

const Projects = () => {
  return (
    <div className="text-white">
      <div className="">
        <ProjectContainer
          projectName={"BRAND GUIDELINES"}
          category={"Marketing (m)"}
          link="/branding-and-design"
          imageUrl={brandAndDesign}
          width="group-hover/item:w-48"
          ml="group-hover/item:-ml-[10.5rem] group-hover/item:md:-ml-48"
        />
        <ProjectContainer
          reverse
          projectName={"UXUI"}
          category={"Digital (x)"}
          link="/digital-development"
          imageUrl={uxui}
          width="group-hover/item:w-36"
          ml="group-hover/item:-ml-[8rem] group-hover/item:md:-ml-36"
        />
        <ProjectContainer
          projectName={"TATTOO MALAYSIA EXPO 2021"}
          category={"Engagement (e)"}
          link="/user-experience"
          imageUrl={brandAndDesign}
          width="group-hover/item:w-52"
          ml="group-hover/item:-ml-[11.5rem] group-hover/item:md:-ml-52"
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
  width,
  ml,
}) => {
  return (
    <>
      <div
        className={`${
          reverse && "flex-row-reverse"
        } md:flex flex-row items-center pr-5 py-5 md:pr-32 md:py-32 gap-10`}
      >
        <img src={imageUrl} alt="" className="md:w-1/2" />
        <div className="">
          <p
            data-aos="fade-up"
            className={`text-5xl mb-10 ${reverse && "w-60"}`}
          >
            {projectName}
          </p>
          <AnimatedButton title={category} width={width} ml={ml} link={link} />
        </div>
      </div>
    </>
  );
};
