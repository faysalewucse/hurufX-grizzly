import image from "../../assets/projects/project1.jpg";

const Projects = ({ topRowRef, bottomRowRef }) => {
  return (
    <section className="section flex flex-col gap-4">
      <div className="flex gap-4" ref={topRowRef}>
        <ProjectImage src={image} />
        <ProjectImage src={image} />
        <ProjectImage src={image} />
        <ProjectImage src={image} />
        <ProjectImage src={image} />
        <ProjectImage src={image} />
      </div>
      <div className="flex gap-4" ref={bottomRowRef}>
        <ProjectImage src={image} />
        <ProjectImage src={image} />
        <ProjectImage src={image} />
        <ProjectImage src={image} />
        <ProjectImage src={image} />
        <ProjectImage src={image} />
      </div>
    </section>
  );
};

export default Projects;

const ProjectImage = ({ src }) => {
  return (
    <img className="w-1/2 h-96 object-cover" src={src} alt="project_image" />
  );
};
