import Icon from "./Icon";

const services = [
  {
    icon: "tool",
    title: "Excavation",
    description:
      "Foundation digs, utility trenches, and full-site excavation for residential and commercial builds. We bring the right equipment and experience to handle jobs of any size.",
  },
  {
    icon: "layers",
    title: "Grading",
    description:
      "Precise land grading and leveling so your site drains correctly and is truly build-ready before the first crew arrives.",
  },
  {
    icon: "shield",
    title: "Site Preparation",
    description:
      "Land clearing, demolition, and debris removal to get your lot ready for construction, from start to finish.",
  },
  {
    icon: "award",
    title: "Trenching",
    description:
      "Clean, code-compliant trenching for water, sewer, and electrical utility lines, done right the first time.",
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <span className="eyebrow">What We Do</span>
      <h2>Our Services</h2>

      <div className="services-list">
        {services.map((service, index) => (
          <div
            className={`service-block ${
              index % 2 === 1 ? "service-block-reverse" : ""
            }`}
            key={service.title}
          >
            <div className="service-block-visual chamfer">
              <Icon name={service.icon} className="service-block-icon" />
            </div>
            <div className="service-block-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-block-link">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;