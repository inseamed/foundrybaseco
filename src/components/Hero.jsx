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
      <svg
        className="hero-contours"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path d="M-50,120 C 200,40 380,220 650,140 S 1050,60 1260,160" />
        <path d="M-50,230 C 220,150 400,330 660,250 S 1040,170 1260,270" />
        <path d="M-50,600 C 240,520 420,660 680,600 S 1030,540 1260,610" />
      </svg>

      <div className="hero-inner">
        <div className="hero-content">
          <span className="eyebrow">Millville, DE &amp; Surrounding Areas</span>
          <h1>Excavation &amp; Site Prep Done Right</h1>
          <p>
            Foundry Co. delivers reliable excavation, grading, and site
            preparation for residential and commercial projects across
            Millville, DE and the surrounding area.
          </p>
          <ul className="hero-flags">
            <li>Free Estimates Within 24 Hrs</li>
            <li>Owner On-Site Every Job</li>
            <li>Licensed &amp; Insured</li>
          </ul>
        </div>

        <form className="hero-form chamfer" onSubmit={handleSubmit}>
          <span className="hero-form-tag">Work Order — Est. #001</span>
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

          <button type="submit" className="btn-primary chamfer-sm">
            Get My Free Quote
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;