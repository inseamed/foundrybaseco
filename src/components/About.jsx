const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Licensed & Insured" },
];

function About() {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>
        Excavate Co. has been providing reliable excavation and site
        preparation services for years. We bring the right equipment,
        experience, and attention to detail to every job, big or small.
      </p>

      <div className="about-stats">
        {stats.map((stat) => (
          <div className="about-stat" key={stat.label}>
            <span className="about-stat-value">{stat.value}</span>
            <span className="about-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;