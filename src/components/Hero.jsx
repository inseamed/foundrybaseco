function Hero() {
  return (
    <section className="hero">
      <div className="hero-streak hero-streak-gray-1"></div>
      <div className="hero-streak hero-streak-orange-1"></div>
      <div className="hero-streak hero-streak-gray-2"></div>
      <div className="hero-streak hero-streak-orange-2"></div>

      <div className="hero-content">
        <h1>Professional Excavation Services</h1>
        <p>
          Reliable excavation, grading, and site preparation for your next project.
        </p>

        <a href="#contact">
          <button>Request a Quote</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;