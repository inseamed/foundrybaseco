function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h2 className="footer-logo">
            FOUNDRY <span>CO.</span>
          </h2>
          <p>
            Excavation, grading, and site preparation for Millville, DE and
            the surrounding area.
          </p>
        </div>

        <div className="footer-col">
          <h3>Service Area</h3>
          <p>Millville, DE &amp; Surrounding Areas</p>
        </div>

        <div className="footer-col">
          <h3>Business Hours</h3>
          <p>
            Mon–Sat: 7am–6pm
            <br />
            Sunday: Closed
          </p>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <p>
            <a href="tel:+13028583224">(302) 858-3224</a>
            <br />
            Licensed &amp; Insured
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Foundry Co. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;