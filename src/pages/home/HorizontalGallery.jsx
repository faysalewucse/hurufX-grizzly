import image from "../../assets/projects/project1.jpg";

const HorizontalGallery = () => {
  return (
    <section className="section flex flex-col gap-4">
      <div className="flex gap-4">
        <ProjectImage src={image} />
        <ProjectImage src={image} />
        <ProjectImage src={image} />
        <ProjectImage src={image} />
        <ProjectImage src={image} />
        <ProjectImage src={image} />
      </div>
      <div className="flex gap-4">
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

export default HorizontalGallery;

const ProjectImage = ({ src }) => {
  return (
    <img className="w-1/2 h-96 object-cover" src={src} alt="project_image" />
  );
};
