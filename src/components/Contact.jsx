import Icon from "./Icon";

function Contact() {
  return (
    <section id="contact" className="contact">
      <span className="eyebrow">Contact</span>
      <h2>Get in Touch</h2>
      <p>Ready to start your project? Reach out to Foundry Co. for a free quote.</p>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-info-item">
            <Icon name="clock" className="contact-info-icon" />
            <div>
              <h3>Phone</h3>
              <p>(302) 858-3224</p>
            </div>
          </div>

          <div className="contact-info-item">
            <Icon name="shield" className="contact-info-icon" />
            <div>
              <h3>Service Area</h3>
              <p>Millville, DE & surrounding areas</p>
            </div>
          </div>

          <div className="contact-info-item">
            <Icon name="award" className="contact-info-icon" />
            <div>
              <h3>Hours</h3>
              <p>Mon–Sat, 7am–6pm</p>
            </div>
          </div>
        </div>

        <form className="contact-form chamfer">
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="tel" name="phone" placeholder="Phone Number" />
          <textarea name="message" placeholder="Tell us about your project"></textarea>
          <button type="submit" className="btn-primary chamfer-sm">
            Request a Quote
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;