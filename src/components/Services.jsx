import Icon from "./Icon";

const services = [
  {
    icon: "tool",
    title: "Excavation",
    description: "Site excavation for residential and commercial projects.",
  },
  {
    icon: "layers",
    title: "Grading",
    description: "Precise land grading and leveling to prep your site.",
  },
  {
    icon: "shield",
    title: "Site Preparation",
    description: "Clearing, demolition, and prep work to get you build-ready.",
  },
  {
    icon: "award",
    title: "Trenching",
    description: "Utility trenching for water, sewer, and electrical lines.",
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <Icon name={service.icon} className="service-card-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#contact" className="service-card-link">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;