const testimonials = [
  {
    quote:
      "PLACEHOLDER — replace with a real customer quote before publishing.",
    name: "Customer Name",
    location: "City, DE",
  },
  {
    quote:
      "PLACEHOLDER — replace with a real customer quote before publishing.",
    name: "Customer Name",
    location: "City, DE",
  },
  {
    quote:
      "PLACEHOLDER — replace with a real customer quote before publishing.",
    name: "Customer Name",
    location: "City, DE",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
     <span className="eyebrow">Reviews</span>
      <h2>What Our Customers Say</h2>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card chamfer-sm" key={i}>
            <p className="testimonial-quote">"{t.quote}"</p>
            <p className="testimonial-name">{t.name}</p>
            <p className="testimonial-location">{t.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;