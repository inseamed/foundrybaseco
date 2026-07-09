import { useState } from "react";

function Hero() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire this up to your form backend / email service
    console.log("Quote request submitted:", form);
  }

  return (
    <section className="hero">
      <div className="hero-streak hero-streak-gray-1"></div>
      <div className="hero-streak hero-streak-orange-1"></div>
      <div className="hero-streak hero-streak-gray-2"></div>
      <div className="hero-streak hero-streak-orange-2"></div>

      <div className="hero-inner">
        <div className="hero-content">
          <h1>Excavation & Site Prep Done Right</h1>
          <p>
            Foundry Co. delivers reliable excavation, grading, and site
            preparation for residential and commercial projects across
            Millville, DE and the surrounding area.
          </p>
        </div>

        <form className="hero-form" onSubmit={handleSubmit}>
          <h3>Request a Free Quote</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a Service
            </option>
            <option value="excavation">Excavation</option>
            <option value="grading">Grading</option>
            <option value="site-prep">Site Preparation</option>
            <option value="trenching">Trenching</option>
            <option value="other">Other</option>
          </select>

          <button type="submit">Get My Free Quote</button>
        </form>
      </div>
    </section>
  );
}

export default Hero;