const projects = [
  {
    title: "Residential Foundation Dig",
    location: "Millville, DE",
  },
  {
    title: "Commercial Lot Grading",
    location: "Retail development",
  },
  {
    title: "Drainage & Trenching",
    location: "Residential subdivision",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Recent Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-tile" key={project.title}>
            <div className="project-tile-photo">Photo</div>
            <div className="project-tile-caption">
              <h3>{project.title}</h3>
              <p>{project.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;