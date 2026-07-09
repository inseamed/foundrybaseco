const projects = [
  {
    title: "Residential Foundation Dig",
    location: "Millville, DE",
    tag: "EXCAVATION",
  },
  {
    title: "Commercial Lot Grading",
    location: "Retail development",
    tag: "GRADING",
  },
  {
    title: "Drainage & Trenching",
    location: "Residential subdivision",
    tag: "TRENCHING",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <span className="eyebrow">Selected Fieldwork</span>
      <h2>Recent Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-tile chamfer" key={project.title}>
            <div className="project-tile-photo">
              <span className="project-tile-tag">{project.tag}</span>
            </div>
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