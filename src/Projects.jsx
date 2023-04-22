import { useFetchData } from "./fetchData";

const Projects = () => {
  const { isLoading, isError, projects } = useFetchData();

  if (isLoading) {
    return (
      <div className="projects">
        <div className="projects-center">
          <h1 className="title">Projects</h1>
          <div className="loading"></div>
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="projects">
        <div className="projects-center">
          <h1 className="title">Projects</h1>
          <h5>Something's wrong...</h5>
        </div>
      </div>
    );
  }
  return (
    <div className="projects">
      <div className="title ">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((item) => {
          const { title, url, img, id } = item;
          return (
            <a
              href={url}
              target="_blank"
              key={id}
              rel="noreferrer"
              className="project"
            >
              <img className="img" src={img?.fields?.file?.url} alt={title} />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
